const http = require('http')
const path = require('path')
const express = require('express')
const socketIo = require('socket.io')
const needle = require('needle')
const config = require('dotenv').config()
const TOKEN = process.env.TWITTER_BEARER_TOKEN
const PORT = process.env.PORT || 3000

const app = express()

const server = http.createServer(app)
const io = socketIo(server)

app.use(express.static("public"));

app.get ('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../', 'public', 'index.html'))
})

const rulesURL = 'https://api.twitter.com/2/tweets/search/stream/rules'
const streamURL = 'https://api.twitter.com/2/tweets/search/stream?tweet.fields=public_metrics&expansions=author_id'

let rules = [{value: 'gaming'}]

      // Rules opzetten op basis van topic
        // setrules(topic)
        // if(topic){//}
        // else{}
    
        // '/'
        // functie() => standaard lijstje
        // functie(topic)=> lijstje over topic
        
        // io.on('connection'){
        //  basis scenario 
        //  fetch(standaard)
        // socket.on('topic', (topic)=>{ fetch(topic); socket.emit('dataArrived', data) })


// Get Rules
async function getRules() {
    const response = await needle('get', rulesURL, {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
        },
    })

    return response.body
};

// Set Rules
async function setRules() {
    const data = {
        add: rules
    }

    const response = await needle('post', rulesURL, data, {
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${TOKEN}`,
        },
    })

    return response.body
};

// Delete Rules
async function deleteRules(rules) {
    if(!Array.isArray(rules.data)) {
        return null
    }

    const ids = rules.data.map((rule) => rule.id)

    const data = {
        delete: {
            ids: ids
        }
    }

    const response = await needle('post', rulesURL, data, {
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${TOKEN}`,
        },
    })

    return response.body
};

// Stream Feed
function streamRules(socket, topic) {
    const stream = needle.get(streamURL, {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
        },
    })

    stream.on('data', (data) => {
        try {
            const json = JSON.parse(data)
        socket.emit('tweet', json)
        } catch (error) {}
    });
};

io.on('connection', async (socket) => {
    let currentRules
    
    try {
        // Get all rules
        currentRules = await getRules()

        // Clean all rules
        await deleteRules(currentRules)

        // Set rules
        await setRules()
    } catch (error) {
        console.error(error)
        process.exit(1)
    }

    streamRules(io)

    socket.on('topic', async (topic) => {
       
        
        let currentRules
    
        try {
            // Get all rules
            currentRules = await getRules()
    
            // Clean all rules
            await deleteRules(currentRules)
    
            // Set rules
            await setRules()
        } catch (error) {
            console.error(error)
            process.exit(1)
        }
        // Rules opzetten op basis van topic
        // setrules(topic)
        // if(topic){//}
        // else{}
        streamRules(io, topic)

    })
})

server.listen(PORT, () => console.log(`Listening on port ${PORT}`))
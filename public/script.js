const tweetStream = document.getElementById('tweetStream')
const changeTopic = document.querySelectorAll('#buttons button')
const socket = io()

const tweets = []

socket.on('connect', () => {
  
})

socket.on('tweet', (tweet) => {
  const tweetData = {
    id: tweet.data.id,
    text: tweet.data.text,
    username: `@${tweet.includes.users[0].username}`,
  }

  const tweetEl = document.createElement('div')
  tweetEl.className = 'API'
  tweetEl.innerHTML = `
      <div class="card">
          <h5 class="card-title">${tweetData.text}</h5>
          <h6 class="card-subtitle">${tweetData.username}</h6>
          
          <a class="btn" href="https://twitter.com/${tweetData.username}/status/${tweetData.id}">
              <i class="twitter"></i> Go To Tweet    
          </a>
      </div>
  `

  tweetStream.appendChild(tweetEl)

  setTimeout(() => tweetEl.remove(), 5000)
})

changeTopic.forEach((topic) => {
  topic.addEventListener("click", () => {
    console.log(topic.innerText);
  })
})

// function hasNetwork(online) {
//   const element = document.querySelector(".card");

//   if (online) {
//       element.classList.remove("offline");
//       element.classList.add("online");
//       element.innerHTML = `
//       <div class="card">
//           <h5 class="card-title">${tweetData.text}</h5>
//           <h6 class="card-subtitle">${tweetData.username}</h6>
          
//           <a class="btn" href="https://twitter.com/${tweetData.username}/status/${tweetData.id}">
//               <i class="twitter"></i> Go To Tweet    
//           </a>
//       </div>
//   `
//   } else {
//     const offlineText = document.getElementById('offline')
//     offlineText.innerText = "Offline";
//   }
// }

// window.addEventListener("load", () => {
//   hasNetwork(navigator.online);

//   window.addEventListener("online", () => {
//     hasNetwork(true);
//   });

//   window.addEventListener("offline", () => {
//     hasNetwork(false);
//   });
// });
# Real-Time Web @cmda-minor-web · 2020/21

## Tweety

Keywords: Gaming and Tesla
![image](https://user-images.githubusercontent.com/78353674/115219987-54d53000-a108-11eb-806f-32cbae65d9ee.png)


### Possible ideas:

- Real Time Twitter Feed
- Spotify Quiz
- Puzzle duel
- CryptoCurrency Application

<details>

<summary>Screenshot ideas</summary>

![Folder structure](https://github.com/NielsPeeters96/real-time-web-2021/blob/main/public/img/Twitter_Puzzles.jfif)
![Folder structure](https://github.com/NielsPeeters96/real-time-web-2021/blob/main/public/img/Spotify.jfif)
![Folder structure](https://github.com/NielsPeeters96/real-time-web-2021/blob/main/public/img/puzzles.jfif)

</details>

---

<!-------------------------- New Paragraph -------------------------->

## 🔦 **Spike**
I thought it would be fun to choose for the puzzle concept and use it for my final assignment. I looked for an API for this as it is a requirement for this lecture. Unfortunately I have not found a suitable API for this and switched to the Twitter idea. For this I had to sign up for the developer portal on Twitter and waited for amy application review. This eventually worked out and now I can continue with my end product.

---

<!-------------------------- New Paragraph -------------------------->

## 💼 **Use case**
Companies can analyze data with selected keywords and use this to see how they are known on Twitter. Every time a certain keyword is talked about, it is automatically added to the Feed. In addition, companies can also see which tags are used most, so that they can respond to this with future campaignes and promotions.

---

<!-------------------------- New Paragraph -------------------------->

## 🌐 **Live link**
https://tweetyrtw.herokuapp.com/

---

<!-------------------------- New Paragraph -------------------------->

## 🚀 **Features**
- Shows different types of keywords for an example: Tesla, Gaming, Coding, Web development
- Press on a keyword
- All new tweets will be added to the DOM of this keyword
- Businesses can analyse data from certain keywords and use this in their benefit

---

<!-------------------------- New Paragraph -------------------------->

## 📦 **NPM Packages**

- Node JS
- Socket io
- Express
- Needle
- dotenv

---

<!-------------------------- New Paragraph -------------------------->

## 💻 **Installation**

### Clone the repository

```bash
  git clone https://github.com/NielsPeeters96/real-time-web-2021.git
```

### Navigate to the repository and install the packages

```bash
  npm install
```

---

<!-------------------------- New Paragraph -------------------------->

## 📋 **Data Life Cycle**
What is my Data Life Cycle and what objects do I use inside my API?

API Data:
```
{
   "data": {
       "id": "1263150595717730305",
       "public_metrics": {
           "retweet_count": 12,
           "reply_count": 14,
           "like_count": 49,
           "quote_count": 7
}
})
```

---
<!-------------------------- New Paragraph -------------------------->

## :crown: **Wishlist**

Below is a list of features I'd love to add to Tweety.  

**M** - Must haves  
_These features are like requirements for the end product_  
- [x] Set up Node JS environment
- [x] Implement Needle and Dotenv
- [x] Connect API
- [x] Real time feed using SocketIO
- [x] Add link that directs you to the Twitter message
- [ ] Adding different keywords
- [ ] Specific pages for each keyword

</br>

**S** - Should haves  
_These features are wanted, but not necessary for a usable product_  
- [ ] Style Twitter messages
- [ ] Add nice styling
- [ ] Create logic
- [ ] Create user feedback
- [ ] Make a search bar for a keyword
- [ ] Add Delighter.js
- [ ] Add Offline page

</br>

**W** - Would haves  
_These features can be added in the future_  
- [ ] Make a login system for different companies
- [ ] Let companies select interests
- [ ] Keywords are shown based on interests
---

<!-------------------------- New Paragraph -------------------------->
## ⏰ **SocketIO**
How do I use SocketIO?

---
<!-------------------------- New Paragraph -------------------------->

## 🔍 **Sources**

- Stackoverflow (n.d.). Searching for answers on dev questions - Stackoverflow. Retrieved 8 April from https://www.stackoverflow.com

- npm (n.d.). Package manager with many packages - npm. Retrieved 8 April from https://www.npmjs.com

- Node.js (n.d.). A Runtime engine server for Chrome V8 - Node.js. Retrieved 8 April from https://nodejs.org

- Express (n.d.). Framework for Node.js - Express. Retrieved 8 April from https://expressjs.com/

- SocketIO (n.d.) Real time package. Retrieved 14 April from https://www.npmjs.com/package/socket.io

- Needle (n.d.) Get API data. Retrieved 14 April from https://www.npmjs.com/package/needle

---

<!-------------------------- New Paragraph -------------------------->

## 🔐 **License**
This project is from Niels Peeters student Web Design and Development on HvA

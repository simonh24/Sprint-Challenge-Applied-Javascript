// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

function cardMaker(cardAttrs) {
    const {headline, authorPhoto, authorName} = cardAttrs;
    const divCard = document.createElement("div");
    const divHeadline = document.createElement("div");
    const divAuthor = document.createElement("div");
    const divContainer = document.createElement("div");
    const imgAuthor = document.createElement("img");
    const spanAuthor = document.createElement("span");
    divCard.classList.add("card");
    divHeadline.classList.add("headline");
    divAuthor.classList.add("author");
    divContainer.classList.add("img-container");
    divHeadline.textContent = headline;
    imgAuthor.setAttribute("href", authorPhoto);
    spanAuthor.textContent = authorName;
    divCard.appendChild(divHeadline);
    divCard.appendChild(divAuthor);
    divAuthor.appendChild(divContainer);
    divContainer.appendChild(imgAuthor);
    divAuthor.appendChild(spanAuthor);
    return divCard;
}

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        const allArticles = response.data.articles;
        const allArticlesArr = Object.keys(allArticles);
        const entry = document.querySelector("div.cards-container");
        for (let i = 0; i < allArticlesArr.length; i++) {
            for (let j = 0; j < allArticles[allArticlesArr[i]].length; j++) {
                entry.appendChild(cardMaker(allArticles[allArticlesArr[i]][j]));
            }
        }
    })
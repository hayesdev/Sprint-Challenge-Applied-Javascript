// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function newCard(array) {
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const authorName = document.createElement("span");

  // create structure
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(authorName);
  imgContainer.appendChild(img);

  // set content
  headline.textContent = array.headline;
  img.src = array.authorPhoto;
  authorName.textContent = `By ${array.authorName}`;

  // apply styles
  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  return card;
}

// console.log(newCard);

const cardsEntryPoint = document.querySelector(".cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response);
    const newCardData = response.data.articles;
    newCardData.javascript.forEach(item => {
      cardsEntryPoint.appendChild(newCard(item));
    });
    newCardData.javascript.forEach(item => {
      cardsEntryPoint.appendChild(newCard(item));
    });
    newCardData.bootstrap.forEach(item => {
      cardsEntryPoint.appendChild(newCard(item));
    });
    newCardData.technology.forEach(item => {
      cardsEntryPoint.appendChild(newCard(item));
    });
    newCardData.jquery.forEach(item => {
      cardsEntryPoint.appendChild(newCard(item));
    });
    newCardData.node.forEach(item => {
      cardsEntryPoint.appendChild(newCard(item));
    });

    // const newArray = Object.entries(newCardData);
    // console.log(newArray);
    // newArray.forEach(item => {
    //   const modArray = item[1];
    //   cardsEntryPoint.appendChild(newCard(modArray));
    // });
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });

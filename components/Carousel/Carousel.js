/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carouselMaker() {
  const divCarousel = document.createElement("div");
  const divLeftButton = document.createElement("div");
  const imgOne = document.createElement("img");
  const imgTwo = document.createElement("img");
  const imgThree = document.createElement("img");
  const imgFour = document.createElement("img");
  const divRightButton = document.createElement("div");

  divCarousel.classList.add("carousel");
  divLeftButton.classList.add("left-button");
  divRightButton.classList.add("right-button");

  divLeftButton.textContent = " < ";
  divRightButton.textContent = " > ";

  imgOne.setAttribute("src", "./assets/carousel/mountains.jpeg");
  imgTwo.setAttribute("src", "./assets/carousel/computer.jpeg");
  imgThree.setAttribute("src", "./assets/carousel/trees.jpeg");
  imgFour.setAttribute("src", "./assets/carousel/turntable.jpeg");

  divCarousel.appendChild(divLeftButton);
  divCarousel.appendChild(imgOne);
  divCarousel.appendChild(imgTwo);
  divCarousel.appendChild(imgThree);
  divCarousel.appendChild(imgFour);
  divCarousel.appendChild(divRightButton);
  return divCarousel;
}

console.log("hi");
document.querySelector("div.carousel-container").appendChild(carouselMaker());
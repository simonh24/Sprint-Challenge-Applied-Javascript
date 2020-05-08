// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const divHeader = document.createElement("div");
    const spanDate = document.createElement("span");
    const h1Times = document.createElement("h1");
    const spanTemp = document.createElement("span");
    divHeader.classList.add("header");
    spanDate.classList.add("date");
    spanTemp.classList.add("temp");
    spanDate.textContent = "SMARCH 28, 2019";
    h1Times.textContent = "Lambda Times";
    spanTemp.textContent = "98°";
    divHeader.appendChild(spanDate);
    divHeader.appendChild(h1Times);
    divHeader.appendChild(spanTemp);
    return divHeader;
}

document.querySelector("div.header-container").appendChild(Header());

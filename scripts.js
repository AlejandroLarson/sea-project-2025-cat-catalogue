/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */
// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// In data.js there is an array of cat objects named cats. This original data
// is used in the program and is available to be searched, filtered, or sorted
// and then displayed on the page.

// This function adds cards to the page to display the data
function showCards(catsArray) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  // Looping over cats array
  for (let i = 0; i < catsArray.length; i++) {
    let cat = catsArray[i];

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, cat); // Edit title, image, list of info, and paragraph
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, cat) {
  // Getting data from cat object
  let id = cat.id;
  let name = cat.name;
  let birthDate = cat.birthdate;
  let arrivalDate = cat.arrivaldate;
  let sex = cat.sex;
  let breed = cat.breed;
  let pattern = cat.pattern;
  let colors = cat.colors;
  let attributes = cat.attributes;
  let imageURL = cat.image;
  let description = cat.description;
  
  card.style.display = "block";

  // Adding image
  const cardImage = card.querySelector("img");
  cardImage.src = imageURL;
  cardImage.alt = "Photo of cat named " + name;

  // Editing name
  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = name;

  // Adding list items to card
  const cardList = card.querySelector("ul");

  let listItem = document.createElement("li");
  listItem.innerText = "Birth Date: " + birthDate;
  cardList.appendChild(listItem);

  listItem = document.createElement("li");
  listItem.innerText = "Arrival Date: " + arrivalDate;
  cardList.appendChild(listItem);

  listItem = document.createElement("li");
  listItem.innerText = "Sex: " + sex;
  cardList.appendChild(listItem);

  listItem = document.createElement("li");
  listItem.innerText = "Breed: " + breed;
  cardList.appendChild(listItem);

  listItem = document.createElement("li");
  listItem.innerText = "Pattern: " + pattern;
  cardList.appendChild(listItem);

  listItem = document.createElement("li");
  itemColorText = "";
  for(let i = 0; i < colors.length; i++) {
    if(i < colors.length - 1) {
      itemColorText += colors[i] + ", ";
    } else {
      itemColorText += colors[i];
    }
  }
  listItem.innerText = "Color: " + itemColorText;
  cardList.appendChild(listItem);

  listItem = document.createElement("li");
  itemAttributesText = "";
  for(let i = 0; i < attributes.length; i++) {
    if(i < attributes.length - 1) {
      itemAttributesText += attributes[i] + ", ";
    } else {
      itemAttributesText += attributes[i];
    }
  }
  listItem.innerText = "Attributes: " + itemAttributesText;
  cardList.appendChild(listItem);

  // Editing paragraph
  const cardParagraph = card.querySelector("p");
  cardParagraph.textContent = description;

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", name, "- html: ", card);
}



// This function will filter, search, and/or sort the data array according 
// to user choices. Then it calls the showCards function.
function applyFilterSearchSort() {
  // We want a shallow copy of original cats that we can modify.
  let filteredCats = [...cats];

  // Get Filters
  const breedFilter = document.getElementById("breedFilter").value;
  const patternFilter = document.getElementById("patternFilter").value;
  const colorFilter = document.getElementById("colorFilter").value;
  const sexFilter = document.getElementById("sexFilter").value;

  // Get Sort
  const sortSelect = document.getElementById("sortSelect").value;

  // Get user input in search bar
  const userInput = document.getElementById("searchName").value.trim().toLowerCase();

  // Apply Filters if needed
  // Note: value is "" if select menu is set to all/any
  if (breedFilter) {
    filteredCats = filteredCats.filter(cat => cat.breed.toLocaleLowerCase() === breedFilter.toLocaleLowerCase());
  }

  if (patternFilter) {
    filteredCats = filteredCats.filter(cat => cat.pattern.toLocaleLowerCase() === patternFilter.toLocaleLowerCase());
  }

  if (colorFilter) {
    filteredCats = filteredCats.filter(cat => cat.colors.includes(colorFilter));
  }

  if (sexFilter) {
    filteredCats = filteredCats.filter(cat => cat.sex.toLocaleLowerCase() === sexFilter.toLocaleLowerCase());
  }

  // Search for name provided by user
  if (userInput) {
    filteredCats = filteredCats.filter(cat => cat.name.toLocaleLowerCase().includes(userInput));
  }

  // Apply sort if needed
  switch (sortSelect) {
    case "name-asc":
      filteredCats.sort((a,b) => a.name.localeCompare(b.name));
      break;
    case "name-desc":
      filteredCats.sort((a,b) => b.name.localeCompare(a.name));
      break;
    case "age-asc": // younger cats go first
      filteredCats.sort((a,b) => new Date(b.birthdate) - new Date(a.birthdate));
      break;
    case "age-desc": // older cats go first
      filteredCats.sort((a,b) => new Date(a.birthdate) - new Date(b.birthdate));
      break;
  }
    
  // Present the data with the modified cat array
  showCards(filteredCats);

}

// This will reset every selection menu back to default and then display
// cards using the original cats array
function resetAll(){
  document.getElementById("searchName").value = "";
  document.getElementById("breedFilter").value = "";
  document.getElementById("patternFilter").value = "";
  document.getElementById("colorFilter").value = "";
  document.getElementById("sexFilter").value = "";
  document.getElementById("sortSelect").value = "";
  showCards(cats);
}



// Displays a quote
function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!"
  );
}

function removeLastCard() {
  cats.pop(); // Remove last item in titles array
  showCards(cats); // Call showCards again to refresh
}

// This calls the showCards() function when the page is first loaded
// It also will attach required event listeners to filters/sorts drop down menus
document.addEventListener("DOMContentLoaded", () => {
  showCards(cats);
  const selects = document.querySelectorAll(".filter-sort-section select");
  selects.forEach(select => select.addEventListener("change", applyFilterSearchSort));
});




// Retrieve DOM elements
// TODO: Get references to the required DOM elements using document.getElementById()
const randomizeButton = document.getElementById("randomize");
const posterImage = document.getElementById("poster-image");
const posterTitle = document.getElementById("poster-title");
const posterQuote = document.getElementById("poster-quote");
// custom variables
// !!!!!not write values assign here because when javasctipt will read this lines it does not know value at beggining, therefore it will be undefine.
const customTitle = document.getElementById("poster-form-title");
const customQuote = document.getElementById("poster-form-quote");
const submitBtn = document.getElementById("submit");

// Array of predefined poster objects
const posters = [
  {
    image:
      "https://travelprnews.com/wp-content/uploads/2021/11/https___specials-images.forbesimg.com_imageserve_920377840_0x0.jpg",
    title: "Nora",
    quote: "Adventure is out there.",
  },
  {
    image: "https://guides.williams.edu/files/2016/06/travel-04.jpg",
    title: "Shmidt",
    quote: "Live your life by a compass, not a clock.",
  },
  {
    image:
      "https://www.rd.com/wp-content/uploads/2020/04/GettyImages-1093840488-5-scaled.jpg?resize=1536,1024",
    title: "Socrates",
    quote: "The journey, not the arrival, matters.",
  },
  // Add more poster objects as needed
];
posterTitle.textContent = posters[0].title;
posterQuote.textContent = posters[0].quote;
posterImage.src = posters[0].image;
// Event listener for randomize button
// TODO: Add an event listener to the randomizeButton that calls a function when clicked
randomizeButton.addEventListener("click", generateRandomPoster);

// Event listener for submit button
// TODO: Add an event listener to the submitButton that calls a function when clicked
submitBtn.addEventListener("click", generateCustomPoster);
// Function to generate a random poster
function generateRandomPoster() {
  document.querySelector(".poster").classList.remove("hidden");
  let randomObject = posters[Math.floor(Math.random() * posters.length)];
  const { image, title, quote } = randomObject;
  posterImage.src = image;
  posterTitle.textContent = title;
  posterQuote.textContent = quote;
  // TODO: Generate a random index within the range of the posters array length
  // TODO: Retrieve the random poster object from the posters array
  // TODO: Call the function to update the DOM with the values from the random poster object
}

// Function to generate a custom poster
function generateCustomPoster(event) {
  event.preventDefault();
  // TODO: Retrieve the entered quote and author from the input fields
  const newTitle = customTitle.value;
  const newQuote = customQuote.value;

  // TODO: Create a custom poster object with the entered values
  const customPosterObject = {
    image:
      "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=1060&t=st=1687377706~exp=1687378306~hmac=cf0d2f87aacfbb961365d1d74c5a0f9a8b9bbee0dc4416cff34db3a47941186e",
    title: newTitle,
    quote: newQuote,
  };

  // TODO: Call the function to update the DOM with the values from the custom poster object
  function updateDom(grabedObject) {
    return posters.push(grabedObject);
  }
  //we have to run above function, we only declared above, it won't run by itself.
  updateDom(customPosterObject);
}

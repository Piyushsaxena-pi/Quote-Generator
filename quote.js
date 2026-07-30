const displayQuote = document.querySelector(".message");
const displayNames = document.querySelector(".names");
const button = document.querySelector(".quote-button");

const quotes = [
  "Stop Stressing Everything Will Be Okay.Just Let It Go.",
  "Success does not come to you, YOU GO TO IT.",
  "Formula for success: Rise Early, Work Hard, Strike Oil.",
  "If you can dream it, you can do it.",
  "Keep your eyes on the stars, and your feet on the ground.",
  "Success is how high you bounce when you hit bottom.",
  "Your time is limited, so don’t waste it living someone else’s life.",
  "Do not let the fear of losing be greater than the excitement of winning.",
  "If you don not build your dream, someone else will hire you to help them build theirs.",
  "The Place between your Comfort zone and your Dream is where life takes place.",
];
const authors = [
  "~ Piyush",
  "~ Marva Collins",
  "~ J.Paul Getty",
  "~ Walt Disney",
  "~ Theodore Roosevelt",
  "~ George S. Patton",
  "~ Steve Jobs",
  "~ Robert Kiyosaki",
  "~ Dhirubhai Ambani",
  "~ Helen Keller",
];

let countClicked = 0;
function display() {
  displayQuote.textContent = quotes[countClicked];
  displayNames.textContent = authors[countClicked];
}

button.addEventListener("click", () => {
  display();
  countClicked++;

  if (countClicked > quotes.length) {
    countClicked = 0;
    displayQuote.textContent = " All Quotes have Done.";
  }
});

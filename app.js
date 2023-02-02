const quote = document.getElementById("quote");
const btn = document.getElementById("btn");
const author = document.getElementById("author");
const day = document.getElementById("day");
const night = document.getElementById("night");

function getQuote() {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      quote.innerHTML = data.content;
      author.innerHTML = data.author;
    });
}
getQuote();

//toggle day/night
function nightmode() {
  document.documentElement.style.setProperty("--main", "black");
  document.documentElement.style.setProperty("--bg", "rgb(204, 204, 204)");
}
function daymode() {
  document.documentElement.style.setProperty("--main", "purple");
  document.documentElement.style.setProperty("--bg", "#fff");
}
btn.addEventListener("click", getQuote);
night.addEventListener("click", nightmode);
day.addEventListener("click", daymode);

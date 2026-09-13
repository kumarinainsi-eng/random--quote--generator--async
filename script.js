const quoteBtn = document.getElementById("quoteBtn");
const quote = document.getElementById("quote");
const author = document.getElementById("author");

quoteBtn.addEventListener("click", async function () {

    quote.textContent = "Loading...";
    author.textContent = "";

    try {

        const response = await fetch("quotes.json");

        const data = await response.json();

        const randomIndex = Math.floor(Math.random() * data.length);

        quote.textContent = '"' + data[randomIndex].quote + '"';

        author.textContent = "— " + data[randomIndex].author;

    } catch (error) {

        quote.textContent = "Unable to load quote.";
        author.textContent = "";

        console.log(error);
    }

});
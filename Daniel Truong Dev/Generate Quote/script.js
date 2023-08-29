let generateQuoteBtn = document.querySelector("#generate-quote");
let quoteText = document.querySelector("#quote-text");
let quoteAuthor = document.querySelector("#quote-author");

let handleCopyClick = document.querySelector("#copy-quote");

generateQuoteBtn.addEventListener("click", () => {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      quoteText.textContent = data.content;
      quoteAuthor.textContent = `- ${data.author}`;
    });
});

handleCopyClick.addEventListener("click", () => {
  let text = quoteText.textContent;
  let author = quoteAuthor.textContent;
  navigator.clipboard.writeText(`${text} ${author}`);

  alert(`Quote by ${author} copied to clipboard!`);
});

const quotesEl = document.getElementById("quotes-generator");
const quotesButton = document.getElementById("quotes-button");

const quotes = [
	"Success is when your signature turns into your autograph.",
	"Dreams transform into thoughts and thoughts result in action.",
	"Don't fear for facing failure in the first attempt, because even the successful maths starts with zero only.",
	"Adversity always presents opportunities for introspection.",
];

quotesButton.addEventListener("click", () => {
	let quote = getRandomQuote();
	while (quote == quotesEl.innerHTML) {
		// So that the same quote doesn't get repeated
		quote = getRandomQuote();
	}
	quotesEl.innerHTML = quote;
});

const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)]
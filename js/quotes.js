const quotes = [
    {
        quote: "밥은 먹고 다니냐.",
        author: "살인의 추억",
    },
    {
        quote: "너나 잘 하세요.",
        author: "친절한 금자씨",
    },
    {
        quote: "가장 완벽한 계획이 뭔지 알아? 무계획이야.",
        author: "기생충",
    },
    {
        quote: "누구냐 너.",
        author: "올드보이",
    },
    {
        quote: "나 다시 돌아갈래!",
        author: "박하사탕",
    },

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;




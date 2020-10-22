const button = document.querySelector('.get-quote')
const quote_container = document.querySelector('.quote')
const author_container = document.querySelector('.author')

button.addEventListener('click', setRandomQuote)

function setRandomQuote(){
    const i = getRandomInt(0,famous_quotes.length)

    const authorSelected = famous_quotes[i].name
    const quoteSelected = famous_quotes[i].quote

    quote_container.innerHTML = '"' + quoteSelected + '"'
    author_container.innerHTML = authorSelected
}

function getRandomInt(min,max){ return min + Math.floor(Math.random() * (max-min)) }

const famous_quotes = [
    {
        name:"Nelson Mandela",
        quote:"The greatest glory in living lies not in never falling, but in rising every time we fall."
    },
    {
        name:"Walt Disney",
        quote:"The way to get started is to quit talking and begin doing."
    },
    {
        name:"Steve Jobs",
        quote:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."
    },
    {
        name:"Eleanor Roosevelt",
        quote:"If life were predictable it would cease to be life, and be without flavor."
    },
    {
        name:"James Cameron",
        quote:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."
    },
    {
        name:"Cesar Henrique",
        quote:"When people say something without thinking, that's when they say exactly how they think"
    }
]
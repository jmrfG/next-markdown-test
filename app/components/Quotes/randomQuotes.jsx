import { randomIntFromInterval } from '@/utils/Math';



const Quote = () => {
    const quotes = [
        {
            uuoid: 1,
            author: "Marcus Aurelius",
            text: "Get back up when you fail. Celebrate behaving like a human"
        },
        {
            uuoid: 2,
            author: "Isaac Newton",
            text: "If I have seen further, it is by standing on the shoulders of giants."
        },
        {
            uuoid: 3,
            author: "Plato",
            text: "Knowledge becomes evil if the aim be not virtuous."
        },
    ]

    const getRandomQuote = () => {
        let a = randomIntFromInterval(0, 2)
        return quotes[a]
    }

    const quote = getRandomQuote();

    return (
        <div className="quote-container">
            <p className="quote-text">"{quote.text}"</p>
            <p className="quote-author">- {quote.author}</p>
        </div>
    );
};

export default Quote;
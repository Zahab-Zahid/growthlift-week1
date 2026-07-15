import { useState, useEffect } from "react";

function QuoteBox() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote);
        setLoading(false);
      })
      .catch(() => {
        setQuote("Could not load quote.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="quote-box">
      <h2>Quote of the Day</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>"{quote}"</p>
      )}
    </div>
  );
}

export default QuoteBox;
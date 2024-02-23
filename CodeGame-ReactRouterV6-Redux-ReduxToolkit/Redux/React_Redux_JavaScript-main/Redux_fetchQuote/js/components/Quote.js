import React from "react";

const Quote = ({ quote, loading, error, karofel, addFav }) => (
  <div>
    <button disabled={loading} onClick={fetchQuote}>
      Pobierz cytat
    </button>
    {quote && (
      <p>
        {quote.quote} / {quote.author}
      </p>
    )}
    {loading && "Ładuję cytat..."}
    {error && error}
      {quote && <button onClick={() => addFav(quote)}>Add to favourite</button>
      }
  </div>
);

export default Quote;

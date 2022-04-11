import React from 'react';

function DisplayQuote({ quote }) {
  return (
    quote && (
      <div className="DisplayEmployee">
        <img src={quote.image} alt={quote.character} />
        <ul>
          <li>Name: {quote.character}</li>
          <li>Quote: {quote.quote}</li>
        </ul>
      </div>
    )
  );
}

export default DisplayQuote;

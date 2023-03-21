import React, { useState, useEffect } from 'react';
import '../App.css';

function QuoteFetcher() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    fetch('https://api.api-ninjas.com/v1/quotes?category=learning', {
      headers: { 'X-Api-Key': 'HmE/CVXQyHmYONdR03v5PA==RVOBKSCgWyZif3BP' },
    })
      .then((response) => response.json())
      .then((data) => {
        setQuote(data[0].quote);
        setAuthor(data[0].author);
        setLoading(false);
      })
      .catch(() => {
        setError('Error fetching quote.');
        setLoading(false);
      });
  }, []);

  return (
    <div className="quote-container">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <div>
          <p>
            &ldquo;
            {quote}
            &ldquo;
          </p>
          <p>
            -
            {author}
          </p>
        </div>
      )}
    </div>
  );
}

export default QuoteFetcher;

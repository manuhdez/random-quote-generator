import React, { useState, useEffect } from 'react';
import QuoteBlock from '../../components/QuoteBlock/quoteBlock';
import Signature from '../../components/Signature/Signature';
import colorList from '../../utils/colors';
import apiUrl from '../../utils/api_url';
import './App.css';

const app = () => {
  const [quotesList, setQuotesList] = useState([]);
  const [quote, setQuote] = useState({});
  const [appColor, setAppColor] = useState('fff');
  const [error, setError] = useState({ status: false, message: '' });

  const generateRandomNumber = max => {
    return Math.floor(Math.random() * max);
  };

  const changeAppColor = list => {
    let randomIndex = generateRandomNumber(list.length);
    while (list[randomIndex] === appColor) {
      randomIndex = generateRandomNumber(list.length);
    }
    setAppColor(list[randomIndex]);
  };

  const setRandomQuote = list => {
    let randomIndex = generateRandomNumber(list.length);
    while (list[randomIndex].quote === quote.quote) {
      randomIndex = generateRandomNumber(list.length);
    }
    setQuote(quotesList[randomIndex]);
    changeAppColor(colorList);
  };

  // reach to the api to grab a list of quotes from the server
  useEffect(
    () => {
      // reset error state before reaching out
      setError({ status: false, message: '' });
      // check if quotes has been already fetched
      if (quotesList.length === 0) {
        fetch(apiUrl)
          .then(res => res.json())
          .then(res => setQuotesList(res.quotes))
          .catch(err => useState({ error: true, message: err.message }));
      } else {
        setRandomQuote(quotesList);
      }
    },
    [quotesList]
  );

  const quoteContainer = (
    <React.Fragment>
      <QuoteBlock
        value={quote}
        onQuoteChange={() => setRandomQuote(quotesList)}
      />
      <Signature />
    </React.Fragment>
  );

  return (
    <div className="App" style={{ '--app-background': `#${appColor}` }}>
      {
        error.status
        ? <h1>{error.message}</h1>
        : quote !== {} ? quoteContainer : null
      }
    </div>
  );
};

export default app;

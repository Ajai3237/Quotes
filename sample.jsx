import React from 'react'
import { useEffect } from "react";
import { useState } from "react"
import axios from 'axios'



function QuoteGenerator() {

  const [, setQuotes] = useState([]);
  const [quote, setQuote] = useState('Thinking is the capital, Enterprise is the way, Hard Work is the solution.');
  const [author, setAuthor] = useState('Abdul Kalam');
  const [backgroundImage, setBackgroundImage] = useState('./AbdulKalam.jpg')
  const containerStyle = {

   

    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  }

  useEffect(() => {
    axios.get('https://dummyjson.com/quotes')
      .then((response) => {
        setQuotes(response.data.quotes);

      })

      .catch((error) => {
        console.error('Error fetching quotes:', error);
      });
  }, []);

  const generateQuote = () => {

    const randomId = Math.floor(Math.random() * quotes.length);
    const newQuote = quotes[randomId].quote;
    const newAuthor = quotes[randomId].author;

    setQuote(newQuote);
    setAuthor(newAuthor);

    if (newAuthor === 'Rumi') {
      const imagePath = './Rumi.jpg';
      setBackgroundImage(imagePath);
    }
    else if (newAuthor === 'Abdul Kalam') {
      const imagePath = './AbdulKalam.jpg';
      setBackgroundImage(imagePath);
    }
    else if (newAuthor === 'Bill Gates') {
      const imagePath = './BillGates.jpg';
      setBackgroundImage(imagePath);
    }
    else if (newAuthor === 'Abu Bakr (R.A)') {
      const imagePath = './AbuBakr.jpg';
      setBackgroundImage(imagePath);
    }
    else if (newAuthor === 'Albert Einstein') {
      const imagePath = './AlbertEinstein.jpg';
      setBackgroundImage(imagePath);
    }
    else if (newAuthor === 'Abraham Lincoln') {
      const imagePath = './AbrahamLincoln.jpg';
      setBackgroundImage(imagePath);
    }
    else if (newAuthor === 'Oprah Winfrey') {
      const imagePath = './OprahWinfrey.jpg';
      setBackgroundImage(imagePath);
    }
    else if (newAuthor === 'Muhammad Ali') {
      const imagePath = './MuhammadAli.jpg';
      setBackgroundImage(imagePath);
    }
    else if (newAuthor === 'William Shakespeare') {
      const imagePath = './WilliamShakespeare.jpg';
      setBackgroundImage(imagePath);
    }
    else if (newAuthor === 'Mother Teresa') {
      const imagePath = './MotherTeresa.jpg';
      setBackgroundImage(imagePath);
    }
    else if (newAuthor === 'Nelson Mandela') {
      const imagePath = './NelsonMandela.jpg';
      setBackgroundImage(imagePath);
    }
    else if (newAuthor === 'Umar ibn Al-Khattāb (R.A)') {
      const imagePath = './UmaribnAlKhattab.jpg';
      setBackgroundImage(imagePath);
    }
    else if (newAuthor === 'Walt Disney') {
      const imagePath = './WaltDisney.jpg';
      setBackgroundImage(imagePath);
    }
    else if (newAuthor === 'Aristotle') {
      const imagePath = './Aristotle.jpg';
      setBackgroundImage(imagePath);
    }
    else {
      const imagePath = './AliibnAbiTalib.jpg';
      setBackgroundImage(imagePath);
    }

  }

  const textStyle = {
    color: 'white',
    fontSize: '50px',
  }



  return (
    <div>

      <div style={containerStyle}>
        <h1 style={{ textAlign: 'right', fontSize: '60px', color: 'yellow' }}>Random Quote Generator</h1>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'right' }}>
          <button style={{width:'70px', height:'50px', marginRight:'100px', fontSize:'15px'}} onClick={generateQuote}>Generate Quote</button>
        </div>

        <div style={{ width: '300px' }}>
          <h3 style={textStyle}>{quote}</h3>
          <h4 style={{ textAlign: 'center', fontSize: '30px', color: 'lightyellow', marginTop:'-50px' }}>- {author} -</h4>
        </div>
      </div>
    </div>

  )
}

export default QuoteGenerator
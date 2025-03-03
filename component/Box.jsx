import React, { useEffect, useState } from "react";
import "../component/Box.css";
import axios from "axios";
// import request from "../src/Request";

function Box() {
    const API = "https://dummyjson.com/quotes";
    const [quotes, setQuotes] = useState([]);
    const [qut, setQut] = useState("")
    const [author, Setauthor] = useState('Press the Next button to see the Authors and their Quotes')
    const [image, Setimage] = useState("")


    const fetchQuote = async () => {
        try {
            const { data } = await axios.get(API);
            console.log(data);
            setQuotes(data.quotes);
        } catch (error) {
            console.error("Error fetching quotes:", error);
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    const request = {
        Rumi: 'src/assets/img/download.jpeg',
        AbdulKalam:'src/assets/img/download (1).jpeg',
        BillGates:'src/assets/img/download (2).jpeg',
        AbuBakr:'src/assets/img/download(3).jpeg',
        AlbertEinstein:'src/assets/img/download (4).jpeg',
        AbrahamLincoln:'src/assets/img/download (5).jpeg',
        OprahWinfrey:'src/assets/img/download (6).jpeg',
        MuhammadAli:'src/assets/img/ali.jpeg',
        MotherTeresa:'src/assets/img/download (8).jpeg',
        NelsonMandela:'src/assets/img/download (9).jpeg',
        UmaribnAl:'src/assets/img/download (10).jpeg',
        WaltDisney:'src/assets/img/download (11).jpeg',
        Aristotle:'src/assets/img/download (12).jpeg',
    
    }




    const handleNextClick = () => {
        const randomID = Math.floor(Math.random() * quotes.length)
        const Quote = quotes[randomID].quote
        const AuthorName = quotes[randomID].author
        console.log(Quote);
        console.log(AuthorName);
        setQut(Quote)
        Setauthor(AuthorName)
        

        if (AuthorName == 'Rumi') {
            const img = (request.Rumi)
            Setimage(img)


        } else if (AuthorName == 'Abdul Kalam') {
          const img = (request.AbdulKalam)
            Setimage(img)
        }else if (AuthorName == 'Bill Gates') {
            const img = (request.BillGates)
              Setimage(img)
        }else if (AuthorName == 'Abu Bakr (R.A)') {
            const img = (request.AbuBakr)
              Setimage(img)
        }else if (AuthorName == 'Albert Einstein') {
            const img = (request.AlbertEinstein)
              Setimage(img)
        }else if (AuthorName == 'Oprah Winfrey') {
            const img = (request.OprahWinfrey)
              Setimage(img)
        }else if (AuthorName == 'Muhammad Ali') {
            const img = (request.MuhammadAli)
              Setimage(img)
        }
        else if (AuthorName == 'Mother Teresa') {
            const img = (request.MotherTeresa)
              Setimage(img)
        } else if (AuthorName == 'Nelson Mandela') {
            const img = (request.NelsonMandela)
              Setimage(img)
        } else if (AuthorName == 'Umar ibn Al-Khattāb (R.A)') {
            const img = (request.UmaribnAl)
              Setimage(img)
        }else if (AuthorName == 'Walt Disney') {
            const img = (request.WaltDisney)
              Setimage(img)
        }else if (AuthorName == 'Aristotle') {
            const img = (request.Aristotle)
              Setimage(img)
        }


    };

    return (
        <div className="box">
            <h5 className="Headings" style={{color:'#443627'}}>Authors and their Quotes</h5>
            <p className="m-4">-{qut}</p>
            <p className="m-4" style={{ marginLeft: "10px", fontWeight: 'bolder' }}>{author}</p>
            <div className="img image-container" style={{ display: 'flex', justifyContent: 'center' }}>
                {
                    image &&
                    <img style={{borderRadius:'20px'}} src={image} alt="" />
                }
            </div>
            <button className="btn btn-success" type="button" onClick={handleNextClick}>
                NEXT
            </button>
        </div>
    );
}

export default Box;

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';

import React from 'react';

const CardSlider = () => {
    const [mydata, setMydata] = useState([]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        customPaging: (i) => (
            <div
                style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: "#000",
                }}
            />
        ),
        appendDots: (dots) => (
            <div>
                <ul
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        overflow: "hidden",
                        maxWidth: "300px",
                        margin: "0 auto",
                    }}
                >
                    {dots.slice(0, 6)} {/* Show only the first 6 bullets */}
                </ul>
            </div>
        ),
        responsive: [
            {
                breakpoint: 1200, // For large screens
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 992, // For medium screens
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768, // For small screens
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const loadData = () => {
        let api = "http://localhost:8000/product/showproduct";
        axios.get(api).then((res) => {
            setMydata(res.data);
            console.log(res.data);
        });
    };

    useEffect(() => {
        loadData();
    }, []);

    const addcardData = (id, name, description, category, price, image) => {
        console.log("Product added to cart:", { id, name, description, category, price, image });
        // Replace the above line with your dispatch function to add to cart
    };

    const ans = mydata.map((key) => {
        return (
            <Card style={{ width: '100%', maxWidth: '300px', margin: '10px auto' }} key={key._id}>
                <a href="#" onClick={() => { console.log(`Navigate to /prodetail/${key._id}`); }}>
                    <Card.Img variant="top" src={key.image} />
                </a>
                <Card.Body style={{ backgroundColor: 'rgb(245, 206, 212)' }}>
                    <Card.Title style={{ textAlign: 'center' }}> {key.name}</Card.Title>
                    <Card.Text>RS. {key.price}</Card.Text>
                    <Button
                        style={{ width: "100%", color: "black", backgroundColor: "white", border: "1px solid black" }}
                        onClick={() => { addcardData(key._id, key.name, key.description, key.category, key.price, key.image); }}
                    >
                        Add to Cart
                    </Button>
                </Card.Body>
            </Card>
        );
    });

    return (
        <>
            <h1 style={{ textAlign: "center", margin: "20px 0" }}>Product Slider</h1>
            <div className="carousel-container" style={{ width: '100%', padding: '20px' }}>
                <Slider {...settings}>
                    {ans}
                </Slider>
            </div>
        </>
    );
};

export default CardSlider;

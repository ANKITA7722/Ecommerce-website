import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';

import React from 'react';

const CardSlider = () => {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 2000, 
        arrows: true, 
    };



    const [mydata, setMydata] = useState([]);


    const loadData = () => {
        let api = "http://localhost:8000/product/showproduct";
        axios.get(api).then((res) => {
            setMydata(res.data);
            console.log(res.data);
        })
    }

    useEffect(() => {
        loadData();
    }, [])

    const addcardData = (id, name, description, category, price, image) => {
        dispatch(addToCart({ id: id, name: name, description: description, category: category, price: price, image: image, qnty: 1 }))
    }


    const ans = mydata.map((key) => {
        return (
            <>
           
                <Card style={{ width: '18rem' }}>
                    <a href="#" onClick={() => { navigate(`/prodetail/${key._id}`) }}>
                        <Card.Img variant="top" src={key.image} />
                    </a>


                    <Card.Body style={{ backgroundColor: ' rgb(245, 206, 212)' }}>
                        <Card.Title style={{ textAlign: 'center' }}> {key.name}</Card.Title>
                        <Card.Text> RS. {key.price}</Card.Text>
                        <Button style={{ width: "100%", color: "black", backgroundColor: "white", border: "1px solid black" }}
                            onClick={() => { addcardData(key._id, key.name, key.description, key.category, key.price, key.image) }}>
                            Add to Card</Button>
                    </Card.Body>
                </Card>
               
            </>
        )
    })


    return (
        <>

            <h1> hello</h1>
            <Slider {...settings}>
                {ans}
            </Slider>


        </>
    )
};
export default CardSlider;
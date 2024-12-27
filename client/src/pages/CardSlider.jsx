
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import neck2 from "../images/neck2.avif"
import { useEffect, useState } from 'react';
import axios from 'axios';

import React from 'react';

const CardSlider = () => {
    const [mydata, setMydata] = useState([]);


    const loadData = () => {
        let api = "http://localhost:8000/product/?type=new";
        axios.get(api).then((res) => {
            setMydata(res.data);
            console.log(res.data);
        })
    }

    useEffect(() => {
        loadData();
    }, [])

    const addcardData = (id, name, description,  category, price, image) => {
        dispatch(addToCart({ id: id, name: name, description: description,category: category, price: price, image: image, qnty: 1 }))
    }



    return (
        <>

            <h1> hello</h1>
            <Carousel >
                <Carousel.Item>
                    <Card style={{ width: '18rem', border: "none" }}>
                        <img src={neck2} style={{ width: '18rem', height: "290px" }} className="img-back" />
                        <img src={neck2} style={{ width: '18rem', height: "290px" }} />
                        <Card.Body style={{}}>
                            <Card.Text> custer gold ring</Card.Text>
                            <p>rs</p>
                            <Button style={{ width: "100%", color: "black", backgroundColor: "white", border: "1px solid black" }}>Add to Card</Button>
                        </Card.Body>
                    </Card>
                </Carousel.Item>

                <Carousel.Item>
                    <Card style={{ width: '18rem', border: "none" }}>
                        <img src={neck2} style={{ width: '18rem', height: "290px" }} className="img-back" />
                        <img src={neck2} style={{ width: '18rem', height: "290px" }} />
                        <Card.Body style={{}}>
                            <Card.Text> custer gold ring</Card.Text>
                            <p>rs</p>
                            <Button style={{ width: "100%", color: "black", backgroundColor: "white", border: "1px solid black" }}>Add to Card</Button>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card style={{ width: '18rem', border: "none" }}>
                        <img src={neck2} style={{ width: '18rem', height: "290px" }} className="img-back" />
                        <img src={neck2} style={{ width: '18rem', height: "290px" }} />
                        <Card.Body style={{}}>
                            <Card.Text> custer gold ring</Card.Text>
                            <p>rs</p>
                            <Button style={{ width: "100%", color: "black", backgroundColor: "white", border: "1px solid black" }}>Add to Card</Button>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card style={{ width: '18rem', border: "none" }}>
                        <img src={neck2} style={{ width: '18rem', height: "290px" }} className="img-back" />
                        <img src={neck2} style={{ width: '18rem', height: "290px" }} />
                        <Card.Body style={{}}>
                            <Card.Text> custer gold ring</Card.Text>
                            <p>rs</p>
                            <Button style={{ width: "100%", color: "black", backgroundColor: "white", border: "1px solid black" }}>Add to Card</Button>
                        </Card.Body>
                    </Card>
                </Carousel.Item>

            </Carousel>


        </>
    )
};
export default CardSlider;
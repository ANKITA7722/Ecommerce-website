import Carousel from 'react-bootstrap/Carousel';
import first from "../images/fourth.webp";
import second from "../images/s8.webp";
import third from "../images/third.webp";
import nec from "../images/Necklace.webp";
import choker from "../images/Choker.avif";
// import collegcol from "../images/collegecollection.webp";

import g1 from "../images/g2.webp"
import g2 from "../images/g4.avif"
import g3 from "../images/g3.webp"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import g4 from "../images/slide2.webp"

import { MdOutlineLocalShipping } from "react-icons/md";



import ring1 from "../images/jwell.webp";
import neck from "../images/nec.webp";
import neck1 from "../images/neck1.avif"
import neck2 from "../images/neck2.avif"
import bangle from "../images/bangle.avif"
import bangle2 from "../images/bangle2.webp"
import earing from "../images/earing.avif"
import earing1 from "../images/earing1.avif"
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addToCart } from '../cardSlice'; // Correct import

//=================================
import floral from "../images/Goldjwell.jpg";
import floral2 from "../images/Yearing1.webp";
import floral3 from "../images/Neckles1.jpg";
import icon from "../images/icon.webp"

const Home = () => {
    const [mydata, setMydata] = useState([]);
    const dispatch = useDispatch();

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
        dispatch(addToCart({ id: id, name: name, description: description, category: category, price: price, image: image, qnty:1 }))
    }

    const ans = mydata.map((key) => {
        return (
            <>
               <Card style={{ width: '18rem'}}>
                    <Card.Img variant="top" src={key.image} />
                    <Card.Body style={{ backgroundColor: ' rgb(245, 206, 212)' }}>
                        <Card.Title style={{ textAlign: 'center' }}> {key.name}</Card.Title>
                        <Card.Text> RS. {key.price}</Card.Text>
                        <Button  style={{ width: "100%", color: "black", backgroundColor: "white", border: "1px solid black" }}
                        onClick={()=>{addcardData(key._id,key.name,key.description,key.category,key.price,key.image)}}>
                            Add to Card</Button>
                    </Card.Body>
                </Card>
            </>
        )
    })
    return (
        <>
            <div id="Home">
                <Carousel>
                    <Carousel.Item>
                        <img src={first} height="500px" width="100%" />
                        <Carousel.Caption>
                            <h3>Bridal Jewelry</h3>
                            <p>A gorgeous jewelry can add a polished, elegant finishing touch
                                to any ensemble and if it is a bridal set! Bridal imitation jewelry has a bright tone that sparkles under the light.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={second} height="500px" width="100%" />
                        <Carousel.Caption>
                            <h3>American Diamond</h3>
                            <p>A gorgeous jewelry can add a polished, elegant finishing touch to any ensemble.
                                This trendy diamond finished imitation jewelry will be a great addition to your collection and will make you stand out in style.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={third} height="500px" width="100%" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
            <div id='Home2'>
                <img src={icon} />
            </div>
            <div id='CardSection'>
                <div id="NewArival"><h3>NEW ARIVAL</h3>
                    <p>Explore New Style of the Season</p>
                </div>
                <div id='CardCloudImg'>
                    {ans}
                </div>
                <div id='sellingPage'>
                    <div className="hover-animation">
                        <Card style={{ width: '18rem', border: "none" }}>
                            <img src={neck} style={{ width: '18rem', height: "290px" }} className="img-back" />
                            <img src={ring1} style={{ width: '18rem', height: "290px" }} />
                            <Card.Body style={{}}>
                                <Card.Text> custer gold ring</Card.Text>
                                <p>rs</p>
                                <Button style={{ width: "100%", color: "black", backgroundColor: "white", border: "1px solid black" }}>Add to Card</Button>
                            </Card.Body>
                        </Card>
                    </div>


                    <div className="hover-animation">
                        <Card style={{ width: '18rem', border: "none" }}>
                            <img src={neck2} style={{ width: '18rem', height: "290px" }} className="img-back" />
                            <img src={neck1} style={{ width: '18rem', height: "290px" }} />
                            <Card.Body style={{}}>
                                <Card.Text> custer gold ring</Card.Text>
                                <p>rs</p>
                                <Button style={{ width: "100%", color: "black", backgroundColor: "white", border: "1px solid black" }}>Add to Card</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="hover-animation">
                        <Card style={{ width: '18rem', border: "none" }}>
                            <img src={bangle} style={{ width: '18rem', height: "290px" }} className="img-back" />
                            <img src={bangle2} style={{ width: '18rem', height: "290px" }} />
                            <Card.Body style={{}}>
                                <Card.Text> custer gold ring</Card.Text>
                                <p>rs</p>
                                <Button style={{ width: "100%", color: "black", backgroundColor: "white", border: "1px solid black" }}>Add to Card</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="hover-animation">
                        <Card style={{ width: '18rem', border: "none" }}>
                            <img src={earing1} style={{ width: '18rem', height: "290px" }} className="img-back" />
                            <img src={earing} style={{ width: '18rem', height: "290px" }} />
                            <Card.Body style={{}}>
                                <Card.Text> custer gold ring</Card.Text>
                                <p>rs</p>
                                <Button style={{ width: "100%", color: "black", backgroundColor: "white", border: "1px solid black" }}>Add to Card</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

            </div>
            <div id='Home3'>
                <div>
                    <img src={nec} />
                    <p>Necklaces Sets</p>
                </div>
                <div>
                    <img src={choker} />
                    <p>Necklaces Sets</p>
                </div>
                <div>
                    <img src={nec} />
                    <p>Necklaces Sets</p>
                </div>
                <div>
                    <img src={nec} />
                    <p>Necklaces Sets</p>
                </div>

                <div>
                    <img src={nec} />
                    <p>Necklaces Sets</p>
                </div>

                <div>
                    <img src={nec} />
                    <p>Necklaces Sets</p>
                </div>

                <div>
                    <img src={nec} />
                    <p>Necklaces Sets</p>
                </div>
               

            </div>
            <div id='card'>


            </div>
            {/* ---------------------------------------------------- */}
            <div id='home4'>
                <div className='d1'><Button variant="primary" style={{ backgroundColor: "black", border: "none" }}>View All</Button>
                    <h2> Populler Collection</h2></div>

                <Card style={{ width: '23rem' }}>
                    <Card.Img variant="top" src={g2} />
                    <Card.Body style={{ backgroundColor: ' rgb(245, 206, 212)' }}>
                        <Card.Title style={{ textAlign: 'center' }}> Antique Collection</Card.Title>
                    </Card.Body>
                </Card>

                <Card style={{ width: '23rem', height: '300px' }}>
                    <Card.Img variant="top" src={g1} />
                    <Card.Body style={{ backgroundColor: 'rgb(241, 220, 223)' }}>
                        <Card.Title style={{ textAlign: 'center' }}>Vication Collection</Card.Title>
                    </Card.Body>
                </Card>

                <Card style={{ width: '23rem' }}>
                    <Card.Img variant="top" src={g3} />
                    <Card.Body style={{ backgroundColor: 'rgb(241, 220, 223)' }}>
                        <Card.Title style={{ textAlign: 'center' }}>Nakshtra Collection</Card.Title>
                    </Card.Body>
                </Card>

            </div>
            <div>
                <Card.Img variant="top" src={g4} style={{ marginTop: '20px', marginBottom: '20px' }} />
            </div>
            {/* =================================================================================== */}

            {/* <div>
                <Carousel style={{ width: '25rem' }}>
                    <Carousel.Item>
                        <Card style={{ width: '23rem' }}>
                            <Card.Img variant="top" src={g3} />
                            <Card.Body style={{ backgroundColor: 'rgb(241, 220, 223)' }}>
                                <Card.Title style={{ textAlign: 'center' }}>Nakshtra Collection</Card.Title>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item width="23rem">
                        <Card style={{ width: '23rem' }}>
                            <Card.Img variant="top" src={g3} />
                            <Card.Body style={{ backgroundColor: 'rgb(241, 220, 223)' }}>
                                <Card.Title style={{ textAlign: 'center' }}>Nakshtra Collection</Card.Title>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card style={{ width: '23rem' }}>
                            <Card.Img variant="top" src={g3} />
                            <Card.Body style={{ backgroundColor: 'rgb(241, 220, 223)' }}>
                                <Card.Title style={{ textAlign: 'center' }}>Nakshtra Collection</Card.Title>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                </Carousel>
            </div> */}

            <div id='home4'>
                <div className='d1'>
                    <h2> Trending Style</h2>
                </div>

                <Card style={{ width: '23rem', height: "150px" }}>
                    <Card.Img variant="top" src={floral} style={{ height: "350px" }} />
                    <Card.Body style={{ backgroundColor: ' rgb(245, 206, 212)' }}>
                        <Card.Title style={{ textAlign: 'center' }}> Gold Collection</Card.Title>
                    </Card.Body>
                </Card>

                <Card style={{ width: '23rem' }}>
                    <Card.Img variant="top" src={floral2} style={{ height: "350px" }} />
                    <Card.Body style={{ backgroundColor: 'rgb(241, 220, 223)' }}>
                        <Card.Title style={{ textAlign: 'center' }}>Earring Collection</Card.Title>
                    </Card.Body>
                </Card>

                <Card style={{ width: '23rem', height: "200px" }}>
                    <Card.Img variant="top" src={floral3} />
                    <Card.Body style={{ backgroundColor: 'rgb(241, 220, 223)' }}>
                        <Card.Title style={{ textAlign: 'center' }}>Festive Jwellery</Card.Title>
                    </Card.Body>
                </Card>

            </div>


        </>
    )
}
export default Home;
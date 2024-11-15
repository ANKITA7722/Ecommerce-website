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

const Home = () => {
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
                <p>handcrafted in india by the best Articense </p>
                <hr style={{ border: "2px solid black", color: "black" }} height="50px" />
                <p>14 days easy return </p>
                <hr style={{ border: "2px solid black" }} height="50px" />
                <p>constomization available</p>
                <hr style={{ border: "2px solid black" }} height="50px" />
                <p>Exclusive rewards on every order </p>

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
            <Card.Img variant="top" src={g4} style={{marginTop:'20px', marginBottom:'20px'}}/>
            </div>

            <div>
            <Carousel style={{ width: '25rem'}}>
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
            </div>
<div> Trending Style</div>
        

        </>
    )
}
export default Home;
import ReactPlayer from 'react-player'
import vedio from "../images/bde.mp4"

import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import g2 from "../images/g4.avif"


const RadytoShip=()=>{

    return(
        <>
        <h1> collection</h1>
        <ReactPlayer controls={true} url={vedio} loop={true} />
        <Carousel>
      <Carousel.Item>
      <Card style={{ width: '23rem' }}>
                    <Card.Img variant="top" src={g2} />
                    <Card.Body style={{ backgroundColor: ' rgb(245, 206, 212)' }}>
                        <Card.Title style={{ textAlign: 'center' }}> Antique Collection</Card.Title>
                    </Card.Body>
                </Card>
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  style={{display:"flex" , justifyContent:"space-between"}}>
      <Card style={{ width: '23rem' }}>
                    <Card.Img variant="top" src={g2} />
                    <Card.Body style={{ backgroundColor: ' rgb(245, 206, 212)' }}>
                        <Card.Title style={{ textAlign: 'center' }}> Antique Collection</Card.Title>
                    </Card.Body>
                </Card>

                <Card style={{ width: '23rem' }}>
                    <Card.Img variant="top" src={g2} />
                    <Card.Body style={{ backgroundColor: ' rgb(245, 206, 212)' }}>
                        <Card.Title style={{ textAlign: 'center' }}> Antique Collection</Card.Title>
                    </Card.Body>
                </Card>

                <Card style={{ width: '23rem' }}>
                    <Card.Img variant="top" src={g2} />
                    <Card.Body style={{ backgroundColor: ' rgb(245, 206, 212)' }}>
                        <Card.Title style={{ textAlign: 'center' }}> Antique Collection</Card.Title>
                    </Card.Body>
                </Card>
        

                
        

        <Carousel.Caption>

            
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Card style={{ width: '23rem' }}>
                    <Card.Img variant="top" src={g2} />
                    <Card.Body style={{ backgroundColor: ' rgb(245, 206, 212)' }}>
                        <Card.Title style={{ textAlign: 'center' }}> Antique Collection</Card.Title>
                    </Card.Body>
                </Card>
      
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
       
        </>
    )
 }
 export default RadytoShip;

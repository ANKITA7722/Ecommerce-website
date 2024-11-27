import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import img1 from "../images/gift.webp";
import g2 from "../images/TraditionalDesigns.webp"

const GiftShop=()=>{
    return(
        <>
        <div id="gift1">
            <img src={img1} style={{width:"100%"}}/>
        </div>
        <div id="gift2">
            <h2>GIFTS BY STYLE</h2>
            <p>Surprise your loved ones with styles they love</p>
        </div>
        <div id='gift3'>
        <Card style={{ width: '27rem' }}>
                    <Card.Img variant="top" src={g2} />
                    <Card.Body >
                        <center>
                        <Card.Title style={{ textAlign: 'center', fontSize:"larger" }}>Traditional Designs</Card.Title>
                        <Button style={{ alignItems: 'center', backgroundColor:"white", border:"none",color:"black"}}>Shop Now</Button>
                        </center>
                    </Card.Body>
                </Card>

                <Card style={{ width: '27rem' }}>
                    <Card.Img variant="top" src={g2} />
                    <Card.Body >
                        <center>
                        <Card.Title style={{ textAlign: 'center', fontSize:"larger" }}>Traditional Designs</Card.Title>
                        <Button style={{ alignItems: 'center', backgroundColor:"white", border:"none",color:"black"}}>Shop Now</Button>
                        </center>
                    </Card.Body>
                </Card>

                <Card style={{ width: '27rem' }}>
                    <Card.Img variant="top" src={g2} />
                    <Card.Body >
                        <center>
                        <Card.Title style={{ textAlign: 'center', fontSize:"larger" }}>Traditional Designs</Card.Title>
                        <Button style={{ alignItems: 'center', backgroundColor:"white", border:"none",color:"black"}}>Shop Now</Button>
                        </center>
                    </Card.Body>
                </Card>
        </div>

        <div id='gift4'>
            <div>
                <img src=''/>
            </div>
            <div>
                <h1>The joy of gifting</h1>
                <p>celebrate every moment with Diamonddelight</p>
                <button>shop now</button>
            </div>

        </div>
        </>
    )
}
export default GiftShop;
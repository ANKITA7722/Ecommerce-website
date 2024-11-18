import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ring1 from "../images/jwell.webp";
import nec from "../images/nec.webp";
import neck1 from "../images/neck1.avif"
import neck2 from "../images/neck2.avif"
import bangle from "../images/bangle.avif"
import bangle2 from "../images/bangle2.webp"
import earing from "../images/earing.avif"
import earing1 from "../images/earing1.avif"


const Sale = () => {
    return (
        <>
            <h1>Selling page</h1>
            <div id='sellingPage'>
                <div className="hover-animation">
                <Card style={{ width: '18rem', border: "none" }}>
                    <img src={nec} style={{ width: '18rem', height:"290px"}} className="img-back"/>
                    <img src={ring1} style={{ width: '18rem',height:"290px" }}/>
                    <Card.Body style={{}}>
                        <Card.Text> custer gold ring</Card.Text>
                        <p>rs</p>
                        <Button style={{ width: "100%", color: "black", backgroundColor: "white", border: "1px solid black" }}>Add to Card</Button>
                    </Card.Body>
                </Card>
                </div>


                <div className="hover-animation">
                <Card style={{ width: '18rem', border: "none" }}>
                    <img src={neck2} style={{ width: '18rem', height:"290px"}} className="img-back"/>
                    <img src={neck1} style={{ width: '18rem',height:"290px" }}/>
                    <Card.Body style={{}}>
                        <Card.Text> custer gold ring</Card.Text>
                        <p>rs</p>
                        <Button style={{ width: "100%", color: "black", backgroundColor: "white", border: "1px solid black" }}>Add to Card</Button>
                    </Card.Body>
                </Card>
                </div>

                <div className="hover-animation">
                <Card style={{ width: '18rem', border: "none" }}>
                    <img src={bangle} style={{ width: '18rem', height:"290px"}} className="img-back"/>
                    <img src={bangle2} style={{ width: '18rem',height:"290px" }}/>
                    <Card.Body style={{}}>
                        <Card.Text> custer gold ring</Card.Text>
                        <p>rs</p>
                        <Button style={{ width: "100%", color: "black", backgroundColor: "white", border: "1px solid black" }}>Add to Card</Button>
                    </Card.Body>
                </Card>
                </div>

                <div className="hover-animation">
                <Card style={{ width: '18rem', border: "none" }}>
                    <img src={earing1} style={{ width: '18rem', height:"290px"}} className="img-back"/>
                    <img src={earing} style={{ width: '18rem',height:"290px" }}/>
                    <Card.Body style={{}}>
                        <Card.Text> custer gold ring</Card.Text>
                        <p>rs</p>
                        <Button style={{ width: "100%", color: "black", backgroundColor: "white", border: "1px solid black" }}>Add to Card</Button>
                    </Card.Body>
                </Card>
                </div>

                
            </div>

        </>
    )
}
export default Sale;
import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import neck2 from "../images/neck2.avif"
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
const CardSlider=()=>{
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

    const addcardData = (id, name, description, category, price, image) => {
        dispatch(addToCart({ id: id, name: name, description: description, category: category, price: price, image: image, qnty:1 }))
    }


    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 8000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(

        <>
        <div className="CardSlider-container ">  
        <h1> hello</h1>
        <Carousel responsive={responsive}>
  <div><Card style={{ width: '18rem', border: "none" }}>
                            <img src={neck2} style={{ width: '18rem', height: "290px" }} className="img-back" />
                            <img src={neck2} style={{ width: '18rem', height: "290px" }} />
                            <Card.Body style={{}}>
                                <Card.Text> custer gold ring</Card.Text>
                                <p>rs</p>
                                <Button style={{ width: "100%", color: "black", backgroundColor: "white", border: "1px solid black" }}>Add to Card</Button>
                            </Card.Body>
                        </Card></div>
  
  <div><Card style={{ width: '18rem', border: "none" }}>
                            <img src={neck2} style={{ width: '18rem', height: "290px" }} className="img-back" />
                            <img src={neck2} style={{ width: '18rem', height: "290px" }} />
                            <Card.Body style={{}}>
                                <Card.Text> custer gold ring</Card.Text>
                                <p>rs</p>
                                <Button style={{ width: "100%", color: "black", backgroundColor: "white", border: "1px solid black" }}>Add to Card</Button>
                            </Card.Body>
                        </Card></div>
                        <div><Card style={{ width: '18rem', border: "none" }}>
                            <img src={neck2} style={{ width: '18rem', height: "290px" }} className="img-back" />
                            <img src={neck2} style={{ width: '18rem', height: "290px" }} />
                            <Card.Body style={{}}>
                                <Card.Text> custer gold ring</Card.Text>
                                <p>rs</p>
                                <Button style={{ width: "100%", color: "black", backgroundColor: "white", border: "1px solid black" }}>Add to Card</Button>
                            </Card.Body>
                        </Card></div>
                        <div><Card style={{ width: '18rem', border: "none" }}>
                            <img src={neck2} style={{ width: '18rem', height: "290px" }} className="img-back" />
                            <img src={neck2} style={{ width: '18rem', height: "290px" }} />
                            <Card.Body style={{}}>
                                <Card.Text> custer gold ring</Card.Text>
                                <p>rs</p>
                                <Button style={{ width: "100%", color: "black", backgroundColor: "white", border: "1px solid black" }}>Add to Card</Button>
                            </Card.Body>
                        </Card></div>

                        <div><Card style={{ width: '18rem', border: "none" }}>
                            <img src={neck2} style={{ width: '18rem', height: "290px" }} className="img-back" />
                            <img src={neck2} style={{ width: '18rem', height: "290px" }} />
                            <Card.Body style={{}}>
                                <Card.Text> custer gold ring</Card.Text>
                                <p>rs</p>
                                <Button style={{ width: "100%", color: "black", backgroundColor: "white", border: "1px solid black" }}>Add to Card</Button>
                            </Card.Body>
                        </Card></div>
                        <div><Card style={{ width: '18rem', border: "none" }}>
                            <img src={neck2} style={{ width: '18rem', height: "290px" }} className="img-back" />
                            <img src={neck2} style={{ width: '18rem', height: "290px" }} />
                            <Card.Body style={{}}>
                                <Card.Text> custer gold ring</Card.Text>
                                <p>rs</p>
                                <Button style={{ width: "100%", color: "black", backgroundColor: "white", border: "1px solid black" }}>Add to Card</Button>
                            </Card.Body>
                        </Card></div>
                        
  
</Carousel>
</div>
       
        </>
    )
};
export default CardSlider;
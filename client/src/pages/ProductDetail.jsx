import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../cardSlice";
import Button from 'react-bootstrap/Button';


const ProductDetail = () => {
    const { proid } = useParams();
    const [mydata, setMydata] = useState({});
    const dispatch = useDispatch();

    const loadData = async () => {
        try {
            const api = "http://localhost:8000/product/productdetail";
            const response = await axios.post(api, { id: proid });
            setMydata(response.data);
        } catch (error) {
            console.error("Error loading product details:", error);
        }
    };

    useEffect(() => {
        loadData();
    }, []); 


    const addcardData = (id, name, description, category, price, image) => {
        dispatch(addToCart({ id, name, description, category, price, image, qnty: 1 }));
    };

    
    return (
        <div id="proDetail" >
            <div id="proImage">
                {mydata.image ? (<img src={mydata.image} alt={mydata.name}  />) :
                 (<p>Loading image...</p>)}

                 <div>
                    <img src=""/>
                    <img src=""/>
                 </div>

            </div>

            <div id="prodata">
                <h2>{mydata.name}</h2>
                <h4> Rs. {mydata.price}</h4>
                <h5>Ships in 7-10 business days</h5>
                <h6> {mydata.category}</h6>


                <Button style={{ marginTop: "20px" }} onClick={() => {addcardData(mydata._id, mydata.name, mydata.description, mydata.category, mydata.price, mydata.image);}}
                    disabled={!mydata._id} >
                    Add to Cart
                </Button>

                <h5>Product Detail: {mydata.description}</h5>
                <div>
                    <h3>Jwellery Care</h3>
                    <p>Here are some of the best ways to care for your artificial jewellery:</p>
                    <ul>
                        <li>Keep it dry away and from moisture</li>
                        <li>Take it off after use</li>
                        <li>Store it carefully in a jewellery box</li>
                        <li>Clean it after use</li>
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default ProductDetail;

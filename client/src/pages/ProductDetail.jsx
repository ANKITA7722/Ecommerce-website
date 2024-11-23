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
        <div id="proDetail" style={{ display: "flex", gap: "20px", padding: "20px" }}>
            <div id="proImage">
                {mydata.image ? (<img src={mydata.image} alt={mydata.name} style={{ width: "400px", height: "400px" }} />) :
                 (<p>Loading image...</p>)}

                 <div>
                    <img src=""/>
                    <img src=""/>
                 </div>

            </div>

            <div id="prodata">
                <h2 style={{ color: 'blue' }}>{mydata.name}</h2>
                <h5>Product Detail: {mydata.description}</h5>
                <h4 style={{ color: 'red' }}>Price: {mydata.price}</h4>
                <h5>Ships in 7-10 business days</h5>
                <h6>This Product is for: {mydata.category}</h6>

                <Button style={{ marginTop: "20px" }} onClick={() => {addcardData(mydata._id, mydata.name, mydata.description, mydata.category, mydata.price, mydata.image);}}
                    disabled={!mydata._id} >
                    Add to Cart
                </Button>
            </div>
        </div>
    );
};

export default ProductDetail;

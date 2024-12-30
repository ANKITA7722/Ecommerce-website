import { useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addToCart } from "../cardSlice";
import { useNavigate } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { CiSearch } from "react-icons/ci";



const Search = () => {
    const [mypro, setMyPro] = useState("");
    const [mydata, setMydata] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleChange = (e) => {
        setMyPro(e.target.value);
        let api = `http://localhost:8000/product/searchproduct/?product=${mypro}`;
        axios.get(api).then((res) => {
            setMydata(res.data);
            console.log(res.data);
        })
    }

    const addcardData = (id, name, desc, categ, price, image) => {
        dispatch(addToCart({ id: id, name: name, description: desc, category: categ, price: price, image: image, qnty: 1 }))
    }

    const ans = mydata.map((key) => {
        return (
            <>
                <Card style={{ width: '18rem', marginTop: '20px' }}>

                    <a href='#' onClick={() => { navigate(`/prodetail/${key._id}`) }}>
                        <Card.Img variant="top" src={key.image} style={{ height: '300px' }} />
                    </a>
                    <Card.Body>
                        <Card.Title>{key.name}</Card.Title>
                        <Card.Text>
                            {key.description}
                            <br />
                            For- {key.category}
                            <br />
                            <span style={{ color: 'red', fontWeight: 'bold' }}> Price : {key.price} </span>
                        </Card.Text>
                        <Button variant="primary"
                            onClick={() => { addcardData(key._id, key.name, key.description, key.category, key.price, key.image) }}
                        >Add to Cart</Button>
                    </Card.Body>
                </Card>

            </>
        )
    })





    return (
        <>
            <center>
               
<InputGroup  style={{width:"50%"}}>
          <InputGroup.Text id="btnGroupAddon"><CiSearch /></InputGroup.Text>
          <Form.Control
            type="text"
            value={mypro} onChange={handleChange}
            placeholder="Search products"
            aria-label="Input group example"
            aria-describedby="btnGroupAddon"
           
          />
        </InputGroup>

        </center >

            <hr />

            <div id="carddata">
                {ans}
            </div>
        </>
    )
}
export default Search;
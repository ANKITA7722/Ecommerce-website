import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addToCart } from '../cardSlice';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const LongNeckless = () => {
    const [mydata, setMydata] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loadData = () => {
        let api = "http://localhost:8000/product/showproductbycategory?category=LongNecklaces";
        axios.get(api).then((res) => {
            setMydata(res.data);
            console.log(res.data);
        })
    }

    useEffect(() => {
        loadData();
    }, [])

    const addcardData = (id, name, description, category, price, image) => {
        dispatch(addToCart({ id: id, name: name, description: description, category: category, price: price, image: image, qnty: 1 }))
    }

    const ans = mydata.map((key) => {
        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <a href="#" onClick={() => { navigate(`/prodetail/${key._id}`) }}>
                        <Card.Img variant="top" src={key.image} />
                    </a>
                    <Card.Body style={{ backgroundColor: ' rgb(245, 206, 212)' }}>
                        <Card.Title style={{ textAlign: 'center' }}> {key.name}</Card.Title>
                        <Card.Text> RS. {key.price}</Card.Text>
                        <Button style={{ width: "100%", color: "black", backgroundColor: "white", border: "1px solid black" }}
                            onClick={() => { addcardData(key._id, key.name, key.description, key.category, key.price, key.image) }}>
                            Add to Card</Button>
                    </Card.Body>
                </Card>
            </>
        )
    })
    return (
        <>
            <div id='CardCloudImg'>
                {ans}
            </div>
        </>
    )
}
export default LongNeckless;
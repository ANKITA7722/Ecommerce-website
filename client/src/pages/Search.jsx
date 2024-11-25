import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Search=()=>{
    const [mypro ,sePro]=useState("");

    const ans = mydata.map((key) => {
        return (
            <>
               <Card style={{ width: '18rem'}}>
                <a href="#" onClick={()=>{navigate(`/prodetail/${key._id}`)}}>
                     <Card.Img variant="top" src={key.image} />
                </a>
                   

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
    return(
        <>
        <div id="search">
             <input type="text" placeholder="search product" />
             
        </div>
        <div>
            {ans}
        </div>

    
        </>

    )
}
export default Search;
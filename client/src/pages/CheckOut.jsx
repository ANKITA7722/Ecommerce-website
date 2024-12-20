import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector } from "react-redux";
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import axios from 'axios';

const CheckOut = () => {
  const myCard = useSelector((state) => state.mycard.cart);

  const [mypro, setMypro] = useState({});

  const [input, setInput] = useState({});

  const initPay = (data) => {
    
    const options = {
      key: "rzp_test_JaWwjMvJvY8ZFO",
      amount: data.amount,
      currency: data.currency,
      name: mypro.name,
      description: "Test",
      image: mypro.img,
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyURL = "http://localhost:8000/api/payment/verify";
          const { data } = await axios.post(verifyURL, response);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePay = async () => {
   
    await setMypro({
      name: proname,
      creator: brand,
      img: proimg,
      price: totalAmount
    });

    try {
      const orderURL = "http://localhost:8000/api/payment/orders";
  
      const { data } = await axios.post(orderURL, { amount: mypro.price });
  
      console.log('Order Response:', data);
  
      if (data && data.id && data.amount) {
          initPay(data); // Proceed with payment initialization
      } else {
          console.error('Invalid response data from API');
          alert('Failed to create payment order');
      }
  } catch (error) {
      if (error.response) {
          console.error('API Error:', error.response.data);
          alert(`Error from Server: ${error.response.data.message || 'Something went wrong on the server.'}`);
      } else if (error.request) {
          console.error('No response received:', error.request);
          alert('Error: No response received from the server. Please check your network connection.');
      } else {
          console.error('Request Setup Error:', error.message);
          alert('Error: ' + error.message);
      }
  }
  

    const api = "http://localhost:8000/users/usersave";
    axios.post(api, { ...input, proname: mypro.name, price: mypro.price }).then((res) => {
      console.log("Data save!!!");
    })

   };


  const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput(values => ({ ...values, [name]: value }))
    console.log(input);
  };


  let sno=0;
  let totalAmount = 0;
  let proname = "";
  let brand = "Zara";
  let proimg = ""

  const ans = myCard.map((key) => {
    totalAmount += key.price * key.qnty;
    proname += key.name + ", ";
    proimg += key.image;
    sno++;
    return (
      <tr>
        <td>{sno}</td>
        <td><img src={key.image} width="100" height="100" /></td>
        <td>{key.name}</td>
        <td>{key.description}</td>
        <td>{key.category}</td>
        <td>{key.price}</td>
        <td>{key.qnty}</td>
        <td>{key.price * key.qnty}</td>
      </tr>
    );
  });

  return (
    <>
      <div id="payPage">
        <div id="payForm">
          <h1>Fill Your Shipping Address</h1>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Enter Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={input.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Enter Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={input.address}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Enter City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={input.city}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Enter Pin Code</Form.Label>
              <Form.Control
                type="text"
                name="pinCode"
                value={input.pinCode}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Enter Mobile</Form.Label>
              <Form.Control
                type="text"
                name="mobile"
                value={input.mobile}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button variant="primary" type="button" onClick={handlePay}>
              Submit
            </Button>
          </Form>
        </div>
        <div id="payMethod">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>S.No.</th>
                <th></th>
                <th>Name</th>
                <th>Description</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {ans}
              <tr>
                <th> </th>
                <th> </th>
                <th></th>
                <th></th>
                <th></th>
                <th>  </th>
                <th>Net Amount</th>
                <th>{totalAmount}</th>
              </tr>
              <tr>
                <th> </th>
                <th> </th>
                <th></th>
                <th></th>
                <th></th>
                <th>  </th>
                <th>



                </th>
                <th> </th>


              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default CheckOut;

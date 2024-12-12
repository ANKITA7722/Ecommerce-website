import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector } from "react-redux";
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import axios from 'axios';

const CheckOut = () => {
  const myCard = useSelector((state) => state.mycard.cart);

  const [mypro, setMypro] = useState({});

  const [formData, setFormData] = useState({});

  let totalAmount = 0;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const initPay = (data) => {
    const options = {
      key: "rzp_test_yB3kr8D5jEexjb",
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
    const proname = myCard.map(item => item.name).join(", ");
    const proimg = myCard.length > 0 ? myCard[0].image : "";
    const totalPrice = myCard.reduce((acc, item) => acc + item.price * item.qnty, 0);

    // Update state
    setMypro({
      name: proname,
      creator: "Zara",
      img: proimg,
      price: totalPrice
    });

    try {
      const orderURL = "http://localhost:8000/api/payment/orders";
      const { data } = await axios.post(orderURL, { amount: totalPrice });
      console.log(data);
      initPay(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const ans = myCard.map((key, index) => {
    totalAmount += key.price * key.qnty;
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td><img src={key.image} width="100" height="100" alt={key.name} /></td>
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
                value={formData.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Enter Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Enter City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Enter Pin Code</Form.Label>
              <Form.Control
                type="text"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Enter Mobile</Form.Label>
              <Form.Control
                type="text"
                name="mobile"
                value={formData.mobile}
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
                <td colSpan="6"></td>
                <td>Net Amount</td>
                <td>{totalAmount}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default CheckOut;

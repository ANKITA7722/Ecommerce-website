import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from "axios";

const InsertProduct = () => {
  const [input, setInput] = useState({});

  const [myimage, setMyimage] = useState(null);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleImage = (e) => {
    setMyimage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Upload image to Cloudinary
      const formData = new FormData();
      formData.append("file", myimage);
      formData.append('upload_preset', 'myCloud');
      formData.append('cloud_name', 'dtpy8tedd');

      const response = await axios.post('https://api.cloudinary.com/v1_1/dtpy8tedd/image/upload', formData);
      const imageUrl = response.data.url;
      console.log('Image uploaded:', imageUrl);

      // Save product data to your API
      const api1 = "http://localhost:8000/product/productsave";
      await axios.post(api1, { ...input, image: imageUrl });
      alert("Data saved successfully!");
    } catch (error) {
      console.error("Error uploading image or saving data:", error);
      alert("Failed to save data. Please try again.");
    }
  };

  return (
    <>
    <div id='insertpage'>
      <h1>Insert New Product</h1>
      <Form style={{ width: '600px' }} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formProductName">
          <Form.Label>Enter Product Name</Form.Label>
          <Form.Control type="text" name="name" value={input.name} onChange={handleInput} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formProductDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" name="description" value={input.description} onChange={handleInput}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formProductCategory">
          <Form.Label>Select Category</Form.Label>
          <Form.Select name="category" value={input.category}  onChange={handleInput}>
            <option value=">Necklass">Necklass</option>
            <option value="Earring">Earring</option>
            <option value="Rings">Rings</option>
            <option value="Bangles">Bangles</option>
            <option value="Choker">Choker</option>
            <option value="Waistbands">Waistbands</option>
            <option value="Pendant">Pendant Sets</option>
            <option value="Anklets">Anklets</option>
            <option value="Mangalsutra">Mangalsutra</option>
            <option value="Maangtika">Maangtika</option>
            <option value="BridalSets">Bridal Sets</option>
            <option value="Long Necklaces">Long Necklaces</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formProductPrice">
          <Form.Label>Enter Price</Form.Label>
          <Form.Control type="number" name="price"
            value={input.price}  onChange={handleInput}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formProductImage">
          <Form.Label>Upload Image</Form.Label>
          <Form.Control type="file" name="file" onChange={handleImage}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formProductCategory">
          <Form.Label>Select type of product </Form.Label>
          <Form.Select name="type" value={input.type}  onChange={handleInput}>
            <option value="new">new</option>
            <option value="old">old</option>
            </Form.Select>
            </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      </div>
    </>
  );
};

export default InsertProduct;

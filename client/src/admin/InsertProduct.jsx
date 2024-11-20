import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const InsertProduct = () => {
  const [input, setInput] = useState({
    name: '',
    description: '',
    category: 'Men', // Default value for category
    price: '',
  });

  const [myimage, setMyimage] = useState(null);

  // Handle text input changes
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((values) => ({ ...values, [name]: value }));
  };

  // Handle image file input
  const handleImage = (e) => {
    setMyimage(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Form validation (if needed)
    if (!input.name || !input.description || !input.price || !myimage) {
      alert('Please fill all fields and upload an image.');
      return;
    }

    // Create a FormData object to handle file upload
    const formData = new FormData();
    formData.append('name', input.name);
    formData.append('description', input.description);
    formData.append('category', input.category);
    formData.append('price', input.price);
    formData.append('file', myimage);

    // Submit the form data (e.g., using axios or fetch)
    // Example with axios:
    /*
    axios.post('/your-api-endpoint', formData)
      .then((response) => {
        console.log('Success:', response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    */

    console.log('Form data submitted:', input, myimage);
  };

  return (
    <>
      <h1>Insert New Product</h1>
      <Form style={{ width: '300px' }} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Enter Product Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={input.name}
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            value={input.description}
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Label>Select Category</Form.Label>
        <Form.Select
          aria-label="Default select example"
          name="category"
          value={input.category}
          onChange={handleInput}
        >
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
        </Form.Select>

        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Enter Price</Form.Label>
          <Form.Control
            type="text"
            name="price"
            value={input.price}
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicFile">
          <Form.Label>Upload Image</Form.Label>
          <Form.Control type="file" name="file" onChange={handleImage} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default InsertProduct;

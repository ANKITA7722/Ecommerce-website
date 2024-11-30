import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";
import { qntyInc, qntyDec, itemRemove } from "../cardSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const MyCard = useSelector((state) => state.mycard.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const qtyIncrement = (id) => {
    dispatch(qntyInc({ id: id }));
  };

  const qtyDecrement = (id) => {
    dispatch(qntyDec({ id: id }));
  };

  const removeItem = (id) => {
    dispatch(itemRemove({ id: id }));
  };

  let totalAmount = 0;

  const Data = MyCard.map((key, index) => {
    totalAmount += key.price * key.qnty;
    return (
      <tr key={key.id}>
        <td>{index + 1}</td>
        <td>
          <img src={key.image} alt={key.name} width="100" height="100" />
        </td>
        <td>{key.name}</td>
        <td>{key.description}</td>
        <td>{key.category}</td>
        <td>{key.price}</td>
        <td>
          <button
            style={{ background: "none", border: "none" }}
            onClick={() => qtyDecrement(key.id)}
          >
            <FaCircleMinus />
          </button>
          <span
            style={{ marginLeft: "10px", marginRight: "10px", fontWeight: "bold" }}
          >
            {key.qnty}
          </span>
          <button
            style={{ background: "none", border: "none" }}
            onClick={() => qtyIncrement(key.id)}
          >
            <FaPlusCircle />
          </button>
        </td>
        <td>{key.price * key.qnty}</td>
        <td>
          <button onClick={() => removeItem(key.id)}>Remove</button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <h1>My Shopping Cart</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Data}
          <tr>
            <td colSpan="5"></td>
            <td style={{ fontWeight: "bold" }}>Total Amount:</td>
            <td>{totalAmount}</td>
            <td colSpan="2">
              <button onClick={() => navigate("/checkout")}>CheckOut</button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Cart;

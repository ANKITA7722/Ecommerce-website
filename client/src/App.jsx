import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Sale from "./pages/Sale"
import GiftShop from "./pages/GiftShop";
import AdminDashboard from "./admin/AdminDashboard";
import InsertProduct from "./admin/InsertProduct";
import Cart from "./pages/Cart";
import Collection from "./pages/Collection";
import RadytoShip from "./pages/RadytoShip";





const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />            <Route path="home" element={<Home/>}/>
            <Route path="/admin" element={<AdminDashboard/>}/>
            <Route path="/admin/insertproduct" element={<InsertProduct/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path="radytoship" element={<RadytoShip/>}/> 
            <Route path="sale" element={<Sale/>}/>
            <Route path="giftshop" element={<GiftShop/>}/>
            <Route path="collecton" element={<Collection/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

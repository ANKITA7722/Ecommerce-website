import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Sale from "./pages/Sale"
import GiftShop from "./pages/GiftShop";
import AdminDashboard from "./admin/AdminDashboard";
import InsertProduct from "./admin/InsertProduct";



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home/>}/>
            <Route path="/admin" element={<AdminDashboard/>}/>
            <Route path="insertpro" element={<InsertProduct/>}/>
            <Route path="sale" element={<Sale/>}/>
            <Route path="giftshop" element={<GiftShop/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

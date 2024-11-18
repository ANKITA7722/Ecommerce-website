import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Sale from "./pages/Sale"
import GiftShop from "./pages/GiftShop";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home/>}/>
            <Route path="sale" element={<Sale/>}/>
            <Route path="giftshop" element={<GiftShop/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

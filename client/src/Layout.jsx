import {Outlet} from "react-router-dom"
import Footer from "./components/Footer";
import Header from "./components/Header";
import Topmenu from "./components/Topmenu";

const Layout = () => {
  return (
    <>
      <Topmenu />
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
};

export default Layout;

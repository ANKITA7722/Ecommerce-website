 import LongNeck from "../images/LongNeck.webp"
 import Neck1 from "../images/Neck.webp"
 import Neck2 from "../images/Bangle.webp"
 import Neck3 from "../images/Earring.webp"
 import Neck4 from "../images/Chocker.webp"
 import Neck5 from "../images/Bridle.webp"
 import Neck6 from "../images/Rings.webp"
 import b1 from "../images/b1.jpg"
 import b2 from "../images/b2.jpg"
 import a1 from "../images/ancklet.webp"
 import a2 from "../images/armles.webp"
 import a3 from "../images/kamarband.webp"
 import { useNavigate } from "react-router-dom"
 
 
 const Collection=()=>{
    const navigate = useNavigate();
    return(
        <>
        <div id="collection1">
            <a href="#"onClick={()=>{navigate("/longneckless")}}>
            <img src={LongNeck}/>
            </a>
            
        </div>

        <div id="collection1">
        <a href="#"onClick={()=>{navigate("/neckless")}}>
            <img src={Neck1}/>
            </a>
        </div>
        <div id="collection1">
        <a href="#"onClick={()=>{navigate("/bangle")}}>
            <img src={Neck2}/>
            </a>
        </div>
        <div id="collection2">
            <div>
            <img src={b1}/>
            <h2>Bangles</h2>
            <button>Explore Stone Bangles</button>
            </div>

            <div>
            <img src={b2}/>
            <h2>Bangles</h2>
            <button>Explore Gold Bangles</button>
            </div>
        </div>
        <div id="collection1">
        <a href="#"onClick={()=>{navigate("/earring")}}>
            <img src={Neck3}/>
            </a>
        </div>

        <div id="collection1">
        <a href="#"onClick={()=>{navigate("/ring")}}>
            <img src={Neck6}/>
            </a>
        </div>


        <div id="collection1">
        <a href="#"onClick={()=>{navigate("/choker")}}>
            <img src={Neck4}/>
            </a>
        </div>
        <div id="collection1">
        <a href="#"onClick={()=>{navigate("/")}}>
            <img src={Neck5}/>
            </a>
        </div>

        <div id="collection3">
            <img src={a1}/>
            <img src={a2}/>
            <img src={a3}/>
        </div>

       
        </>
    )
 }
 export default Collection;
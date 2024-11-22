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
 
 
 const Collection=()=>{
    return(
        <>
        <div id="collection1">
            <img src={LongNeck}/>
        </div>

        <div id="collection1">
            <img src={Neck1}/>
        </div>
        <div id="collection1">
            <img src={Neck2}/>
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
            <img src={Neck3}/>
        </div>

        <div id="collection1">
            <img src={Neck6}/>
        </div>


        <div id="collection1">
            <img src={Neck4}/>
        </div>
        <div id="collection1">
            <img src={Neck5}/>
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
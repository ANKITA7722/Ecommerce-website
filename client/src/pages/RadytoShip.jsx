import ReactPlayer from 'react-player'
import vedio from "../images/bde.mp4"



const RadytoShip=()=>{
    return(
        <>
        <h1> collection</h1>
        <ReactPlayer controls={true} url={vedio} loop={true} />
       
        </>
    )
 }
 export default RadytoShip;

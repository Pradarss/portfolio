import { useState } from "react";
import { HomeArea } from "../styles";

function Home(){

    const [Hovered, setHovered] = useState(true);

    function HandleHover(){
        setHovered(null);
    }

    function HandleNotHover(){
        setHovered(true);
    }

    return(
        <HomeArea>
        <div onMouseEnter={HandleHover} onMouseLeave={HandleNotHover} style={{height: "60%", width: "76%",position:"relative"}}>
            {Hovered?<div style={{backgroundImage: "url('/assets/Pic-cropped.jpg')" , height: "100%", width: "100%", backgroundSize: "contain", backgroundRepeat:"no-repeat", borderRadius: "50%"}}></div>:<div style={{backgroundImage: "url('/assets/toonpic.jpg')" , height: "100%", width: "100%", backgroundSize: "contain", backgroundRepeat:"no-repeat", borderRadius: "50%"}}></div>}
        </div>

        </HomeArea>
    )
}

export default Home;
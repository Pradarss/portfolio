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
        {/* <div onMouseEnter={HandleHover} onMouseLeave={HandleNotHover} style={{height: "60%", width: "76%",position:"relative"}}>
            {Hovered?<div style={{backgroundImage: "url('/assets/Pic-cropped.jpg')" , height: "100%", width: "100%", backgroundSize: "contain", backgroundRepeat:"no-repeat", borderRadius: "50%"}}></div>:<div style={{backgroundImage: "url('/assets/toonpic.jpg')" , height: "100%", width: "100%", backgroundSize: "contain", backgroundRepeat:"no-repeat", borderRadius: "50%"}}></div>}
        </div> */}
        <div
    onMouseEnter={HandleHover}
    onMouseLeave={HandleNotHover}
    style={{
      height: "60%",
      width: "76%",
      position: "relative",
      maxWidth: "400px", // Ensures the div doesn’t get too large on bigger screens
      maxHeight: "400px", // Limits the height
    }}
  >
    {Hovered ? (
      <div
        style={{
          backgroundImage: "url('/assets/Pic-cropped.jpg')",
          height: "100%",
          width: "100%",
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundPosition: "center", // Centers the image
          borderRadius: "50%",
        }}
      ></div>
    ) : (
      <div
        style={{
          backgroundImage: "url('/assets/toonpic.jpg')",
          height: "100%",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "50%",
        }}
      ></div>
    )}
  </div>

        </HomeArea>
    )
}

export default Home;
import { useState } from "react";
import { HomeArea } from "../styles";
import {motion} from 'framer-motion';

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
        <motion.div
     initial={{ scale: 1.2, rotate: 0 }}
    animate={{ scale: 1, rotate: 0 }}
    whileHover={{ scale: 1.1, rotate: 5, }}
    transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
    onMouseEnter={HandleHover}
    onMouseLeave={HandleNotHover}
    style={{
      height: "60%",
      width: "76%",
      position: "relative",
      maxWidth: "400px", 
      maxHeight: "400px", 
    }}
  >
    {Hovered ? (
      <motion.div
        style={{
          backgroundImage: "url('/assets/toonpic.jpg')",
          height: "100%",
          width: "100%",
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          borderRadius: "50%",
        }}
      ></motion.div>
    ) : (
      <motion.div
        style={{
          backgroundImage: "url('/assets/Pic-cropped.jpg')",
          height: "100%",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "50%",
        }}
      ></motion.div>
    )}
  </motion.div>

        </HomeArea>
    )
}

export default Home;
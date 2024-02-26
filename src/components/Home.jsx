// function Home(){
//     return(
//         <div className="home">
//         <div className="home-left">
//             <h1>Hi, I am Adarsh</h1>
//             <p>A Full stack web developer</p>
//         </div>
//         <div className="home-right">
//             <img src='../src../portfolio/public/assets/toon pic.jpeg'>avatar</img>
//         </div>
//         </div>
//     )
// }

// export default Home;

// import { Box } from '@mui/material';
import {Button }from '@mui/material';
import React from 'react';
// import { Zoom } from 'react-reveal';
// import { Fade } from 'react-reveal';

function Home() {
  return (
    <div className="home">
      <div className="home-content">
      {/* <Fade left> */}
        <div className="home-left">
          <h1>Hi, I am Adarsh</h1>
          
          <div>
          <p>A Full Stack Web Developer</p>
          <Button>Download CV</Button>
          </div>
        </div>
      {/* </Fade> */}
        
        {/* <Zoom> */}
          <div className="home-right">
          {/* <img
            src="../src../portfolio/public/assets/toon pic.jpeg"
            alt="avatar"
            className="avatar"
          /> */}
        </div>
        {/* </Zoom> */}
        
      </div>
    </div>
  );
}

export default Home;

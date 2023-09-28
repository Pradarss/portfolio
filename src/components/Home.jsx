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

import React from 'react';

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <div className="home-left">
          <h1>Hi, I am Adarsh</h1>
          <p>A Full Stack Web Developer</p>
        </div>
        <div className="home-right">
          {/* <img
            src="../src../portfolio/public/assets/toon pic.jpeg"
            alt="avatar"
            className="avatar"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;

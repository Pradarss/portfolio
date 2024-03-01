import React from 'react';

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <div className="home-left">
          <h1>Hi, I am Adarsh</h1>
          <p>A Full Stack Web Developer</p>
          <div>
          <a href='https://drive.google.com/file/d/10K7AH2JE6NboaDV6IbDeLsZPl2tASKyG/view?usp=drive_link' target="_blank" rel="noreferrer">Download CV</a>
          </div>
        </div>
          <div className="home-right">
            <img src='/assets/toonpic.jpg' alt='my-picture'></img>
          </div>
      </div>
    </div>
  );
}

export default Home;

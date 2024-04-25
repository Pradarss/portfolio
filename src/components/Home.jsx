import React from 'react';
import { motion } from 'framer-motion';
function Home() {

  const HomeleftVariants = {
    initial : {
      y:-120,
    },
    animate : {
      y : 0,
      transition : {
        type: 'spring', 
        stiffness: 120
      }
    }
  }
  return (
    <div className="home">
      <div className="home-content">
        <motion.div className="home-left"         
          variants={HomeleftVariants}
          initial="initial"
          animate="animate">
          <h1>
            Hi, I am Adarsh</h1>
          <p>A Full Stack Web Developer</p>
          <motion.div whileHover={{scale:0.8}}>
          <a href='https://drive.google.com/file/d/10K7AH2JE6NboaDV6IbDeLsZPl2tASKyG/view?usp=drive_link' target="_blank" rel="noreferrer">Download CV</a>
          </motion.div>
        </motion.div>
          <div className="home-right">
            <motion.img 
            animate={{scale : 0.8}} initial={{scale: 0.5}} transition={{type : 'tween'}} src='/assets/toonpic.jpg' alt='myAvatar'></motion.img>
          </div>
      </div>
    </div>
  );
}

export default Home;

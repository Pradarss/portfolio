import { Link, Typography } from "@mui/material";
import { LeftComponentArea, Buttonstyle } from "../styles";
import LeftList from "./LeftList";
import SocialLink from "./SocialLink";
import { motion } from "framer-motion";

function LeftComponent(){

    const MotionButton = motion(Buttonstyle);

    return(
        <LeftComponentArea>
            <Typography variant="h5">
                <motion.div 
                    initial={{ x: '-100px', opacity: 0 }} 
                    animate={{ x: '0', opacity: 1 }} 
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    Hi there
                </motion.div>
            </Typography>
            
            <Typography variant="h2" fontWeight="bold" color="#ffc300">
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
                >
                    I am Adarsh
                </motion.div>
            </Typography>
            
            <Typography variant="h4" pb="5rem">
                <motion.div 
                    initial={{ x: '100px', opacity: 0 }} 
                    animate={{ x: '0', opacity: 1 }} 
                    transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
                >
                    A Web Developer
                </motion.div>
            </Typography>
            
            <LeftList />
            
            <Link href="https://drive.google.com/file/d/13ypp7xASxn1ArTtQcVJ_XcG2zfwiv-Ly/view?usp=drivesdk" target="_blank" sx={{textDecoration: "none"}}>
                <MotionButton 
                    initial={{ opacity: 0, scale: 0.8 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    whileHover={{ scale: 0.9 }}
                >
                    View Resume
                </MotionButton>
            </Link>

            <SocialLink />
        </LeftComponentArea>
    )
}

export default LeftComponent;

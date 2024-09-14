import { Link, Typography } from "@mui/material";
import { LeftComponentArea, Buttonstyle } from "../styles";
import LeftList from "./LeftList";
import SocialLink from "./SocialLink";

function LeftComponent(){
  
    return(
        <LeftComponentArea>
            <Typography variant="h5">Hi there</Typography>
            <Typography variant="h2" fontWeight="bold" color="#ffc300">I am Adarsh</Typography>
            <Typography variant="h4" pb="5rem" >A Web Developer</Typography>
            <LeftList />
            <Link href="https://drive.google.com/file/d/13ypp7xASxn1ArTtQcVJ_XcG2zfwiv-Ly/view?usp=drivesdk" target="_blank" sx={{textDecoration: "none"}}><Buttonstyle>View Resume</Buttonstyle></Link>

            <SocialLink />
        </LeftComponentArea>
    )
}

export default LeftComponent;
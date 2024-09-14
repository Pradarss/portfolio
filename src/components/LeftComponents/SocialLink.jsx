import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Iconstyles, SocailLinkArea } from '../styles';

function SocialLink(){
    return(
        <SocailLinkArea>
          <a href="https://www.instagram.com/adarsh.v0/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon  sx={Iconstyles}/>
            </a>

            <a href="https://www.linkedin.com/in/adarshverma001/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon  sx={Iconstyles}/>
            </a>

            <a href="https://github.com/Pradarss" target="_blank" rel="noopener noreferrer">
              <GitHubIcon sx={Iconstyles}/>
            </a>
    </SocailLinkArea>
    )
}

export default SocialLink;
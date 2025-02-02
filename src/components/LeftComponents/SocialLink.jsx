import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Iconstyles, SocailLinkArea } from '../styles';
import { SvgIcon } from "@mui/material";

const LeetCodeIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M7.56 9.32l-2.64 2.66 8.33 8.34 5.63-5.66-2.64-2.67-3 3.02-5.68-5.69m8.68-3.33l-2.62-2.67-8.67 8.7 2.65 2.66 8.64-8.69m4.02 4.01l-2.01 2.03 2.01 2.02 2.02-2.02z"
    />
  </SvgIcon>
);

function SocialLink(){
    return(
        <SocailLinkArea>
          <a href="https://www.instagram.com/adarsh.v0/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon  sx={Iconstyles}/>
            </a>

            <a href="https://www.linkedin.com/in/adarshverma001/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon  sx={Iconstyles}/>
            </a>

            <a href="https://leetcode.com/u/Adarsh-v0/" target="_blank" rel="noopener noreferrer">
              <LeetCodeIcon sx={Iconstyles}/>
            </a>

            <a href="https://github.com/Pradarss" target="_blank" rel="noopener noreferrer">
              <GitHubIcon sx={Iconstyles}/>
            </a>
    </SocailLinkArea>
    )
}

export default SocialLink;
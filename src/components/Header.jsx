// Header.js
import React from 'react';
import {   IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { LinksArea, StyledAppbar, StyledToolbar } from '../styles/HeaderStyles';

const Header = () => {
  return (
    <StyledAppbar position="static">
      <StyledToolbar>
        <h1>
          Adarsh verma
        </h1>
        <LinksArea>
            <IconButton href="https://www.linkedin.com/in/adarshverma001/" target="_blank" rel="noopener noreferrer" color="inherit">
          <LinkedInIcon />
        </IconButton>
        <IconButton href="https://www.instagram.com/adarsh.v0/" target="_blank" rel="noopener noreferrer" color="inherit">
          <InstagramIcon />
        </IconButton>
        <IconButton href="https://github.com/Pradarss" target="_blank" rel="noopener noreferrer" color="inherit">
          <GitHubIcon />
        </IconButton>
        </LinksArea>

      </StyledToolbar>
    </StyledAppbar>
  );
}

export default Header;

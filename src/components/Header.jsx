// Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { LinksArea, StyledAppbar, StyledToolbar } from '../styles/HeaderStyles';

const Header = () => {
  return (
    <StyledAppbar position="static">
      <StyledToolbar>
        <Typography>
          Portfolio
        </Typography>
        <LinksArea>
            <IconButton href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" color="inherit">
          <LinkedInIcon />
        </IconButton>
        <IconButton href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" color="inherit">
          <InstagramIcon />
        </IconButton>
        <IconButton href="https://github.com/" target="_blank" rel="noopener noreferrer" color="inherit">
          <GitHubIcon />
        </IconButton>
        </LinksArea>

      </StyledToolbar>
    </StyledAppbar>
  );
}

export default Header;

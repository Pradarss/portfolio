// Footer.js
import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', padding: '20px', textAlign: 'center' }}>
      <Typography variant="body1" color="text.secondary">
        &copy; {new Date().getFullYear()} Adarsh. All rights reserved.
      </Typography>
      <Box sx={{ marginTop: '10px' }}>
        <IconButton href="https://www.linkedin.com/in/adarshverma001/" target="_blank" rel="noopener noreferrer" color="inherit">
          <LinkedInIcon />
        </IconButton>
        <IconButton href="https://www.instagram.com/adarsh.v0/" target="_blank" rel="noopener noreferrer" color="inherit">
          <InstagramIcon />
        </IconButton>
        <IconButton href="https://github.com/Pradarss" target="_blank" rel="noopener noreferrer" color="inherit">
          <GitHubIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Footer;

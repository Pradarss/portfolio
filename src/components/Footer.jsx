import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h1>Adarsh</h1>
        </div>
        {/* <div className="footer-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="https://github.com/">Github</a></li>
            <li><a href="https://www.instagram.com/">Instagram</a></li>
            <li><a href="https://www.linkedin.com/">Linkedin</a></li>
          </ul>
        </div> */}
        <div className="footer-social">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            {/* <i className="fab fa-instagram"></i> */}
            <InstagramIcon />
            
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            {/* <i className="fab fa-linkedin"></i> */}
            <LinkedInIcon />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            {/* <i className="fab fa-github"></i> */}
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} Adarsh. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

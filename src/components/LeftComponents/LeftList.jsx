import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { CustomLi, CustomLine, CustomLink, CustomUl } from '../styles';

const sections = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certifications', href: '#certifications' },
];

const InteractiveList = () => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const handleClick = (index) => {
    setSelectedSection(index);
  };

  return (
    <CustomUl component="ul">
      {sections.map((section, index) => (
        <CustomLi
          key={section.name}
          component="li"
        >
          <CustomLine
            sx={{
              width: hovered === index || selectedSection === index ? '30px' : '20px',
              backgroundColor: selectedSection === index ? '#ffc300' : 'white',
            }}
          />
          <CustomLink
            href={section.href}
            sx={{
              color: hovered === index || selectedSection === index ? '#ffc300' : 'white',
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index)}
          >
            <Typography variant="h6">{section.name}</Typography>
          </CustomLink>
        </CustomLi>
      ))}
    </CustomUl>
  );
};

export default InteractiveList;

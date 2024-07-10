// Contact.js
import React, { useState } from 'react';
import { Box, Typography, TextField } from '@mui/material';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box style={{  justifyContent: 'center', alignItems: 'center', display: 'grid' , borderTop: '2px dotted black'}}>
      <Typography variant="h4" gutterBottom style={{display: 'flex', justifyContent: 'center'}}>Contact Me</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          margin="normal"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          label="Subject"
          variant="outlined"
          margin="normal"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          multiline
          rows={4}
          label="Message"
          variant="outlined"
          margin="normal"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <div className='ContactButtonDiv'>
        <motion.Button className='ContactButton' type="submit"  animate={{x:0}} initial={{x: '-100vw'}} >Submit</motion.Button>
        </div>
      </form>
    </Box>
  );
}

export default Contact;

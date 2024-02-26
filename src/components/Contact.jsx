// Contact.js
import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

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
    <Box style={{ padding: '10rem', justifyContent: 'center', alignItems: 'center', display: 'grid' , borderTop: '2px dotted black'}}>
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
        <div >
        <Button type="submit" variant="contained" color="primary" style={{left: '50vh'}}>Submit</Button>
        </div>
      </form>
    </Box>
  );
}

export default Contact;

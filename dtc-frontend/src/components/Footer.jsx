import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 1,  textAlign: 'center'}}>
      <Typography variant="body2" sx={{fontSize: '16px', fontWeight: 500}}>
        © 2024 Delhi Transport Corporation. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;

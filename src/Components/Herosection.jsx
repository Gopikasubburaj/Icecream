import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import IceCreamImg from '../components/icecream.png'; // ✅ Make sure this image exists

export default function HeroSection() {
  return (
    <Box sx={{ flexGrow: 1, p: 4, background: '#fff' }}>
      <Grid container spacing={2} alignItems="center">
        
        {/* Left Side Content */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" color="secondary" gutterBottom>
            — Welcome to The
          </Typography>

          <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
            Discover <span style={{ color: '#ff4aa2' }}>Sweet</span><br />Delights!
          </Typography>

          <Typography variant="body1" sx={{ mt: 2, mb: 4 }}>
            Relish the timeless taste of handcrafted ice cream, made<br />
            with passion and the finest ingredients.
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: '#5b2e91',
              color: '#fff',
              px: 4,
              py: 1.5,
              borderRadius: '30px',
              textTransform: 'none',
              boxShadow: '0 4px 20px rgba(91,46,145,0.3)',
              '&:hover': {
                backgroundColor: '#48217a',
              },
            }}
          >
            Browse Our Classic Flavors →
          </Button>
        </Grid>

        {/* Right Side Image */}
        <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
          <Box
            component="img"
            src={IceCreamImg}
            alt="Ice Cream"
            sx={{ maxWidth: '100%', height: 'auto' }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

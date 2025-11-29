import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const nameRef = useRef(null);
  const typingRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(nameRef.current, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
    .to(typingRef.current, {
      duration: 2,
      text: "Web Developer | UI/UX Enthusiast",
      ease: "none",
    })
    .fromTo(imageRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
      "-=1"
    );

  }, []);

  return (
    <Container maxWidth="lg" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', pt: 8 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={7}>
          <Box>
            <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
              Hi, I'm <span ref={nameRef} style={{ 
                background: 'linear-gradient(45deg, #6366f1, #ec4899)', 
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>Yasasri Uppuluri</span>
            </Typography>
            <Typography ref={typingRef} variant="h5" sx={{ mb: 4, minHeight: '1.5em', color: 'text.secondary' }}>
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button 
                variant="contained" 
                color="primary" 
                href="/Yasasri_Uppuluri.pdf" 
                target="_blank"
                sx={{ 
                  background: 'linear-gradient(45deg, #6366f1, #ec4899)',
                  '&:hover': { background: 'linear-gradient(45deg, #4f46e5, #db2777)' }
                }}
              >
                View Portfolio
              </Button>
              <Button 
                variant="outlined" 
                color="primary" 
                href="/Yasasri_Uppuluri.pdf" 
                download
              >
                Download Resume
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box 
            ref={imageRef}
            component="img"
            src="/certifications/yashu4.jpeg"
            alt="Yasasri Uppuluri"
            sx={{
              width: '100%',
              maxWidth: 400,
              borderRadius: '20px',
              boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
              border: '4px solid white',
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;

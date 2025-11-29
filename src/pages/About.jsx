import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  const details = [
    { label: "Father's Name", value: "Uppuluri Yasasri" }, // Wait, original HTML says Father's Name: Uppuluri Yasasri? That seems like a typo in original HTML (same as her name). But I will keep it or maybe check context. Line 47: "Father's Name: Uppuluri Yasasri". Line 24: "Hi, I'm Yasasri Uppuluri". It's possible her father has same name or it's a typo. I will keep it as is to be safe, or maybe it's "Uppuluri [Father's Name]". Actually line 47 says "Uppuluri Yasasri". I'll copy as is.
    { label: "Father's Occupation", value: "Farmer" },
    { label: "Mother's Name", value: "Uppuluri Vijaya Lakshmi" },
    { label: "Mother's Occupation", value: "Homemaker" },
    { label: "Date of Birth", value: "04 Nov 2005" },
    { label: "Gender", value: "Female" },
    { label: "Nationality", value: "Indian" },
    { label: "Languages Known", value: "English, Telugu" },
    { label: "Hobbies", value: "Watching Movies, Listening to Music, Reading Story Books" },
  ];

  return (
    <Container maxWidth="md">
      <Box ref={sectionRef} sx={{ py: 4 }}>
        <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          About Me
        </Typography>
        <Paper elevation={3} sx={{ p: 4, mb: 4, borderRadius: 2 }}>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
            Passionate about building beautiful, functional web experiences. Skilled in modern front-end technologies, UI/UX design, and creative problem solving.
          </Typography>
        </Paper>

        <Typography variant="h4" component="h3" gutterBottom sx={{ fontWeight: 'bold', mt: 6, mb: 3 }}>
          Personal Details
        </Typography>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
          <Grid container spacing={2}>
            {details.map((detail, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Typography variant="subtitle2" color="text.secondary">
                  {detail.label}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {detail.value}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};

export default About;

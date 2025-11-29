import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import { Box, Container, Grid, Link, Paper, Typography } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const contactMethods = [
  {
    title: "Email",
    value: "yasasrichowdary22@gmail.com",
    href: "mailto:yasasrichowdary22@gmail.com",
    icon: <EmailIcon fontSize="large" />,
    extra: "Response time: Within 24 hours"
  },
  {
    title: "Phone",
    value: "+91 9908738111",
    href: "tel:+919908738111",
    icon: <PhoneIcon fontSize="large" />,
    extra: "Available: 9 AM - 6 PM IST"
  },
  {
    title: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://linkedin.com/in/uppuluri-yasasri-798717278",
    icon: <LinkedInIcon fontSize="large" />,
    extra: "Active Daily"
  },
  {
    title: "GitHub",
    value: "View My Projects",
    href: "https://github.com/yasasri61",
    icon: <GitHubIcon fontSize="large" />,
    extra: "Regular Updates"
  }
];

const ContactCard = ({ method, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(cardRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 90%",
        }
      }
    );
  }, [index]);

  return (
    <Grid item xs={12} sm={6} md={3} ref={cardRef}>
      <Paper 
        elevation={3} 
        sx={{ 
          p: 3, 
          height: '100%', 
          borderRadius: 2, 
          textAlign: 'center',
          transition: 'transform 0.3s',
          '&:hover': { transform: 'translateY(-10px)' }
        }}
      >
        <Box sx={{ color: 'primary.main', mb: 2 }}>
          {method.icon}
        </Box>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {method.title}
        </Typography>
        <Typography variant="body1" paragraph>
          <Link href={method.href} target="_blank" underline="hover" color="inherit">
            {method.value}
          </Link>
        </Typography>
        <Typography variant="caption" display="block" color="text.secondary">
          {method.extra}
        </Typography>
      </Paper>
    </Grid>
  );
};

const Contact = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4, minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            Let's Connect!
          </Typography>
          <Typography variant="h6" color="text.secondary">
            I'm currently available for freelance work and full-time opportunities.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {contactMethods.map((method, index) => (
            <ContactCard key={index} method={method} index={index} />
          ))}
        </Grid>
        
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © 2025 Yasasri Uppuluri
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;

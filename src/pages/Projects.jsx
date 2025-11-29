import { Box, Card, CardActionArea, CardContent, Chip, Container, Grid, Typography } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Ghost Hunter Game",
    description: "Immersive browser-based horror game using HTML5, CSS3, and JS.",
    image: "https://source.unsplash.com/random/800x600?ghost", // Placeholder or use generate_image later if needed. Original didn't have images in HTML, just text. Wait, HTML didn't have images for projects.
    tags: ["HTML5", "CSS3", "JavaScript"]
  },
  {
    title: "Interactive Weather App",
    description: "Live weather updates & adaptive UI using OpenWeatherMap API.",
    image: "https://source.unsplash.com/random/800x600?weather",
    tags: ["API", "JavaScript", "CSS"]
  },
  {
    title: "Meal Finder Web App",
    description: "Search & view meals with ingredients and thumbnails via API.",
    image: "https://source.unsplash.com/random/800x600?food",
    tags: ["API", "Frontend", "Search"]
  }
];

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(cardRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.2,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 90%",
        }
      }
    );
  }, [index]);

  return (
    <Grid item xs={12} md={4} ref={cardRef}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-10px)' } }}>
        <CardActionArea>
          <Box sx={{ height: 140, bgcolor: 'grey.300', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             {/* Placeholder for image since original didn't have one, or use a generic icon */}
             <Typography variant="h4">🚀</Typography>
          </Box>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
              {project.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {project.description}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {project.tags.map(tag => (
                <Chip key={tag} label={tag} size="small" color="primary" variant="outlined" />
              ))}
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

const Projects = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', mb: 4 }}>
          Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Projects;

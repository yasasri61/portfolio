import { Box, Container, Grid, LinearProgress, Paper, Typography } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const SkillBar = ({ name, percentage }) => (
  <Box sx={{ mb: 2 }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
      <Typography variant="body2" fontWeight="bold">{name}</Typography>
      <Typography variant="body2" color="text.secondary">{percentage}%</Typography>
    </Box>
    <LinearProgress 
      variant="determinate" 
      value={percentage} 
      sx={{ 
        height: 8, 
        borderRadius: 4,
        backgroundColor: (theme) => theme.palette.mode === 'light' ? 'grey.200' : 'grey.800',
        '& .MuiLinearProgress-bar': {
          borderRadius: 4,
          background: 'linear-gradient(45deg, #6366f1, #ec4899)',
        }
      }} 
    />
  </Box>
);

const SkillCategory = ({ title, icon, skills, delay }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(cardRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: delay,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
        }
      }
    );
  }, [delay]);

  return (
    <Grid item xs={12} md={6} ref={cardRef}>
      <Paper elevation={3} sx={{ p: 3, height: '100%', borderRadius: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Typography variant="h2" sx={{ mr: 2, fontSize: '2rem' }}>{icon}</Typography>
          <Typography variant="h5" fontWeight="bold">{title}</Typography>
        </Box>
        {skills.map((skill) => (
          <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} />
        ))}
      </Paper>
    </Grid>
  );
};

const Skills = () => {
  const categories = [
    {
      title: "Languages",
      icon: "💻",
      skills: [
        { name: "Python", percentage: 90 },
        { name: "Java", percentage: 85 },
        { name: "C", percentage: 80 },
      ]
    },
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "HTML/CSS", percentage: 95 },
        { name: "JavaScript", percentage: 90 },
        { name: "React.js", percentage: 85 },
        { name: "Bootstrap", percentage: 88 },
      ]
    },
    {
      title: "UI/UX Tools",
      icon: "🎯",
      skills: [
        { name: "Figma", percentage: 88 },
        { name: "Responsive Design", percentage: 92 },
      ]
    },
    {
      title: "Other Skills",
      icon: "🔧",
      skills: [
        { name: "Flutter", percentage: 82 },
        { name: "DBMS", percentage: 85 },
        { name: "API Integration", percentage: 87 },
      ]
    }
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', mb: 4 }}>
          Technical Skills
        </Typography>
        <Grid container spacing={4}>
          {categories.map((category, index) => (
            <SkillCategory 
              key={category.title} 
              {...category} 
              delay={index * 0.1} 
            />
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Skills;

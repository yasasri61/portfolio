import { Box, Chip, Container, Grid, Paper, Typography } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  {
    title: "Hackathon Host",
    description: "Successfully organized and coordinated a 24-hour hackathon, managing logistics and participant experience.",
    icon: "🏆",
    tags: ["Event Management", "Leadership"]
  },
  {
    title: "Smart India Hackathon",
    description: "Participated in the prestigious Smart India Hackathon, developing innovative solutions for real-world challenges.",
    icon: "💡",
    tags: ["Innovation", "Problem Solving"]
  },
  {
    title: "Panel Discussion Lead",
    description: "Successfully moderated professional discussions, facilitating meaningful dialogue between industry experts.",
    icon: "🎯",
    tags: ["Communication", "Moderation"]
  },
  {
    title: "AMA Session Organizer",
    description: "Directed interactive Q&A sessions, bridging the gap between speakers and audience through engaging discussions.",
    icon: "💬",
    tags: ["Event Planning", "Community"]
  },
  {
    title: "NCC Cadet",
    description: "Developed strong leadership skills, discipline, and teamwork through rigorous military training and activities.",
    icon: "⚔️",
    tags: ["Leadership", "Discipline"]
  },
  {
    title: "National Netball Player",
    description: "Competed at the national level, demonstrating excellence in teamwork, strategy, and competitive spirit.",
    icon: "🏃‍♀️",
    tags: ["Sports", "Teamwork"]
  }
];

const AchievementCard = ({ achievement, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(cardRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 95%",
        }
      }
    );
  }, [index]);

  return (
    <Grid item xs={12} md={6} lg={4} ref={cardRef}>
      <Paper 
        elevation={3} 
        sx={{ 
          p: 3, 
          height: '100%', 
          borderRadius: 2,
          transition: 'transform 0.3s, box-shadow 0.3s',
          '&:hover': { 
            transform: 'translateY(-10px) rotateX(5deg)', 
            boxShadow: 6 
          },
          perspective: '1000px'
        }}
      >
        <Typography variant="h2" sx={{ mb: 2 }}>{achievement.icon}</Typography>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {achievement.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {achievement.description}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 'auto' }}>
          {achievement.tags.map(tag => (
            <Chip key={tag} label={tag} size="small" variant="outlined" color="secondary" />
          ))}
        </Box>
      </Paper>
    </Grid>
  );
};

const Achievements = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', mb: 4 }}>
          Achievements & Leadership
        </Typography>
        <Grid container spacing={4}>
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} index={index} />
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Achievements;

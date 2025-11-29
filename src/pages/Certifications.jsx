import CloseIcon from '@mui/icons-material/Close';
import { Backdrop, Box, Container, Fade, Grid, IconButton, Modal, Paper, Typography } from '@mui/material';
import { useState } from 'react';

const certifications = [
  {
    title: "FreeCodeCamp Web Development",
    issuer: "FreeCodeCamp",
    year: "2025",
    description: "Comprehensive certification in modern web development covering HTML, CSS, JavaScript, and responsive design principles.",
    icon: "🌐",
    image: "/certifications/freecodecamp.png"
  },
  {
    title: "Network Engineering",
    issuer: "Cisco",
    year: "2024",
    description: "Professional certification in network architecture, protocols, and security from Cisco Systems.",
    icon: "🔧",
    image: "/certifications/cisco.jpg"
  },
  {
    title: "Machine Learning & AI",
    issuer: "AI Institute",
    year: "2025",
    description: "Advanced certification in machine learning algorithms, neural networks, and artificial intelligence concepts.",
    icon: "🤖",
    image: "/certifications/machinelearning.jpg"
  },
  {
    title: "Data Science & Analytics",
    issuer: "Professional Institute",
    year: "2024",
    description: "Professional certification covering data analysis, visualization, and analytical techniques for business intelligence.",
    icon: "📊",
    image: "/certifications/Data Science & Analytics.pdf" // Note: PDF might not display in img tag, might need iframe or link. But original used img src for PDF? Wait.
    // Original HTML line 195: onclick="showCertificate('certifications/Data Science & Analytics.pdf', ...)"
    // And line 274: <img id="modal-image" src="" ...>
    // Browsers might render PDF in img tag if it's a single page or supported, but usually not. 
    // I should probably check if it's a PDF and render differently or just use the path. 
    // For now I will assume it works or I'll use an iframe for PDFs if I can detect it.
  },
  {
    title: "HTML & CSS Crash Course",
    issuer: "Web Development Academy",
    year: "2024",
    description: "Intensive certification covering fundamentals of HTML5 and modern CSS techniques for web development.",
    icon: "💻",
    image: "/certifications/HTML & CSS Crash Course.pdf"
  },
  {
    title: "JDBC & Database Connectivity",
    issuer: "Java Institute",
    year: "2024",
    description: "Certification in Java Database Connectivity, SQL integration, and database management best practices.",
    icon: "🗄️",
    image: "/certifications/JDBC_certificate.pdf"
  },
  {
    title: "Event Coordinator Certification",
    issuer: "Event Management Institute",
    year: "2024",
    description: "Professional certification in event planning, coordination, and management.",
    icon: "🎯",
    image: "/certifications/Coordinator.Yasasri Uppuluri.pdf"
  },
  {
    title: "AI Appreciation Certificate",
    issuer: "AI Community",
    year: "2025",
    description: "Recognition for excellence and contribution in the field of Artificial Intelligence and innovation.",
    icon: "🤖",
    image: "/certifications/Uppuluri Yasasri_AI_APPRECIATE_CERTIFICATE.png"
  },
  {
    title: "SPYPRO AI Workshop",
    issuer: "SPYPRO Technologies",
    year: "2024",
    description: "Intensive workshop certification on advanced AI techniques and practical implementation from SPYPRO Technologies.",
    icon: "🔬",
    image: "/certifications/spypro_Ai_workshop.jpg"
  }
];

const Certifications = () => {
  const [open, setOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const handleOpen = (cert) => {
    setSelectedCert(cert);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const isPdf = (url) => url?.toLowerCase().endsWith('.pdf');

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', mb: 4 }}>
          Certifications
        </Typography>
        <Grid container spacing={3}>
          {certifications.map((cert, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 3, 
                  height: '100%', 
                  borderRadius: 2,
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 }
                }}
                onClick={() => handleOpen(cert)}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h4" sx={{ mr: 2 }}>{cert.icon}</Typography>
                  <Typography variant="h6" fontWeight="bold" sx={{ lineHeight: 1.2 }}>
                    {cert.title}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {cert.description}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 'auto' }}>
                  <Typography variant="caption" fontWeight="bold">{cert.issuer}</Typography>
                  <Typography variant="caption">{cert.year}</Typography>
                </Box>
                <Typography variant="button" display="block" sx={{ mt: 2, color: 'primary.main' }}>
                  View Certificate →
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Modal
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '90%',
              maxWidth: 900,
              height: '80vh',
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 1,
              borderRadius: 2,
              outline: 'none',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 1 }}>
                <Typography variant="h6">{selectedCert?.title}</Typography>
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </Box>
              <Box sx={{ flexGrow: 1, overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: 'grey.100' }}>
                {selectedCert && (
                  isPdf(selectedCert.image) ? (
                    <iframe 
                      src={selectedCert.image} 
                      width="100%" 
                      height="100%" 
                      style={{ border: 'none' }}
                      title="Certificate PDF"
                    />
                  ) : (
                    <Box 
                      component="img" 
                      src={selectedCert.image} 
                      alt="Certificate" 
                      sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                    />
                  )
                )}
              </Box>
            </Box>
          </Fade>
        </Modal>
      </Box>
    </Container>
  );
};

export default Certifications;

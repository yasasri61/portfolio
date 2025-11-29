import CloseIcon from '@mui/icons-material/Close';
import { Backdrop, Box, Container, Fade, IconButton, Modal, Paper, Typography } from '@mui/material';
import { useState } from 'react';

const Internship = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main', mb: 4 }}>
          Internship
        </Typography>
        
        <Paper 
          elevation={3} 
          sx={{ 
            p: 4, 
            borderRadius: 2, 
            cursor: 'pointer',
            transition: 'transform 0.3s',
            '&:hover': { transform: 'scale(1.02)' }
          }}
          onClick={() => handleOpen('/certifications/spyprocertificate.jpg')}
        >
          <Typography variant="h5" gutterBottom fontWeight="bold">
            SPYPRO Technologies
          </Typography>
          <Typography variant="subtitle1" color="primary" gutterBottom>
            Web Development Intern
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body1">• Developed responsive web applications using modern technologies</Typography>
            <Typography variant="body1">• Collaborated with senior developers on client projects</Typography>
            <Typography variant="body1">• Gained hands-on experience in front-end development</Typography>
            <Typography variant="body1" sx={{ mt: 1, fontWeight: 'bold' }}>• Duration: 3 months</Typography>
          </Box>
          <Typography variant="caption" display="block" sx={{ mt: 2, color: 'text.secondary' }}>
            Click to view certificate
          </Typography>
        </Paper>

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
              maxWidth: 800,
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 1,
              borderRadius: 2,
              outline: 'none'
            }}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </Box>
              <Box 
                component="img" 
                src={selectedImage} 
                alt="Internship Certificate" 
                sx={{ width: '100%', height: 'auto', borderRadius: 1 }}
              />
            </Box>
          </Fade>
        </Modal>
      </Box>
    </Container>
  );
};

export default Internship;

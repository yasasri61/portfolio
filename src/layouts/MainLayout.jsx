import MenuIcon from '@mui/icons-material/Menu';
import { Box, CssBaseline, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Hero from '../components/Hero';
import Sidebar from '../components/Sidebar';
import ThemeToggle from '../components/ThemeToggle';
import About from '../pages/About';
import Achievements from '../pages/Achievements';
import Certifications from '../pages/Certifications';
import Contact from '../pages/Contact';
import Internship from '../pages/Internship';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';
import { setSidebarOpen, toggleSidebar } from '../store/slices/navSlice';

const drawerWidth = 240;
const collapsedDrawerWidth = 65;

const MainLayout = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSidebarOpen = useSelector((state) => state.nav.isSidebarOpen);

  useEffect(() => {
    // Initial state based on device
    if (isMobile) {
      dispatch(setSidebarOpen(false));
    } else {
      dispatch(setSidebarOpen(true));
    }
  }, [isMobile, dispatch]);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${isSidebarOpen ? drawerWidth : collapsedDrawerWidth}px)` },
          minHeight: '100vh',
          backgroundColor: theme.palette.background.default,
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2, position: 'fixed', right: 20, top: 20, zIndex: 1000 }}>
           {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={() => dispatch(toggleSidebar())}
              sx={{ mr: 2, display: { md: 'none' }, bgcolor: 'background.paper', boxShadow: 1 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Box sx={{ bgcolor: 'background.paper', borderRadius: '50%', boxShadow: 1 }}>
            <ThemeToggle />
          </Box>
        </Box>
        
        <Box id="home" sx={{ minHeight: '100vh' }}><Hero /></Box>
        <Box id="about" sx={{ minHeight: '100vh', pt: 8 }}><About /></Box>
        <Box id="skills" sx={{ minHeight: '100vh', pt: 8 }}><Skills /></Box>
        <Box id="projects" sx={{ minHeight: '100vh', pt: 8 }}><Projects /></Box>
        <Box id="internship" sx={{ minHeight: '100vh', pt: 8 }}><Internship /></Box>
        <Box id="certifications" sx={{ minHeight: '100vh', pt: 8 }}><Certifications /></Box>
        <Box id="achievements" sx={{ minHeight: '100vh', pt: 8 }}><Achievements /></Box>
        <Box id="contact" sx={{ minHeight: '100vh', pt: 8 }}><Contact /></Box>
      </Box>
    </Box>
  );
};

export default MainLayout;

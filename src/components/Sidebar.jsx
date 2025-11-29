import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CodeIcon from '@mui/icons-material/Code';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveSection, setSidebarOpen, toggleSidebar } from '../store/slices/navSlice';

const drawerWidth = 240;
const collapsedDrawerWidth = 65;

const menuItems = [
  { text: 'Home', icon: <HomeIcon />, id: 'home' },
  { text: 'About', icon: <PersonIcon />, id: 'about' },
  { text: 'Skills', icon: <CodeIcon />, id: 'skills' },
  { text: 'Projects', icon: <WorkIcon />, id: 'projects' },
  { text: 'Internship', icon: <WorkIcon />, id: 'internship' },
  { text: 'Certifications', icon: <SchoolIcon />, id: 'certifications' },
  { text: 'Achievements', icon: <EmojiEventsIcon />, id: 'achievements' },
  { text: 'Contact', icon: <ContactMailIcon />, id: 'contact' },
];

const Sidebar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSidebarOpen = useSelector((state) => state.nav.isSidebarOpen);
  const activeSection = useSelector((state) => state.nav.activeSection);

  const handleDrawerToggle = () => {
    dispatch(toggleSidebar());
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      dispatch(setActiveSection(id));
      if (isMobile) {
        dispatch(setSidebarOpen(false));
      }
    }
  };

  const drawerContent = (
    <Box sx={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column', 
      background: theme.palette.mode === 'dark' ? 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)' : 'linear-gradient(180deg, #ffffff 0%, #f1f5f9 100%)',
      overflowX: 'hidden'
    }}>
      <Box sx={{ 
        p: 2, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: isSidebarOpen ? 'space-between' : 'center',
        minHeight: 64
      }}>
        {isSidebarOpen && (
          <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 'bold', background: 'linear-gradient(45deg, #6366f1, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Yasasri
          </Typography>
        )}
        <IconButton onClick={handleDrawerToggle}>
          {isSidebarOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
            <Tooltip title={!isSidebarOpen ? item.text : ""} placement="right">
              <ListItemButton
                selected={activeSection === item.id}
                onClick={() => scrollToSection(item.id)}
                sx={{
                  minHeight: 48,
                  justifyContent: isSidebarOpen ? 'initial' : 'center',
                  px: 2.5,
                  '&.Mui-selected': {
                    backgroundColor: theme.palette.primary.main + '20',
                    borderRight: isSidebarOpen ? `4px solid ${theme.palette.primary.main}` : 'none',
                    '&:hover': {
                      backgroundColor: theme.palette.primary.main + '30',
                    },
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: isSidebarOpen ? 3 : 'auto',
                    justifyContent: 'center',
                    color: activeSection === item.id ? theme.palette.primary.main : 'inherit'
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: isSidebarOpen ? 1 : 0 }} />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box component="nav" sx={{ width: { md: isSidebarOpen ? drawerWidth : collapsedDrawerWidth }, flexShrink: { md: 0 }, transition: 'width 0.3s' }}>
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={isSidebarOpen && isMobile}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Desktop Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: isSidebarOpen ? drawerWidth : collapsedDrawerWidth, 
            borderRight: 'none', 
            boxShadow: '4px 0 24px rgba(0,0,0,0.02)',
            transition: 'width 0.3s',
            overflowX: 'hidden'
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default Sidebar;

import React from 'react';
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  CssBaseline,
  Grid,
  CircularProgress,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import PeopleIcon from '@mui/icons-material/People';
import RouteIcon from '@mui/icons-material/AltRoute';
import BuildIcon from '@mui/icons-material/Build';
import BarChartIcon from '@mui/icons-material/BarChart';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { Link } from 'react-router-dom';

const drawerWidth = '200px';
const drawerCollapsedWidth = '5%'; // Set desired width when collapsed

const ReportsAnalytics = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <div>
      <Box>
        <List>
          {[
            { text: 'Dashboard', icon: <DashboardIcon />, to: '/office' },
            { text: 'Bus Management', icon: <DirectionsBusIcon />, to: '/bus-management' },
            { text: 'Crew Management', icon: <PeopleIcon />, to: '/crew-management' },
            { text: 'Route Management', icon: <RouteIcon />, to: '/route-management' },
            { text: 'Maintenance Management', icon: <BuildIcon />, to: '/maintenance-management' },
            { text: 'Reports and Analytics', icon: <BarChartIcon />, to: '/reports-analytics' },
          ].map((item) => (
            <ListItem button key={item.text} component={Link} to={item.to}>
              <ListItemIcon
                sx={{
                  paddingBottom: mobileOpen ? 0 : 2, // Add padding-bottom when collapsed
                }}
              >
                {item.icon}
              </ListItemIcon>
              {mobileOpen && <ListItemText primary={item.text} />}
            </ListItem>
          ))}
        </List>
        <List>
          {[
            { text: 'Feedback and Support', icon: <FeedbackIcon />, to: '/feedback-support' },
          ].map((item) => (
            <ListItem button key={item.text} component={Link} to={item.to}>
              <ListItemIcon
                sx={{
                  paddingBottom: mobileOpen ? 0 : 2, // Add padding-bottom when collapsed
                }}
              >
                {item.icon}
              </ListItemIcon>
              {mobileOpen && <ListItemText primary={item.text} />}
            </ListItem>
          ))}
        </List>
        
      </Box>
    </div>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '75vh', overflow: 'hidden' }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawerContent}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              width: mobileOpen ? drawerWidth : drawerCollapsedWidth,
              boxSizing: 'border-box',
              backgroundColor: 'lightblue',
              transition: 'width 0.3s ease-in-out',
              height: '721px',
              top: '123px',
              position: 'fixed',
              paddingTop: '64px',
            },
          }}
          open
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              left: 0,
              display: 'flex',
              justifyContent: 'flex-end',
              padding: 1,
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                color: 'black',
                backgroundColor: 'white',
                borderRadius: '50%',
                mr: 2
              }}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
          {drawerContent}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          marginLeft: mobileOpen ? `${drawerWidth}` : `${drawerCollapsedWidth}`,
          transition: 'margin-left 0.3s ease-in-out',
          padding: 2,
          overflowX: 'hidden',
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontSize: '3rem', fontWeight: 700, textAlign: 'center', mt: 5 }}
        >
          Reports and Analytics
        </Typography>
        <Box
          sx={{
            width: '80%',
            maxWidth: '1200px',
            margin: 'auto',
            padding: 2,
            mt: 7
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '200px',
                }}
              >
                <CircularProgress
                  variant="determinate"
                  value={100}
                  size={150}
                  thickness={8} // Adjust thickness here
                  sx={{
                    color: '#6ce5e8', // Background color
                    position: 'absolute',
                    zIndex: 1,
                  }}
                />
                {/* Progress Circle */}
                <CircularProgress
                  variant="determinate"
                  value={75}
                  size={150}
                  thickness={8} // Adjust thickness here
                  sx={{
                    color: '#40b8d5', // Progress color
                    position: 'absolute',
                    zIndex: 2,
                    clipPath: 'circle(75% at 50% 50%)', // Clip the circle to the required percentage
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box
                sx={{
                  padding: 2,
                  borderRadius: '50px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: "#74c0fc",
                  mr: 3
                }}
              >
                <Typography variant="h6" sx={{fontSize: '1.5rem', textAlign: 'center'}}>Bus Active this <br /> month</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box
                sx={{
                  padding: 2,
                  borderRadius: '50px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: "#74c0fc"
                }}
              >
                <Typography variant="h6" sx={{fontSize: '1.5rem', textAlign: 'center'}}>Crew Active this month</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '200px',
                }}
              >
                {/* Background Circle */}
                <CircularProgress
                  variant="determinate"
                  value={100}
                  size={150}
                  thickness={8} // Adjust thickness here
                  sx={{
                    color: '#6ce5e8', // Background color
                    position: 'absolute',
                    zIndex: 1,
                  }}
                />
                {/* Progress Circle */}
                <CircularProgress
                  variant="determinate"
                  value={70}
                  size={150}
                  thickness={8} // Adjust thickness here
                  sx={{
                    color: '#40b8d5', // Progress color
                    position: 'absolute',
                    zIndex: 2,
                    clipPath: 'circle(70% at 50% 50%)', // Clip the circle to the required percentage
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default ReportsAnalytics;

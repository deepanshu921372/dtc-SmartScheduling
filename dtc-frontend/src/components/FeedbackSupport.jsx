import React, { useState } from "react";
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
  Button,
  TextareaAutosize,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import PeopleIcon from "@mui/icons-material/People";
import RouteIcon from "@mui/icons-material/AltRoute";
import BuildIcon from "@mui/icons-material/Build";
import BarChartIcon from "@mui/icons-material/BarChart";
import FeedbackIcon from "@mui/icons-material/Feedback";
import { Link } from "react-router-dom";

const drawerWidth = "200px";
const drawerCollapsedWidth = "5%"; // Set desired width when collapsed

const FeedbackSupport = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("feedback");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <div>
      <Box>
        <List>
          {[
            { text: "Dashboard", icon: <DashboardIcon />, to: "/office" },
            {
              text: "Bus Management",
              icon: <DirectionsBusIcon />,
              to: "/bus-management",
            },
            {
              text: "Crew Management",
              icon: <PeopleIcon />,
              to: "/crew-management",
            },
            {
              text: "Route Management",
              icon: <RouteIcon />,
              to: "/route-management",
            },
            {
              text: "Maintenance Management",
              icon: <BuildIcon />,
              to: "/maintenance-management",
            },
            {
              text: "Reports and Analytics",
              icon: <BarChartIcon />,
              to: "/reports-analytics",
            },
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
            {
              text: "Feedback and Support",
              icon: <FeedbackIcon />,
              to: "/feedback-support",
            },
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
    <Box sx={{ display: "flex", minHeight: "75vh", overflow: "hidden" }}>
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
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawerContent}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              width: mobileOpen ? drawerWidth : drawerCollapsedWidth,
              boxSizing: "border-box",
              backgroundColor: "lightblue",
              transition: "width 0.3s ease-in-out",
              height: "721px",
              top: "123px",
              position: "fixed",
              paddingTop: "64px",
            },
          }}
          open
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              left: 0,
              display: "flex",
              justifyContent: "flex-end",
              padding: 1,
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                color: "black",
                backgroundColor: "white",
                borderRadius: "50%",
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          marginLeft: mobileOpen ? `${drawerWidth}` : `${drawerCollapsedWidth}`,
          transition: "margin-left 0.3s ease-in-out",
          padding: 2,
          overflowX: "hidden",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontSize: "3rem", fontWeight: 700, textAlign: "center", mt: 5 }}
        >
          Feedback and Support
        </Typography>
        <Box
          sx={{
            width: "80%",
            maxWidth: "1200px",
            margin: "auto",
            padding: 2,
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Box sx={{ mb: 2, display: "flex", gap: 1 }}>
            <Button
              variant="contained"
              onClick={() => setActiveTab("feedback")}
              sx={{
                flexGrow: 1,
                fontSize: "1.2rem",
                backgroundColor: "#74c0fc",
                color: "black",
                fontWeight: "bold",
              }}
            >
              Feedback
            </Button>
            <Button
              variant="contained"
              onClick={() => setActiveTab("grievance")}
              sx={{
                flexGrow: 1,
                fontSize: "1.2rem",
                backgroundColor: "#74c0fc",
                color: "black",
                fontWeight: "bold",
              }}
            >
              Grievance Support
            </Button>
          </Box>
          {activeTab === "feedback" && (
            <Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Typography variant="body1" sx={{ mt: 3, fontSize: "1.2rem" }}>
                  Does the system meet your expectations for managing bus
                  schedules and crew assignments?
                </Typography>
                <TextareaAutosize
                  minRows={3}
                  style={{ width: "100%", fontSize: "1rem", color: "black" }}
                />
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  Are there any performance issues you’ve encountered while
                  using the system?
                </Typography>
                <TextareaAutosize
                  minRows={3}
                  style={{ width: "100%", fontSize: "1rem", color: "black" }}
                />
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  Are the scheduling and crew assignments accurate according to
                  your needs?
                </Typography>
                <TextareaAutosize
                  minRows={3}
                  style={{ width: "100%", fontSize: "1rem", color: "black" }}
                />
              </Box>
            </Box>
          )}
          {activeTab === "grievance" && (
            <Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Typography variant="body1" sx={{ mt: 3, fontSize: "1.2rem" }}>
                  Complaint Title
                </Typography>
                <TextareaAutosize
                  minRows={3}
                  style={{ width: "100%", fontSize: "1rem", color: "black" }}
                />
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  Bus ID/Route Number
                </Typography>
                <TextareaAutosize
                  minRows={3}
                  style={{ width: "100%", fontSize: "1rem", color: "black" }}
                />
                <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                  Description of the Issue
                </Typography>
                <TextareaAutosize
                  minRows={3}
                  style={{ width: "100%", fontSize: "1rem", color: "black" }}
                />
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default FeedbackSupport;

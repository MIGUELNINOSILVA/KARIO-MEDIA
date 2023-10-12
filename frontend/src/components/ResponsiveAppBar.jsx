import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import RefreshIcon from "@mui/icons-material/Refresh";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import BugReportIcon from "@mui/icons-material/BugReport";
import HelpIcon from "@mui/icons-material/Help";
import Logo from "./../assets/img/KARIO_LOGO.png";
import MenuItem from '@mui/material/MenuItem';
import { NavLink, useLocation } from "react-router-dom";

function ResponsiveAppBar({miFuncion}) {



  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    localStorage.removeItem("user-token");
    localStorage.removeItem("user-data");
    window.location.href = "/login";
  }

  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "white", color: "black" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <NavLink to="/kario">
              <img src={Logo} alt="Logo..." style={{ height: "30px" }} />
            </NavLink>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Button
                color="inherit"
                startIcon={<AddCircleIcon style={{ color: "#FC7124" }} />}
              ></Button>
              <Button
                color="inherit"
                startIcon={<RefreshIcon style={{ color: "#FC7124" }} />}
              ></Button>
              <Button
                color="inherit"
                startIcon={<DeleteForeverIcon style={{ color: "#FC7124" }} />}
              ></Button>
              <NavLink to="/reportes" style={{ color: "black" }}>
                <Button
                  color="inherit"
                  startIcon={<BugReportIcon style={{ color: "#FC7124" }} />}
                ></Button>
              </NavLink>
              <NavLink to="/help" style={{ color: "black" }}>
                <Button
                  color="inherit"
                  startIcon={
                    <HelpIcon
                      style={{ color: "#FC7124" }}
                      sx={{ flexGrow: 1 }}
                    />
                  }
                ></Button>
              </NavLink>
            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' , justifyContent:'center',gap:100 } }}>
            <Button color="inherit" startIcon={<AddCircleIcon style={{color:'#FC7124'}}/>}>Añadir</Button>
            <Button color="inherit" startIcon={<RefreshIcon style={{color:'#FC7124'}}/>}>Refrescar</Button>
            <Button color="inherit" startIcon={<DeleteForeverIcon style={{color:'#FC7124'}}/>}>Eliminar</Button>
            <NavLink to="/kario"><img src={Logo} alt="Logo..." style={{height:'30px'}}/></NavLink>
            <NavLink to='/reportes'style={{color:'black'}}><Button color="inherit" startIcon={<BugReportIcon style={{color:'#FC7124'}}/>}>Reportar</Button></NavLink>
            <NavLink to="/help" style={{color:'black'}}><Button color="inherit" startIcon={<HelpIcon style={{color:'#FC7124'}} sx={{flexGrow:1}}/>}>Ayuda</Button></NavLink>
          </Box>

          <Box sx={{ flexGrow: 1, display: { textAlign: "end " } }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <SettingsIcon />
                <NotificationsActiveIcon />
                <AccountCircleIcon
                  style={{ color: "black", fontSize: "30px" }}
                  onClick={handleMenu}
                />
                <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Close</MenuItem>
                <MenuItem onClick={handleLogOut}>Log out</MenuItem>
              </Menu>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

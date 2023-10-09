import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import RefreshIcon from '@mui/icons-material/Refresh';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BugReportIcon from '@mui/icons-material/BugReport';
import HelpIcon from '@mui/icons-material/Help';
import Logo from './../assets/img/KARIO_LOGO.png'



const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  return (
    <AppBar position="static" style={{ backgroundColor:'white',color:'black'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
            <img src={Logo} alt="Logo..." style={{height:'30px'}}/>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <Button color="inherit" startIcon={<AddCircleIcon style={{color:'#FC7124'}}/>}>Login</Button>
                <Button color="inherit" startIcon={<RefreshIcon style={{color:'#FC7124'}}/>}>Refrescar</Button>
                <Button color="inherit" startIcon={<DeleteForeverIcon style={{color:'#FC7124'}}/>}>Eliminar</Button>
                <Button color="inherit" startIcon={<BugReportIcon style={{color:'#FC7124'}}/>}>Reportar</Button>
                <Button color="inherit" startIcon={<HelpIcon style={{color:'#FC7124'}} sx={{flexGrow:1}}/>}>Ayuda</Button>
            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button color="inherit" startIcon={<AddCircleIcon style={{color:'#FC7124'}}/>}>Login</Button>
            <Button color="inherit" startIcon={<RefreshIcon style={{color:'#FC7124'}}/>}>Refrescar</Button>
            <Button color="inherit" startIcon={<DeleteForeverIcon style={{color:'#FC7124'}}/>}>Eliminar</Button>
            <img src={Logo} alt="Logo..." style={{height:'30px'}}/>
            <Button color="inherit" startIcon={<BugReportIcon style={{color:'#FC7124'}}/>}>Reportar</Button>
            <Button color="inherit" startIcon={<HelpIcon style={{color:'#FC7124'}} sx={{flexGrow:1}}/>}>Ayuda</Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <SettingsIcon/>
                <NotificationsActiveIcon/>
                <AccountCircleIcon style={{color:'black',fontSize:'30px'}}/>
              </IconButton>
            </Tooltip>
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

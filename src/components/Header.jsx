import { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import DashboardIcon from "@mui/icons-material/Dashboard";
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';


const settings = ['Profile', 'Logout'];

function Header() {
   
 
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };


  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
    
    

  return (
    <header className="header">
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <DashboardIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 ,color: 'rgb(10, 161, 221)'}} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'rgb(10, 161, 221)',
              textDecoration: 'none',
            }}
          >
            Dashboard
          </Typography>

          
          <DashboardIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: 'rgb(10, 161, 221)' }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'rgb(10, 161, 221)',
              textDecoration: 'none',
            }}
          >
             Dashboard
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ flexGrow: 0,display: 'flex', alignItems: 'center'  }}>
          <NotificationAddIcon sx={{ fontSize: 26,  marginRight: 4,color: 'black' }}  />
          <Typography variant="h6" sx={{ fontSize: 13,  marginRight: 4,color: 'black' }} >
             
              Wallet Balance
              <Typography variant="h6" sx={{ fontSize: 13,  marginRight: 4,color: 'black' }}>
              90,472.00
            </Typography>
            </Typography>
            
            <Tooltip title="Open settings">
            
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar sx={{ border:5,borderColor:'rgb(10, 161, 221)' }}alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </header>
  )
  
}

export default Header;

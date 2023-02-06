import MenuIcon from '@mui/icons-material/Menu';
import {
    AppBar,
    Box,
    Button,
    CssBaseline,
    IconButton,
    Toolbar,
    Typography,
} from '@mui/material';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NavItemsType } from '../../types/NavbarTypes';
import NavDrawer from './NavDrawer';

function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const navItems: NavItemsType[] = [
        {
            title: 'Home',
            link: '/',
        },
        {
            title: 'Dashboard',
            link: '/dashboard',
        },
        {
            title: 'Login',
            link: '/login',
        },
    ];

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" position="fixed">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component={NavLink}
                        to="/"
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'block' },
                            textDecoration: 'none',
                            color: 'white',
                        }}
                    >
                        BlogMania
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                        {navItems.map((item) => (
                            <NavLink
                                to={item.link}
                                key={item.title}
                                style={{ textDecoration: 'none' }}
                            >
                                <Button sx={{ color: 'white' }}>
                                    {item.title}
                                </Button>
                            </NavLink>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <NavDrawer
                mobileOpen={mobileOpen}
                handleDrawerToggle={handleDrawerToggle}
                navItems={navItems}
            />
        </Box>
    );
}

export default Navbar;

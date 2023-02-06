import { Box, Button, Divider, Drawer, List, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { NavItemsType } from '../../types/NavbarTypes';

interface NavDrawerProps {
    mobileOpen: boolean;
    navItems: NavItemsType[];
    handleDrawerToggle: () => void;
}

function NavDrawer(props: NavDrawerProps) {
    const { mobileOpen, handleDrawerToggle, navItems } = props;

    return (
        <Box component="nav">
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: 240,
                    },
                }}
            >
                <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ my: 2 }}>
                        BlogMania
                    </Typography>
                    <Divider />
                    <List
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 0.5,
                        }}
                    >
                        {navItems.map((item) => (
                            <NavLink
                                to={item.link}
                                key={item.title}
                                style={{ textDecoration: 'none' }}
                            >
                                <Button
                                    sx={{
                                        backgroundColor: 'white',
                                        color: 'black',
                                        fontSize: 15,
                                    }}
                                >
                                    {item.title}
                                </Button>
                            </NavLink>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
}

export default NavDrawer;

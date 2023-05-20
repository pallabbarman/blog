import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import Searchbox from 'components/Searchbox';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }} mb={8}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component={NavLink}
                        to="/"
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', sm: 'block' },
                            textDecoration: 'none',
                            color: 'white',
                        }}
                    >
                        BlogMania
                    </Typography>
                    <Searchbox />
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;

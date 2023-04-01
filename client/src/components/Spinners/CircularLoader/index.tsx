import { Box, CircularProgress } from '@mui/material';

function CircularLoader() {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{ height: '100vh' }}
        >
            <CircularProgress size={70} color="secondary" />
        </Box>
    );
}

export default CircularLoader;

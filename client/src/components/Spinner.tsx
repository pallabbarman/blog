import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

function Spinner() {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{ height: '100vh' }}
        >
            <CircularProgress size={100} color="secondary" />
        </Box>
    );
}

export default Spinner;

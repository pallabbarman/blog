import { Box, Grid } from '@mui/material';
import { lazy } from 'react';

const SingleBlog = lazy(() => import('../../components/Blog'));

function Blog() {
    return (
        <Box>
            <Grid container>
                <SingleBlog />
            </Grid>
        </Box>
    );
}

export default Blog;

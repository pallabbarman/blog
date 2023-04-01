import { Box, Grid } from '@mui/material';
import { lazy } from 'react';
import { useGetBlogsQuery } from '../../redux/features/blogs';

const BlogCard = lazy(() => import('../../components/Card'));
const CardSkeleton = lazy(
    () => import('../../components/Spinners/CardSkeleton')
);

function Home() {
    const { data: blogs, isLoading } = useGetBlogsQuery();

    return (
        <Box>
            <Grid
                container
                mt={6}
                mb={2}
                spacing={3}
                columns={{ xs: 4, sm: 8, md: 12 }}
                alignItems="center"
                justifyContent="center"
                p={2}
            >
                {isLoading ? (
                    <CardSkeleton />
                ) : (
                    blogs.teams.map((blog: any) => <BlogCard blog={blog} />)
                )}
            </Grid>
        </Box>
    );
}

export default Home;

/* eslint-disable no-underscore-dangle */
import { Box, Grid } from '@mui/material';
import { lazy } from 'react';
import { toast } from 'react-toastify';
import { useGetBlogsQuery } from '../../redux/features/blogs';
import { blogObject } from '../../types/blog';

const BlogCard = lazy(() => import('../../components/Card'));
const CardSkeleton = lazy(
    () => import('../../components/Spinners/CardSkeleton')
);

function Home() {
    const { data: blogs, isLoading, isError } = useGetBlogsQuery();

    let content = null;

    if (isLoading) {
        content = <CardSkeleton />;
    }
    if (!isLoading && isError) {
        content = toast.error('Something went wrong! Please try again!');
    }
    if (!isLoading && !isError && blogs?.length === 0) {
        content = toast.error('No videos found!');
    }
    if (!isLoading && !isError && blogs?.length > 0) {
        content = blogs.map((blog: blogObject) => (
            <BlogCard blog={blog} key={blog._id} />
        ));
    }

    return (
        <Box>
            <Grid
                container
                mb={2}
                spacing={3}
                columns={{ xs: 4, sm: 8, md: 12 }}
                alignItems="center"
                justifyContent="center"
                p={2}
            >
                {content}
            </Grid>
        </Box>
    );
}

export default Home;

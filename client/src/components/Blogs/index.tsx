import { lazy } from '@loadable/component';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import getBlogs from '../../redux/actions/blogs';
import { RootState } from '../../redux/types/root';
import { BlogTypes } from '../../types/blogsTypes';

const BlogsCard = lazy(() => import('./BlogsCard'));
const CardSkeleton = lazy(() => import('./CardSkeleton'));

function Blogs() {
    const dispatch = useDispatch();
    const { loading, blogs } = useSelector(
        (state: RootState) => state?.blogsReducer,
        shallowEqual
    );

    useEffect(() => {
        getBlogs(dispatch);
    }, [dispatch]);

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
                {loading ? (
                    <CardSkeleton />
                ) : (
                    blogs.map((blog: BlogTypes) => (
                        <BlogsCard key={blog.idTeam} blog={blog} />
                    ))
                )}
            </Grid>
        </Box>
    );
}

export default Blogs;

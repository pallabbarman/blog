import { IBlog } from 'types/blog';
import apiSlice from '../api';

const blogApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getBlogs: builder.query<IBlog[], void>({
            query: () => '/blogs',
        }),
    }),
});

export const { useGetBlogsQuery } = blogApi;

export default blogApi;

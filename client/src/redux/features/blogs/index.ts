import apiSlice from '../api';

const blogApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getBlogs: builder.query<any, void>({
            query: () => '/blogs',
        }),
    }),
});

export const { useGetBlogsQuery } = blogApi;

export default blogApi;

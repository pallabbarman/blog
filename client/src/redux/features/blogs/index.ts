import apiSlice from '../api';

const blogApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getBlogs: builder.query<any, void>({
            query: () => '/search_all_teams.php?l=English%20Premier%20League',
        }),
    }),
});

export const { useGetBlogsQuery } = blogApi;

export default blogApi;

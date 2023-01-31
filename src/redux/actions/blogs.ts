import { LOADING_BLOGS } from '../types/blogs';

const getBlogs = () => (dispatch: any) => {
    dispatch({
        type: LOADING_BLOGS,
        payload: true,
    });
};

export default getBlogs;

import axios from 'axios';
import { toast } from 'react-toastify';
import { Dispatch } from 'redux';
import { GET_BLOGS, LOADING_BLOGS } from '../types/blogs';

const loadingBlogs = (payload: boolean) => ({
    type: LOADING_BLOGS,
    payload,
});

const getBlogs = async (dispatch: Dispatch) => {
    dispatch(loadingBlogs(true));
    try {
        const response = await axios.get(
            `https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League`
        );
        console.log('response', response);
        dispatch({
            type: GET_BLOGS,
            payload: {
                blogs: response?.data?.teams ?? [],
            },
        });
        dispatch(loadingBlogs(false));
    } catch (error) {
        console.log(error);
        if (axios.isAxiosError(error)) {
            if (error?.response) {
                const message = error?.response?.data?.message;
                toast.error(message);
            } else {
                toast.error(error?.message);
            }
        }
        dispatch(loadingBlogs(false));
    }
};

export default getBlogs;

import { BlogsTypes } from '../../types/blogsTypes';
import { GET_BLOGS, LOADING_BLOGS } from '../types/blogs';
import { PayloadAction } from '../types/payload';

const initialState: BlogsTypes = {
    loading: false,
    blogs: [],
};

const blogsReducer = (
    state = initialState,
    action: PayloadAction<BlogsTypes>
) => {
    switch (action.type) {
        case LOADING_BLOGS:
            return {
                ...state,
                loading: action.payload,
            };
        case GET_BLOGS:
            return {
                ...state,
                blogs: action.payload.blogs,
            };
        default:
            return state;
    }
};

export default blogsReducer;

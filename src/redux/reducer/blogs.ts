import { BlogsTypes, LOADING_BLOGS } from '../types/blogs';
import { PayloadAction } from '../types/payload';

const initialState: BlogsTypes = {
    loading: false,
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
        default:
            return state;
    }
};

export default blogsReducer;

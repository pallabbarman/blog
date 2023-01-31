import { useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import getBlogs from '../../redux/actions/blogs';
import { RootState } from '../../redux/types/root';

function Blogs() {
    const { loading } = useSelector(
        (state: RootState) => state?.blogsReducer,
        shallowEqual
    );

    useEffect(() => {
        getBlogs();
    }, []);

    console.log(loading);
    return (
        <div>
            <h1>Blogs</h1>
        </div>
    );
}

export default Blogs;

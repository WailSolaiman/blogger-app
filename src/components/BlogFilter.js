import React from 'react';
import { Link } from 'react-router-dom';

const BlogFilter = () => {
    return (
        <div>
            <input type="text" />
            <select>
                <option value="byTitle">By Title</option>
                <option value="byDate">By Date</option>
            </select>
            <Link to="/create"><p>Add Post</p></Link>
        </div>
    );
}

export default BlogFilter;
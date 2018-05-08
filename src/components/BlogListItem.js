import React from 'react';
import { Link } from 'react-router-dom';

const BlogListItem = ({pid, title, content}) => {
    return (
        <Link to={`/edit/${pid}`}>
            <h1>{title}</h1>
            <p>{content}</p>
        </Link>
    );
}

export default BlogListItem;
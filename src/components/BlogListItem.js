import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const BlogListItem = ({pid, title, content, createdAt}) => {
    return (
        <Link className="list-item" to={`/edit/${pid}`}>
            <h1>{title}</h1>
            <p><small><strong>{moment(createdAt).format('MMMM Do, YYYY')}</strong></small></p>
            <p>{content}</p>
        </Link>
    );
}

export default BlogListItem;
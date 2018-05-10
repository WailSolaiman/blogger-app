import React from 'react';
import { connect } from 'react-redux';
import BlogListItem from './BlogListItem';
import selectPosts from '../selectors/posts';

const BlogList = (props) => (
    <div className="content-container">
        {
            props.posts.map((post) => {
                return <BlogListItem key={post.pid} {...post} />
            })
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        posts: selectPosts(state.posts, state.filters)
    };
};

export default connect(mapStateToProps)(BlogList);
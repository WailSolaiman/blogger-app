import React from 'react';
import { connect } from 'react-redux';
import BlogListItem from './BlogListItem';

const BlogList = (props) => (
    <div>
        {
            props.posts.map((post) => {
                return <BlogListItem key={post.pid} {...post} />
            })
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    };
};

export default connect(mapStateToProps)(BlogList);
import React from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { createPost } from '../actions/posts';

const onSubmit = (post) => {
    props.createPost(post);
    this.props.history.push('/dashboard');
};

const CreatePostPage = (props) => {
    return (
        <PostForm onSubmit={(post) => {
            props.createPost(post);
            props.history.push('/dashboard');
        }} />
    );
};

const mapDispatchToProps = (dispatch) => ({
    createPost: (post) => dispatch(createPost(post))
});

export default connect(undefined, mapDispatchToProps)(CreatePostPage);
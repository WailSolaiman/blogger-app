import React from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { startCreatePost } from '../actions/posts';

export const CreatePostPage = (props) => {
    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Add new Post</h1>
                </div>
            </div>
            <div className="content-container">
                <PostForm onSubmit={(post) => {
                    props.startCreatePost(post);
                    props.history.push('/dashboard');
                }} />
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    startCreatePost: (post) => dispatch(startCreatePost(post))
});

export default connect(undefined, mapDispatchToProps)(CreatePostPage);
import React from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { startEditPost, startRemovePost } from '../actions/posts';

const EditPostPage = (props) => {
    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Edit Post</h1>
                </div>
            </div>
            <div className="content-container">
                <PostForm 
                    post={props.post} 
                    onSubmit={(post) => {
                        props.startEditPost(props.match.params.pid, post);
                        props.history.push('/dashboard');
                    }}
                />
                <button 
                    className="button button--secondary"
                    onClick={() => {
                        props.startRemovePost(props.match.params.pid);
                        props.history.push('/dashboard');
                    }}
                >
                    Remove Expense
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = (state, props) => ({
    post: state.posts.find((post) => post.pid === props.match.params.pid)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditPost: (id, updates) => dispatch(startEditPost(id, updates)),
    startRemovePost: (id) => dispatch(startRemovePost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);
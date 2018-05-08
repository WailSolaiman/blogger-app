import React from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { editPost, removePost } from '../actions/posts';

const EditPostPage = (props) => {
    return (
        <div>
            <PostForm 
                post={props.post} 
                onSubmit={(post) => {
                    props.editPost(props.match.params.pid, post);
                    props.history.push('/dashboard');
                }}
            />
            <button 
                onClick={() => {
                    props.removePost(props.match.params.pid);
                    props.history.push('/dashboard');
                }}
            >
                Remove Expense
            </button>
        </div>
    );
};

const mapStateToProps = (state, props) => ({
    post: state.posts.find((post) => post.pid === props.match.params.pid)
});

const mapDispatchToProps = (dispatch, props) => ({
    editPost: (id, updates) => dispatch(editPost(id, updates)),
    removePost: (id) => dispatch(removePost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);
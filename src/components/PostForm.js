import React, { Component } from 'react';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.post ? props.post.title : '',
            content: props.post ? props.post.content : ''
        };
    };

    onChangeTitle = (event) => {
        const title = event.target.value;
        this.setState(() => ({ title }));
    };

    onChangeContent = (event) => {
        const content = event.target.value;
        this.setState(() => ({ content }));
    };

    onSubmitForm = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            title: this.state.title,
            content: this.state.content
        });
    };

    render() {
        return (
            <form onSubmit={this.onSubmitForm}>
                <input 
                    type="text" 
                    placeholder="Title" 
                    value={this.state.title}
                    onChange={this.onChangeTitle}
                />
                <textarea 
                    rows="4" 
                    cols="50" 
                    placeholder="Content"
                    value={this.state.content}
                    onChange={this.onChangeContent}
                >
                </textarea>
                <button>Save Post</button>
            </form>
        );
    };
}

export default PostForm;
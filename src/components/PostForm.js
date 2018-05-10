import React, { Component } from 'react';
import moment from 'moment';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.post ? props.post.title : '',
            content: props.post ? props.post.content : '',
            createdAt: props.post ? moment(props.post.createdAt) : moment(),
            error: ''
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
        if (!this.state.title || !this.state.content) {
            this.setState(() => ({ error: 'Please provide title and content.' }));
        }
        else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                title: this.state.title,
                content: this.state.content,
                createdAt: this.state.createdAt.valueOf()
            });
        }
    };

    render() {
        return (
            <form className="form" onSubmit={this.onSubmitForm}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input 
                    type="text" 
                    className="text-input"
                    placeholder="Title" 
                    value={this.state.title}
                    onChange={this.onChangeTitle}
                />
                <textarea 
                    rows="20" 
                    cols="50" 
                    className="textarea"
                    placeholder="Content"
                    value={this.state.content}
                    onChange={this.onChangeContent}
                >
                </textarea>
                <button className="button">Save Post</button>
            </form>
        );
    };
}

export default PostForm;
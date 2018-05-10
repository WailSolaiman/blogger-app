import React from 'react';
import { shallow } from 'enzyme';
import { CreatePostPage }  from '../../components/CreatePostPage';
import posts from '../fixtures/posts';

let createPost, history, wrapper;

beforeEach(() => {
    createPost = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<CreatePostPage createPost={createPost} history={history} />);
});

test('should render component CreatePostPage succefully', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle submit corectly', () => {
    wrapper.find('PostForm').prop('onSubmit')(posts[1]);
    expect(history.push).toHaveBeenLastCalledWith('/dashboard');
    expect(createPost).toHaveBeenLastCalledWith(posts[1]);
});
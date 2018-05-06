import uuid from 'uuid';
//create post
export const createPost = ({ title = '', content = '' } = {}) => ({
    type: 'CREATE_POST',
    post: {
        pid: uuid(),
        title,
        content
    }
});
//edit post
export const editPost = (pid, update) => ({
    type: 'EDIT_POST',
    pid,
    update
});
//remove post
export const removePost = (pid) => ({
    type: 'REMOVE_POST',
    pid
});
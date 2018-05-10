import database from '../firebase/firebase';

//create post
export const createPost = (post) => ({
    type: 'CREATE_POST',
    post
});

export const startCreatePost = (postData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const { title = '', content= '', createdAt = 0 } = postData;
        const post = { title, content, createdAt };
        return database.ref(`users/${uid}/posts`).push(post).then((ref) => {
            dispatch(createPost({
              pid: ref.key,
              ...post
            }));
        });
    };
};
//edit post
export const editPost = (pid, updates) => ({
    type: 'EDIT_POST',
    pid,
    updates
});

export const startEditPost = (pid, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/posts/${pid}`).update(updates).then(() => {
            dispatch(editPost(pid, updates));
        });
    };
};
//remove post
export const removePost = (pid) => ({
    type: 'REMOVE_POST',
    pid
});

export const startRemovePost = (pid) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/posts/${pid}`).remove().then(() => {
            dispatch(removePost(pid));
        });
    };
};
// set posts
export const setPosts = (posts) => ({
    type: 'SET_POSTS',
    posts
});

export const startSetPosts = (posts) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/posts`).once('value').then((snapshot) => {
            const posts = [];
            snapshot.forEach((childSnapshot) => {
              posts.push({
                pid: childSnapshot.key,
                ...childSnapshot.val()
              });
            });
            dispatch(setPosts(posts));
        });
    };
};
export default (state = [], action) => {
    switch(action.type) {
        case 'CREATE_POST':
            return [
                ...state,
                action.post
            ];
        case 'EDIT_POST':
            return state.map((post) => {
                if (post.pid === action.pid) {
                    return {
                        ...post,
                        ...action.updates
                    };
                }
                else {
                    return post;
                }
            });
        case 'REMOVE_POST':
            return state.filter((post) => post.pid !== action.pid);
        case 'SET_POSTS':
            return action.posts;
        default:
            return state;
    }
};
const posts = [
    {   
        pid: 12452478,
        title: 'Learn React 16',
        content: 'React 16 - The Complete Guide (incl. React Router 4 & Redux)'
    },
    {
        pid: 86454125,
        title: 'ES6 - EcmaScript 6',
        content: 'ECMAScript 6 — New Features: Overview & Comparison'
    }
];

export default (state = posts, action) => {
    switch(action.type) {
        case 'CREATE_POST':
            return [
                ...state,
                action.post
            ];
        case 'EDIT_POST':
            return 2;
        case 'REMOVE_POST':
            return 3;
        default:
            return state;
    }
};
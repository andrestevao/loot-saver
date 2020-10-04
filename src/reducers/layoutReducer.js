
export default (state = {
    title: ""
}, action) => {
    switch (action.type) {
        case 'CHANGE_PAGE_TITLE':
            return {
                pageTitle: action.title
            };

        default:
            return state;
    }
}

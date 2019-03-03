const initialState = {
    listings: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_LISTINGS':
            return Object.assign({}, state, {
                listings: action.listings
            });
        default:
            return state;
    }
};

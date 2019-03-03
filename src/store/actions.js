import listings from './listings.json';

export function fetchListings() {
    return dispatch => {
        Promise.resolve(listings)
            .then((listings) => {
                dispatch({
                    type: 'FETCH_LISTINGS',
                    listings
                })
            })
    };
}

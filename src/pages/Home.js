import { connect } from 'react-redux';
import ListingList from '../components/ListingList';
import { fetchListings } from '../store/actions';

const mapStateToProps = (state) => {
    return {
        listings: state.listings
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchListings: () => {
            dispatch(fetchListings())
        }
    };
};

const Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListingList);

export default Home;

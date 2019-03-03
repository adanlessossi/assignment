import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Pagination } from 'react-bootstrap';
import './ListingList.css';

class ListingList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			similar: false,
			currentPage: 1,
			listingsPerPage: 3,
			listingIds: []
		};
		this.handleClick = this.handleClick.bind(this);
	}
	componentDidMount() {
		this.props.fetchListings();
		fetch('https://properties-34748.firebaseio.com/similar/1.json')
			.then(response => response.json())
			.then(data => this.setState({ listingIds: data }));
	}

	getSimilarList(listings) {
		const similarList = [];
		const listValues = listings.values();
		const listingIds = this.state.listingIds;
		for (const item of listValues) {
			for (const id of listingIds) {
				if (id === item.id) {
					similarList.push(item);
				}
			}
		}
		return similarList;
	}

	similarListHandler = () => {
		const similarState = this.state.similar;
		this.setState({ similar: !similarState });
	};

	handleClick = event => {
		this.setState({
			currentPage: Number(event.target.id)
		});
	};

	handlePageChange = pageNumber => {
		console.log(`active page is ${pageNumber}`);
		this.setState({ activePage: pageNumber });
	};

	getListingImage = listing => {
		return listing.images ? (
			<img src={listing.images[0]} alt={listing.title} />
		) : (
			''
		);
	};

	getListings = () => {
		const listing = this.props.listings;
		if (this.state.similar) {
			return this.getSimilarList(listing);
		}
		return listing;
	};

	getListingList = () => {
		const listings = this.getListings();
		const { currentPage, listingsPerPage } = this.state;
		const indexOfLastlisting = currentPage * listingsPerPage;
		const indexOfFirstlisting = indexOfLastlisting - listingsPerPage;
		const currentlistings = listings.slice(
			indexOfFirstlisting,
			indexOfLastlisting
		);

		return currentlistings.map((listing, key) => {
			return (
				<li className='listing' key={key}>
					<div className='img'>{this.getListingImage(listing)}</div>
					<p>
						<Link
							to={{
								pathname: `/listing/${listing.id}`,
								state: { listing: listing }
							}}
						>
							{listing.title}
						</Link>
					</p>
				</li>
			);
		});
	};

	render() {
		const pageNumbers = [];
		for (
			let i = 1;
			i <= Math.ceil(this.props.listings.length / this.state.listingsPerPage);
			i++
		) {
			pageNumbers.push(i);
		}

		const renderPageNumbers = pageNumbers.map(number => {
			return (
				<li key={number} id={number} onClick={this.handleClick}>
					{number}
				</li>
			);
		});

		return (
			<div>
				<div>
					<button
						className='similar-list-btn'
						onClick={this.similarListHandler}
					>
						Switch Similar list
					</button>
				</div>

				<div>
					<ul className='listing-list'>{this.getListingList()}</ul>
				</div>
				<div className='pagination'>
					<Pagination size='lg' />
					<ul className='page-numbers'>{renderPageNumbers}</ul>
				</div>
			</div>
		);
	}
}

export default ListingList;

import React, { Component } from "react";
import Parser from "html-react-parser";
import ToDo3 from "../todos/ToDo3";

import "./DetailPage.css";

class DetailPage extends Component {
	getListingPictures(listing) {
		const images = listing.images;
		if (images) {
			return images.map((image, key) => {
				return (
					<div className="listing-image" key={key}>
						<img alt={listing.title} src={image} />
					</div>
				);
			});
		}
	}

	getListingDescription(listing) {
		const description = listing.description;
		if (description) {
			return Parser(description);
		}
		return null;
	}
	render() {
		const listing = this.props.location.state.listing;
		return (
			<div className="detail-listing">
				<h1>
					Listing #{this.props.match.params.id} - {listing.title}
				</h1>
				<div>{this.getListingPictures(listing)}</div>
				<p className="listing-title">{listing.title}</p>
				<p className="listing-desctiption">
					{this.getListingDescription(listing)}
				</p>
				<ToDo3 />
			</div>
		);
	}
}

export default DetailPage;

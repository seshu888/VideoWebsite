import React from 'react';
import './cards.css';
import CardItem from './CardItem';

function Cards() {
	return (
		<div className="cards">
			<h1>Check out these EPIC Destinations!</h1>
			<div className="cards-container">
				<div className="cards-wrapper">
					<ul className="cards-items">
						<li className="card-item-container">
							<img src={require('../images/img-9.jpg')} className="card-img" />
							<div className="content-section">
								<p className="para">Travel through the great places in thsi workd </p>
							</div>
						</li>
						<li className="card-item-container">
							<img src={require('../images/img-9.jpg')} className="card-img" />
							<div className="content-section">
								<p className="para">Travel through the great places in thsi workd </p>
							</div>
						</li>
					</ul>
					<ul className="cards-items">
						<li className="card-item-container">
							<img src={require('../images/img-5.jpg')} className="card-img" />
							<div className="content-section">
								<p className="para">Travel through the great places in thsi workd </p>
							</div>
						</li>
						<li className="card-item-container">
							<img src={require('../images/img-3.jpg')} className="card-img" />
							<div className="content-section">
								<p className="para">Travel through the great places in thsi workd </p>
							</div>
						</li>
						<li className="card-item-container">
							<img src={require('../images/img-4.jpg')} className="card-img" />
							<div className="content-section">
								<p className="para">Travel through the great places in thsi workd </p>
							</div>
						</li>
					</ul>
					<ul className="cards-items" />
				</div>
			</div>
		</div>
	);
}

export default Cards;

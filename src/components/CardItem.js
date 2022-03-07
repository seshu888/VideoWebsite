import React from 'react';
import { NavLink } from 'react-router-dom';
import './cards.css';
const CardItem = (props) => {
	return (
		<div>
			<li className="cards-item" >
				<NavLink className="cards-item-link" to={props.path}>
					<div className="cards-item-pic-container" >
						<img className="cards-item-img" alt="Travel Image" src={props.src} />
				
					</div>
					<div className="cards-item-info">
						<h5 className="cards-item-text">{props.text}</h5>
					</div>
				</NavLink>
			</li>
		</div>
	);
};
export default CardItem;

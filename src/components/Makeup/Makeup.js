import React from 'react'
import './Makeup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Makeup = (props) => {
	
	const { name, brand, price, image_link, rating,
 } = props.makeup;
	return (
<div >
	
	
	
	
	<div className="card  ">
		<img src={image_link} className="card-img-top" alt="..." />
		<div className="card-body bg-secondary  w-100 px-4">
			<h5 className="card-title text-light">{name}</h5>
			<p className="card-text">Brand: {brand}</p>
			<p className="card-text">Price: ${price}</p>
			<p className="card-text">Rating: {rating}</p>
		</div>
		<button className="cart-btn bg-dark btn  w-100 rounded-0" onClick={() => props.handleAddToCart(props.makeup)}>
		Add to Cart 
		 <FontAwesomeIcon icon ={faShoppingCart}></FontAwesomeIcon>
		</button>
	</div>
</div>


	)
}

export default Makeup
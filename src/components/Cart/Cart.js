import React from 'react'
import './Cart.css';
const Cart = ({cart, handleRemoveFromCart }) => {

	let total = 0;
	for(const makeup of cart){
		total = total + parseFloat(makeup.price);
	}

	const tax = (total * 0.1).toFixed(2);
	const grandTotal = parseFloat(total) + parseFloat(tax);


	let message;
	if(cart.length === 0){
		message = <p>Please buy at least one item!!!</p>
	}
	else {
		message = <p>Thanks for buying!!!</p>
	}
	

	return (
<div className="sticky">
	<div className="container py-5 d-flex justify-content-center align-items-center flex-column">
		<h1 className={`fs-4 fw-bold p-2 rounded ${cart.length === 0 ? 'bg-info ' : 'bg-light text-dark'}`}>Order Summary</h1>
		<p className="fs-4">Selected Items:{cart.length}</p>
		<p className="fs-4">Total Price:${total.toFixed(2)}</p>
		<p className="fs-4">Total Shipping Charge: </p>
		<p className="fs-4">Tax: ${tax}</p>
		<p className="fs-4">Grand Total: ${grandTotal.toFixed(2)}</p>
		<button className="btn btn-light btn-lg text-dark" type="button">Clear Cart</button>
	</div>
	<div class="container py-5 d-flex justify-content-center align-items-center flex-column">
		
	{
		cart.map(mkup => 
			<p className="fs-4"
			key={mkup.id}
			>
			 {mkup.name} 
			 <button className="btn btn-light" onClick={() => handleRemoveFromCart(mkup)}>X</button>
			</p>)
	}
	{
		message
	}
	</div>
</div>
	)
}

export default Cart
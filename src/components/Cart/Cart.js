import React from 'react'

const Cart = ({cart, handleRemoveFromCart }) => {

	let message;
	if(cart.length === 0){
		message = <p>Please buy at least one item!!!</p>
	}
	else {
		message = <p>Thanks for buying!!!</p>
	}

	return (
<div>
	<div className="container py-5 d-flex justify-content-center align-items-center flex-column">
		<h1 className={`fs-4 fw-bold p-2 rounded ${cart.length === 0 ? 'bg-info' : 'bg-primary'}`}>Order Summary</h1>
		<p className="fs-4">Selected Items:{cart.length}</p>
		<p className="fs-4">Total Price:</p>
		<p className="fs-4">Total Shipping Charge: </p>
		<p className="fs-4">Tax:</p>
		<p className="fs-4">Grand Total:</p>
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
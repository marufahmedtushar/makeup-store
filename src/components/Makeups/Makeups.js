import React from 'react'
import {useEffect, useState} from 'react';
import Makeup from '../../components/Makeup/Makeup';
import Cart from '../../components/Cart/Cart';
import { addToDb } from '../../utilities/utilities';
import './Makeups.css';
const Makeups = () => {
const [makeups, setMakeups] = useState([]);
const [cart, setCart] = useState([]);
useEffect(() => {
fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
.then(res => res.json())
.then(data => setMakeups(data))
}, []);





const handleAddToCart = (makeup) =>{
addToDb(makeup.id);
const exists = cart.find(mk => mk.id === makeup.id);
if(exists){
	alert('makeup already added');
}
else{
	const newCart = [...cart, makeup];
	setCart(newCart);
	
}
}

const handleRemoveFromCart = (makeup) =>{
	const remaining = cart.filter(mk => mk.id !== makeup.id);
	setCart(remaining);
}




return (

<div className="makeup-container  p-4">
	<div className="">
		<h1 className="text-center bg-dark text-light p-2 rounded">List of Makeup Product</h1>
		
		<div  className="makeups">
			{
			makeups.map(makeup => <Makeup  makeup={makeup} handleAddToCart={handleAddToCart}
			 ></Makeup>)
			}
		</div>
	</div>
	<div className="p-5 mb-4 bg-dark rounded-3 text-light">
		<Cart cart={cart}
		handleRemoveFromCart={handleRemoveFromCart}
		></Cart>
	</div>
	
	
</div>
)
}
export default Makeups
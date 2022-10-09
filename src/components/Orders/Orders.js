import React from 'react'
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
	const  makeups = useLoaderData();
	return (
		<div>
			<h3>This is from Orders page:{makeups.length}</h3>
		</div>
	)
}

export default Orders
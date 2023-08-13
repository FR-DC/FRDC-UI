import React from 'react';
import Card from '../Card'; 

// import useGoogleStorage from "../../hooks/useGoogleStorage";


export default function CardGallery() {
	// const cardData =  useGoogleStorage(); 
  // console.log(cardData)
	return (
		<div>
		<h1 className={"decoration-neutral-800"}>Card Gallery</h1>
		<Card url="https://images.unsplash.com/photo-1691414061225-b9a85b1027ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
			description="test" title="test_title" upvotes={0} downvotes={0}></Card>
		</div>
	)
}


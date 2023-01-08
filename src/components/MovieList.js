import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import no from './../data/noImg.jpg';
import Box from 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'bootstrap/dist/css/bootstrap.min.css';
import Typography from 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'bootstrap/dist/css/bootstrap.min.css';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;	  

	return (
		<>
			{props.movies.map((movie, index) => (
				/** 
				 * image-container = class name (for css)
				 * d-flex = create a simple flexbox container 
				 * 			(expands items to fill available free space or shrinks them to prevent overflow)
				 * justify-content-start = set the items to show from page start
				 * m-3 = margin between posters set to 3 (all directions)
				 */
				<div className='image-container d-flex justify-content-start m-3'>
					 {movie.Poster === "N/A" ? (
				<img src={no} style={{width: 200,height:200}} />) : (<img src={movie.Poster} alt='movie' style={{width: 240,height: 380}}/>)} {/** Set the movie poster */}
				<div className='overlay d-flex align-items-center justify-content-center pb-5'>
				  {movie.Title} ({movie.Year})
					</div>
					
				{/* <div className='overlay d-flex align-items-center justify-content-center pt-3' 
						style={{backgroundColor:"rgba(0,0,0,0.4)",
							color:"white",
							height:20,
							alignContent:"center",
							justifyContent:"center",
							marginBottom:364,
							fontfamily: 'Century Gothic',
							fontSize:15}}>
					Press for details</div> */}
					
					<div
						onClick={() => props.handleFavouritesClick(movie)}
						/** Taking handleFavouritesClick function from props and adding it to 
							*	an onClick property in the overlay 
							* passing the current movie the map function is currently on to the handleFavouritesClick function */
						className='overlay d-flex align-items-center justify-content-center'>
							{/** 
							 * overlay = class name (for css)
							 * d-flex = create a simple flexbox container
							 * 			(expands items to fill available free space or shrinks them to prevent overflow)
							 * align-items-center = set the favoirtes feature be centered (the cross axis)
							 * justify-content-center = set the favoirtes feature be centered (the main axis)
							 */}
							 
						<FavouriteComponent /> {/** Puts Heart Emoji on Poster */}
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;
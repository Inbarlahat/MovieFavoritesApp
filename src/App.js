import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';
import Header from './components/Header';
import logo from './data/logo.png';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [favourites, setFavourites] = useState([]);
	const [searchValue, setSearchValue] = useState('');


	/** Fetch the movies from the API */
	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=e6f034a9`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	/** useEffect to get favourites
	 * from local storage when the app loads, 
	 * and setting this to state */
	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	/** To retrive the movies iterate over 
	 * localStorage items and then convert 
	 * the movie to JSON object */
	useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-my-app-favourites')
		);

		if (movieFavourites) {
			setFavourites(movieFavourites);
		}
	}, []);

	/** Function takes a list of items 
	 * and saves them to local storage 
	 * given the key "react-my-app-favourites" (from line 37) */
	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-my-app-favourites', JSON.stringify(items));
	};

	/** Add a Favourite Movie */
	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	/** Remove a Favourite Movie */
	const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	return (
		/** Site's Title */
				/** 
				 * container = used to contain, pad, and center the content 
				 * container-fluid  = width: 100% at all breakpoints
				 * movie-app = 
				 */
		<div className='container-fluid movie-app'>
			    <Header heading='' />
				<div className='d-flex justify-content-center align-content-center mb-3 mt-3'>  {/** centers the search bar */}
				<img src={logo} alight-content='center' style={{height: 200}}/><p/></div>
				<Header heading='' />
				<div className='d-flex justify-content-center mb-1'>  {/** centers the search bar */}
				</div>
        		{/*<h1 id="header" >IMDB</h1>
        		<h2 id="header2">Inbar and liav's Movies at Dev cluB</h2>*/}
				<div className='d-flex justify-content-center'>  {/** centers the search bar */}
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
				</div>
			
			{/** Movie's Poster Roller */}
				{/** row = puts objects inside <div> in one new row */}
			<div className='row'>
				<MovieList
					movies={movies}
					handleFavouritesClick={addFavouriteMovie}
					favouriteComponent={AddFavourites}
				/>
			</div>

			{/** Favorites Title */}
				{/** 
					* row = puts objects inside <div> in one new row
					* d-flex = create a simple flexbox container 
					* 			(expands items to fill available free space or shrinks them to prevent overflow)
					* justify-content-center = set the favoirtes feature be centered (the main axis)
					* mt-4 = margin at top set to 4
					* mb-4 = margin at bottom set to 4
					*/}
			<div className='row d-flex justify-content-center mt-4 mb-4'>
				   <h4 id='myFav'>My Favorites</h4>
				   </div>

			{/** Favorites' Poster Roller */}
				{/** row = puts objects inside <div> in one new row */}
			<div className='row'>
				<MovieList
					movies={favourites}
					handleFavouritesClick={removeFavouriteMovie}
					favouriteComponent={RemoveFavourites}
				/>
			</div>
		</div>
		
	);
};

export default App;
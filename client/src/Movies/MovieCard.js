import React from 'react';

const MovieCard = props => {
	const { title, director, metascore, stars } = props.movie;
 	 return(
 	 	<div className="movie-card">
 	 		<h2>{title}</h2>
 	 		<div className="movie-director">
 	 			Director: <em>{director}</em>
 	 		</div>
 	 		<div className="movie-metascore">
 	 			Director: <strong>{metascore}</strong>
 	 		</div>
 	 		<h3>Actors</h3>
 	 		{stars.map(star => (
 	 			<div key={star} className="movie-star">
 	 				{star}
 	 			</div>
 	 		))}
 	 		<div className="save-btn">Save</div>
 	 	</div>
 	 );
};

export default MovieCard;

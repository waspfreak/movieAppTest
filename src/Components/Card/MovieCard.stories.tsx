import React from 'react';

import {MovieCard} from './MovieCard';

export default {
	title: 'Example/Card',
	component: MovieCard,
};

const Template = (args) => <MovieCard {...args} />;

export const ExampleMovieCard = Template.bind({});
ExampleMovieCard.args = {
	image: 'http://image.tmdb.org/t/p/w500/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg',
	movieId: 'movie-1',
	originalTitle: 'Title Movie',
	releaseDate: '2007',
	voteAverage: '8',
	clickable: true,
};

import React from 'react';

import {MovieWall} from './MovieWall';

export default {
	title: 'Example/MovieWall',
	component: MovieWall,
};

const Template = (args) => <MovieWall {...args} />;

export const ExampleMovieWall = Template.bind({});
ExampleMovieWall.args = {};

import React from 'react';

import { MovieDetails } from './MovieDetails';

export default {
  title: 'Example/MovieDetails',
  component: MovieDetails,
};

const Template = (args) => <MovieDetails {...args} />;

export const MovieDetailsExample = Template.bind({});
MovieDetailsExample.args = {
  detailTitle: "Movie Title",
  posterPath: "http://image.tmdb.org/t/p/w500/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg",
  modalOverview: "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
  voteAverage: 22,
};

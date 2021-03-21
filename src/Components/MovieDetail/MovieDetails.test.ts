import {snapshotTestFactory} from '../../utils/snapshotTestFactory';
//
import {MovieDetails, MovieDetailsProps} from './MovieDetails';
const props: MovieDetailsProps[] = [
	{
	detailTitle: "Movie Title",
	posterPath: "/image/example.jpg",
	modalOverview: "Overview of movie",
	voteAverage: 55,
	},
];
snapshotTestFactory(MovieDetails, props);

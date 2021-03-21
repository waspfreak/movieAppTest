import {snapshotTestFactory} from '../../utils/snapshotTestFactory';
//
import {MovieCard, MovieCardProps} from './MovieCard';
const props: MovieCardProps[] = [
	{
		image: 'http://image.tmdb.org/t/p/w500/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg',
		movieId: 16,
		clickable: true,
		originalTitle: 'Movie Original title',
		releaseDate: '2001, January 1',
		voteAverage: 55,
		overview: 'movie description'
	},
];
snapshotTestFactory(MovieCard, props);

import {snapshotTestFactory} from '../../utils/snapshotTestFactory';
//
import {Footer, FooterProps} from './Footer';
const props: FooterProps[] = [
	{
		posterPath:
			'http://image.tmdb.org/t/p/w500/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg',
		originalTitle: 'Movie Title',
	},
];
snapshotTestFactory(Footer, props);

import {snapshotTestFactory} from '../../utils/snapshotTestFactory';
//
import {MovieWall, MovieWallProps} from './MovieWall';
const props: MovieWallProps[] = [
	{
	header: "Title of your wall",
	children: "any component you need",
	},
];
snapshotTestFactory(MovieWall, props);

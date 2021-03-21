import {snapshotTestFactory} from '../../utils/snapshotTestFactory';
//
import {ProgressBar, ProgressBarProps} from './ProgressBar';
const props: ProgressBarProps[] = [
	{
		size: 80,
		progress: 55,
		strokeWidth: 4,
		circleOneStroke: '#3c0a0adb',
		circleTwoStroke: '#111',
	},
];
snapshotTestFactory(ProgressBar, props);

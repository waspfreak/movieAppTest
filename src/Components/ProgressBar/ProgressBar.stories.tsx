import React from 'react';

import {ProgressBar} from './ProgressBar';

export default {
	title: 'Example/ProgressBar',
	component: ProgressBar,
};

const Template = (args) => <ProgressBar {...args} />;

export const ProgressBarExample = Template.bind({});
ProgressBarExample.args = {
	progress: '58',
	size: '80',
	strokeWidth: '8',
	circleOneStroke: '#3c0a0adb',
	circleTwoStroke: 'red',
};

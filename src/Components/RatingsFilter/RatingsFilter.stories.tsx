import React from 'react';

import {RatingsFilter} from './RatingsFilter';

export default {
	title: 'Example/RatingsFilter',
	component: RatingsFilter,
};

const Template = (args) => <RatingsFilter {...args} />;

export const RatingsFilterExample = Template.bind({});
RatingsFilterExample.args = {};

import React from 'react';

import {Home} from './Home';

export default {
	title: 'Example/Home',
	component: Home,
};

const Template = (args) => <Home {...args} />;

export const HomePage = Template.bind({});
HomePage.args = {};

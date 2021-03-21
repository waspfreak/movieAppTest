import React from 'react';

import { Header } from './Header';

export default {
	title: 'Example/Header',
	component: Header,
};

const Template = (args) => <Header {...args} />;

export const HeaderExample = Template.bind({});
HeaderExample.args = {
	title: "App Movie Title"
};

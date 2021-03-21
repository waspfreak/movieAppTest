import React from 'react';

import {Hero} from './Hero';

export default {
	title: 'Example/Hero',
	component: Hero,
};

const Template = (args) => <Hero {...args} />;

export const HeroExample = Template.bind({});
HeroExample.args = {};

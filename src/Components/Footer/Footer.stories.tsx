import React from 'react';

import {Footer} from './Footer';

export default {
	title: 'Example/Footer',
	component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const FooterExample = Template.bind({});
FooterExample.args = {};

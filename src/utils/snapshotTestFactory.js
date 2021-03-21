import {cleanup, render} from '@testing-library/react';
import React from 'react';

/**
 *
 * Sets up snapshot tests in a standard way and avoids repeating boiler plate
 */
export function snapshotTestFactory(Component: any, properties: any) {
	/**
	 * Re-usable it block
	 */
	const itBlock = (props: any) => {
		it('should match snapshot', () => {
			const {container} = render(<Component {...props} />);
			expect(container).toMatchSnapshot();
		});
	};

	/**
	 * Re-usable describe block
	 */
	describe(`${Component.name}`, () => {
		/**
		 * Clean up any mock functions that might be in props
		 */
		afterEach(() => {
			jest.clearAllMocks();
			cleanup();
		});

		/**
		 * If its an array of props then iterate them into seperate it blocks
		 */
		if (Array.isArray(properties)) {
			properties.forEach((props) => {
				itBlock(props);
			});
		} else {
			itBlock(properties);
		}
	});
}

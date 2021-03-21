import React, { useState, useRef } from 'react';
import { StyledSearchBar, StyledSearchBarContent } from './style';
import RatingsFilter from '../RatingsFilter/RatingsFilter';
import { Search } from '@styled-icons/boxicons-regular';

export interface SearchBarProps {
	callback: any;
}

export const SearchBar: React.FC<SearchBarProps> = ({
	callback,
	...props
}) => {

	const [state, setState] = useState('');
	const timeOut: React.MutableRefObject<null> = useRef(null);

	const doSearch = (event: any) => {
		const { value } = event.target;
		clearTimeout(timeOut.current);
		setState(value);
		timeOut.current = setTimeout(() => {
			callback(value);
		}, 500);
	};

	return (
		<>
			<StyledSearchBar {...props}>
				<StyledSearchBarContent>
					<Search className='icon' />
					<input
						type='text'
						placeholder='search keywords...'
						onChange={doSearch}
						value={state}
					/>
				</StyledSearchBarContent>
				{/* Only show RatingsFilter if is  not search mode */}
				{state === '' && <RatingsFilter />}
			</StyledSearchBar>
		</>
	);
};


export default SearchBar;

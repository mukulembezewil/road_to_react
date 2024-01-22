/* eslint-disable react/prop-types */
import * as React from 'react';

const useStorageState = (key, initialState) => {
	const [value, setValue] = React.useState(
		localStorage.getItem(key) || initialState
	);

	React.useEffect(() => {
		localStorage.setItem(key, value);
	}, [value, key]);

	return [value, setValue];
};

const App = () => {
	const stories = [
		{
			title: 'React',
			url: 'http://reactjs.org',
			author: 'Mukulembeze Amy',
			num_comments: 3,
			points: 4,
			objectID: 0,
		},
		{
			title: 'Redux',
			url: 'http://redux.js.org',
			author: 'Gov. Oz Luke Mukulembeze',
			num_comments: 7,
			points: 5,
			objectID: 1,
		},
		{
			title: 'Python',
			url: 'http://python.org',
			author: 'Mukulembeze Wilfred',
			num_comments: 12,
			points: 9,
			objectID: 2,
		},
	];

	const [searchTerm, setSearchTerm] = useStorageState('search', 'React');

	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
	};

	const searchedStories = stories.filter((story) =>
		story.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div>
			<h1>MUKULEMBEZE &apos;s HACKING STORIES</h1>

			<InputWithLabel
				id="search"
				value={searchTerm}
				isFocused
				onInputChange={handleSearch}
			>
				<strong>Search:</strong>
			</InputWithLabel>

			<hr />

			<List list={searchedStories} />
		</div>
	);
};

// eslint-disable-next-line react/prop-types
const InputWithLabel = ({
	id,
	value,
	type = 'text',
	onInputChange,
	isFocused,
	children,
}) => {
	const inputRef = React.useRef();

	React.useEffect(() => {
		if (isFocused && inputRef.current) {
			inputRef.current.focus();
		}
	}, [isFocused]);
	return (
		<>
			<label htmlFor={id}>{children}</label>
			&nbsp;
			<input
				ref={inputRef}
				id={id}
				type={type}
				value={value}
				autoFocus={isFocused}
				onChange={onInputChange}
			/>
		</>
	);
};

const List = ({ list }) => (
	<ul>
		{list.map((item) => (
			<Item
				key={item.objectID}
				item={item}
			/>
		))}
	</ul>
);

const Item = ({ item }) => (
	<li>
		<span>
			<a href={item.url}>{item.title}</a>
		</span>
		<span>{item.author}</span>
		<span>{item.num_comments}</span>
		<span>{item.points}</span>
	</li>
);

export default App;

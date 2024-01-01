import * as React from 'react';
import { useState, useEffect } from 'react';

const App = () => {
	const stories = [
		{
			title: 'React',
			url: 'https://reactjs.org/',
			author: 'Jordan Walke',
			num_comments: 3,
			points: 4,
			objectID: 0,
		},
		{
			title: 'Redux',
			url: 'https://redux.js.org/',
			author: 'Dan Abramov, Andrew Clark',
			num_comments: 2,
			points: 5,
			objectID: 1,
		},
		{
			title: 'SpicyJS',
			url: 'http://spices.com',
			author: 'Mukulembeze Wilfred',
			num_comments: 800,
			points: 5,
			objectID: 2,
		},
	];

	const [searchTerm, setSearchTerm] = useState(
		localStorage.getItem('search') || 'React'
	);

	useEffect(() => {
		localStorage.setItem('search', searchTerm);
	}, [searchTerm]);

	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
	};

	const searchedStories = stories.filter((story) =>
		story.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div>
			<h1>My Hacker Stories</h1>

			<Search
				onSearch={handleSearch}
				search={searchTerm}
			/>

			<hr />

			<List list={searchedStories} />
		</div>
	);
};

const Search = (props) => {
	const { search, onSearch } = props;
	return (
		<div>
			<label htmlFor="search">Search: </label>
			<input
				id="search"
				type="text"
				value={search}
				onChange={onSearch}
			/>

			<p>
				Searching for <strong>{props.search}</strong>.
			</p>
		</div>
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

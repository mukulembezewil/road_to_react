import * as React from 'react';
import { useState } from 'react';

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

	const [searchTerm, setSearchTerm] = useState('');

	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
	};
	let moose = searchTerm;

	const searchedStories = stories.filter((story) =>
		story.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div>
			<h1>My Hacker Stories</h1>

			<Search
				onSearch={handleSearch}
				papa={moose}
			/>

			<hr />

			<List anything={searchedStories} />
		</div>
	);
};

const Search = (props) => {
	return (
		<div>
			<label htmlFor="search">Search: </label>
			<input
				id="search"
				type="text"
				onChange={props.onSearch}
			/>

			<p>
				Searching for <strong>{props.papa}</strong>.
			</p>
		</div>
	);
};

const List = (props) => (
	<ul>
		{props.anything.map((item) => (
			<Item
				key={item.objectID}
				item={item}
			/>
		))}
	</ul>
);

const Item = (props) => (
	<li>
		<span>
			<a href={props.item.url}>{props.item.title}</a>
		</span>
		<span>{props.item.author}</span>
		<span>{props.item.num_comments}</span>
		<span>{props.item.points}</span>
	</li>
);

export default App;

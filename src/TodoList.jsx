import * as React from 'react';
import { useState, useEffect } from 'react';

const Todo = () => {
	// const list = [];

	const [task, setTask] = useState('');
	const [item, setItem] = useState([]);

	useEffect(() => {
		const newList = JSON.parse(localStorage.getItem('mylist')); // I've retrieved list and parsed it to array
		newList.push(task);
		localStorage.setItem('mylist', JSON.stringify(newList));
	}, [task]);

	const handleInputTask = (event) => {
		setTask(event.target.value);
	};

	const handleAddTask = (event) => {
		const updatedItems = [...item, task]; // Create a new array with the updated task
		setItem(updatedItems); // Update the state with the new array
		localStorage.setItem('mylist', JSON.stringify(updatedItems));
		console.log(updatedItems);
	};

	const myNewListString = localStorage.getItem('mylist');
	const myNewList = JSON.parse(myNewListString);

	return (
		<>
			<p>Todo List</p>
			<label htmlFor="newitem">ToDo LIST: </label>
			<br />
			<input
				id="newitem"
				type="text"
				// value={search}
				onBlur={handleInputTask}
			/>
			<button
				type="button"
				onClick={handleAddTask}
			>
				Add task
			</button>

			<hr />

			<ul>
				{
					<ul>
						{myNewList && myNewList.map((item, index) => <li key={index}>{item}</li>)}
					</ul>
				}
			</ul>
		</>
	);
};
export default Todo;

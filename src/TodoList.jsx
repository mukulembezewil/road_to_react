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
		setItem(item.push(task));
		localStorage.setItem('mylist', JSON.stringify(item));
	};

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
		</>
	);
};
export default Todo;

import * as React from 'react';
import { useState, useEffect } from 'react';

const Todo = () => {
	const [task, setTask] = useState('');
	const [item, setItem] = useState([]);

	useEffect(() => {
		const myNewListString = localStorage.getItem('mylist');
		const newList = myNewListString ? JSON.parse(myNewListString) : [];
		newList.push(task);
		localStorage.setItem('mylist', JSON.stringify(newList));
	}, [task]);

	const handleInputTask = (event) => {
		setTask(event.target.value);
	};

	const handleAddTask = (event) => {
		const updatedItems = [...item, task];
		setItem(updatedItems);
		localStorage.setItem('mylist', JSON.stringify(updatedItems));
		console.log(updatedItems);
	};

	const myNewListString = localStorage.getItem('mylist');
	const myNewList = JSON.parse(myNewListString);

	const handleDone = (index) => {
		// Handle task completion or removal
		// For example, you could remove the task from the list
		const updatedList = [...myNewList];
		updatedList.splice(index, 1);
		localStorage.setItem('mylist', JSON.stringify(updatedList));
		setItem(updatedList);
	};

	return (
		<>
			<p>Todo List</p>
			<label htmlFor="newitem">ToDo LIST: </label>
			<br />
			<input
				id="newitem"
				type="text"
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
				{myNewList &&
					myNewList.map((item, index) => (
						<li key={index}>
							{item} &nbsp;
							<button onClick={() => handleDone(index)}>🎯</button>
						</li>
					))}
			</ul>
		</>
	);
};
export default Todo;

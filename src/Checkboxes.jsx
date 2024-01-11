import * as React from 'react';
// import { useState } from 'react';

const Chekbaxez = () => {
	const [student, setStudent] = React.useState(false);
	const [marital, setMarital] = React.useState(false);
	const [developer, setDeveloper] = React.useState(false);

	const handleStudentChange = () => {
		setStudent(!student);
	};

	const handleMaritalChange = () => {
		setMarital(!marital);
	};

	const handleDeveloperChange = () => {
		setDeveloper(!developer);
	};

	return (
		<>
			<hr />

			<Checkbox
				label="Student"
				value={student}
				onChange={handleStudentChange}
			/>

			<Checkbox
				label="Married"
				value={marital}
				onChange={handleMaritalChange}
			/>

			<Checkbox
				label="Developer"
				value={developer}
				onChange={handleDeveloperChange}
			/>
		</>
	);
};

// eslint-disable-next-line react/prop-types
const Checkbox = ({ label, value, onChange }) => {
	return (
		<>
			<input
				type="checkbox"
				checked={value}
				onChange={onChange}
			/>{' '}
			{label};
		</>
	);
};

export default Chekbaxez;

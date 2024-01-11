// import * as React from 'react';

import { useState } from 'react';

const RadioButt = () => {
	const [active, setActive] = useState('occasion');
	// const [occasion, setOccasion] = useState(false);
	// const [regular, setRegular] = useState(false);
	// const [insider, setInsider] = useState(false);

	const handleOccasionChange = () => {
		setActive('occasion');
	};

	const handleRegularChange = () => {
		setActive('regular');
	};

	const handleInsiderChange = () => {
		setActive('insider');
	};

	return (
		<>
			<hr />
			<div style={{ border: '1px solid red' }}>
				<Group
					label="Answered"
					value={active === 'occasion'}
					onChange={handleOccasionChange}
				/>

				<Group
					label="Regular"
					value={active === 'regular'}
					onChange={handleRegularChange}
				/>

				<Group
					label="Insider"
					value={active === 'insider'}
					onChange={handleInsiderChange}
				/>
			</div>
		</>
	);
};

// eslint-disable-next-line react/prop-types
const Group = ({ label, value, onChange }) => {
	return (
		<>
			<input
				type="radio"
				checked={value}
				onChange={onChange}
			/>
			{label}
		</>
	);
};
export default RadioButt;

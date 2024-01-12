/* eslint-disable react/prop-types */
import * as React from 'react';
import './Dropdown.css';

const Dropdown = () => {
	const handleMenuOne = () => {
		console.log('Tuli okay');
	};

	const handleMenuTwo = () => {
		console.log('Tuli ku two');
	};

	return (
		<>
			<hr />
			<Dropdone
				trigger={<button>Dropdown</button>}
				menu={[
					// eslint-disable-next-line react/jsx-key
					<button onClick={handleMenuOne}>Menu 1</button>,
					// eslint-disable-next-line react/jsx-key
					<button onClick={handleMenuTwo}>Menu 2</button>,
				]}
			/>
		</>
	);
};

// eslint-disable-next-line react/prop-types
const Dropdone = ({ trigger, menu }) => {
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(!open);
	};

	return (
		<div className="dropdown">
			{React.cloneElement(trigger, {
				onClick: handleOpen,
			})}
			{open ? (
				<ul className="menu">
					{/* // eslint-disable-next-line react/prop-types */}
					{menu.map((menuItem, index) => (
						<li
							key={index}
							className="menu-item"
						>
							{React.cloneElement(menuItem, {
								onClick: () => {
									menuItem.props.onClick();
									setOpen(false);
								},
							})}
						</li>
					))}
				</ul>
			) : null}
		</div>
	);
};

export default Dropdown;

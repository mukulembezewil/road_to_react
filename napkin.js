const mewo = (baba, pupa) => {
	let phew = baba + pupa;
	return phew;
};

console.log(mewo(4, 6));

const situation = (mil, mul) => {
	let func = (name) => {
		name = prompt('Enter Name Please');
		mil = prompt(`Provide first number ${name} is going to add`);
		mul = prompt('Second number now');
		let work = `When ${name} adds ${mil} to ${mul} she gets ${
			Number(mil) + Number(mul)
		}`;
		return work;
	};
	return func('John');
};

console.log(situation(3, 5));

// What would change if this program had an interface?

// Provide a place on the user interface to capture Name of mathematician =>> This would be a text input box
// This also means a variable would be declared to store the name.

// Provide a place on the user interface to capture first number to add. => This would be a text input box
// This would be a text input box?
// This also means a variable would be needed to store the first number.

// Provide a place to capture the second number to add.
// This would be a text input box?
// This also means a variable would be needed to store the second number.

// Provide a way to display the output.
// This would be a paragraph element?
// This also means a variable would be needed to store the total?.

// THE ALGORITHM

// Store name in the declared variable "mathematician".
// Store first number in the declared variable "first_num".
// Store second number in declared variable second_num.
// Store total in declared variable sum_total.
// Display total in an accompanying statement in a paragraph on the user interface.

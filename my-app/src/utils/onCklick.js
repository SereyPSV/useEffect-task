let contr1 = '-',
	contr2 = '-',
	contr3 = '-',
	contr4 = '-';

export const firstButtons = (
	task,
	id = '',
	showInput,
	setShowInput,
	refreshTasks,
	setRefreshTasks,
) => {
	setRefreshTasks(!refreshTasks);
	setShowInput(!showInput);
	let contr1 = id.slice(3);
	console.log('contr1', contr1, contr3, id, task);
};

export const secondButtons = (
	task,
	id = '',
	showInput,
	setShowInput,
	refreshTasks,
	setRefreshTasks,
) => {
	setRefreshTasks(!refreshTasks);
	setShowInput(!showInput);
	let contr2 = id.slice(4);
	console.log('contr2', contr2, contr4, id, task);
};

export const thirdButtons = (
	task,
	id = '',
	showInput,
	setShowInput,
	refreshTasks,
	setRefreshTasks,
) => {
	setRefreshTasks(!refreshTasks);
	setShowInput(!showInput);
	let contr3 = id.slice(3);
	console.log('contr3', contr1, contr3, '---', id, task);
};
export const fourthButtons = (
	task,
	id = '',
	showInput,
	setShowInput,
	refreshTasks,
	setRefreshTasks,
) => {
	setRefreshTasks(!refreshTasks);
	setShowInput(!showInput);
	let contr4 = id.slice(3);
	console.log('contr4', contr2, contr4, id, task);
};

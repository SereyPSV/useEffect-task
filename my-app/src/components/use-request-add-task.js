export const useRequestAddTask = (
	refreshTasks,
	setRefreshTasks,
	setIsCreating,
	textTask,
	closeModalWindow,
) => {
	const confirmAddingTask = () => {
		console.log('Отправить', textTask);

		setIsCreating(true);
		fetch('http://localhost:3030/task/', {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				task: textTask,
				state: false,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Задание добавлено, ответ сервера:', response);
				setRefreshTasks(!refreshTasks);
				closeModalWindow();
			})
			.finally(() => setIsCreating(false));
	};
	return { confirmAddingTask };
};

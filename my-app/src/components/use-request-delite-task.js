import { useState } from 'react';

export const useRequestDeleteTask = (refreshTasks, setRefreshTasks) => {
	const [isDeleting, setIsDeleting] = useState(false);

	const requestDeleteTask = (item) => {
		setIsDeleting(true);
		fetch(`http://localhost:3030/task/${item.target.id}`, {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Удален, ответ от сервера: ', response);
				setRefreshTasks(!refreshTasks);
			})
			.finally(() => {
				setIsDeleting(false);
			});
	};

	return { requestDeleteTask, isDeleting };
};

import { ref, remove } from 'firebase/database';
import { db } from '../firebase';

import { useState } from 'react';

export const useRequestDeleteTask = (refreshTasks, setRefreshTasks, id, setShowInput) => {
	const [isDeleting, setIsDeleting] = useState(false);

	const requestDeleteTask = (item) => {
		console.log(item.target.id.slice(4));
		setIsDeleting(true);
		if (id !== 'add') {
			const taskDatabaseRef = ref(db, `tasks/${item.target.id.slice(4)}`);
			console.log(taskDatabaseRef);
			remove(taskDatabaseRef)
				.then((response) => {
					console.log('Удален, ответ от сервера: ', response);
					setRefreshTasks(!refreshTasks);
				})
				.finally(() => {
					setIsDeleting(false);
				});
		} else {
			setShowInput(false);
		}
	};
	return { requestDeleteTask, isDeleting };
};

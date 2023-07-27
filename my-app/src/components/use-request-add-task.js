import { ref, push, set } from 'firebase/database';
import { db } from '../firebase';
export const useRequestAddTask = (
	showInput,
	setShowInput,
	refreshTasks,
	setRefreshTasks,
	textTask,
	setTask,
	id,
) => {
	const confirmAddingTask = () => {
		if (textTask === '') {
			console.log(showInput, 'НЕ Отправить', textTask, id);
			return;
		}
		if (id === 'add') {
			console.log(showInput, 'Добавить', textTask, id);
			const tasksDatabaseRef = ref(db, 'tasks');

			push(tasksDatabaseRef, {
				task: textTask,
				state: false,
			}).then((response) => {
				console.log('Задание добавлено, ответ сервера:', response);
				setRefreshTasks(!refreshTasks);
				setTask('');
				setShowInput(false);
				setRefreshTasks(!refreshTasks);
			});
		} else {
			console.log('Изменить', textTask, id);
			const tasksDatabaseRef = ref(db, `tasks/${id}`);
			set(tasksDatabaseRef, {
				task: textTask,
				state: false,
			}).then((response) => {
				console.log('Задание добавлено, ответ сервера:', response);
				setRefreshTasks(!refreshTasks);
				setShowInput(false);
			});
		}
	};
	return { confirmAddingTask, textTask };
};

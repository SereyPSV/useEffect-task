import { useState } from 'react';
import styles from './app.module.css';

import { useRequestGetTasks, useRequestAddTask, useRequestDeleteTask } from './components';

export const AppP = () => {
	const [refreshTasks, setRefreshTasks] = useState(false);
	const [addTask, setAddTask] = useState(false);
	const [editTask, setEditTask] = useState(false);
	const [isCreating, setIsCreating] = useState(false);
	const [displaySortedObjects, setDisplaySortedObjects] = useState(false);
	const [task, settask] = useState('');

	const sortTasks = () => {
		setDisplaySortedObjects(!displaySortedObjects);
		setRefreshTasks(!refreshTasks);
	};

	const onTaskBlur = () => {
		console.log('BB');
	};

	const onChekTask = ({ target }) => {
		settask(target.value);
	};

	const { tasks } = useRequestGetTasks(refreshTasks);
	const { confirmAddingTask } = useRequestAddTask(
		refreshTasks,
		setRefreshTasks,
		setIsCreating,
		task,
	);
	const { requestDeleteTask, isDeleting } = useRequestDeleteTask(refreshTasks, setRefreshTasks);

	const editTaskItem = (item) => {
		console.log(item.target.parentNode.parentNode.id);
		// setEditTask(!editTask);
	};

	return (
		<div className={styles.app}>
			<div className={styles.wrapper}>
				<button
					className={styles.button}
					onClick={() => {
						console.log('Кнопка добавить');
					}}
				>
					Добавить
				</button>
				<button className={styles.button} onClick={sortTasks}>
					{displaySortedObjects ? 'Отменить сортировку' : 'Сортировать'}
				</button>
			</div>

			{(displaySortedObjects ? tasks.sort((a, b) => (a.task > b.task ? 1 : -1)) : tasks).map
				({ id, task, state }) => (
					<div className={styles.wrapper} key={id} id={id}>
						{editTask ? (
							<input
								className={styles.inputField}
								name="task"
								type="text"
								placeholder="Заполните задачу"
								onChange={onChekTask}
								onBlur={onTaskBlur}
								value={task}
							></input>
						) : (
							<div className={styles.task}>- {task}.</div>
						)}
						<div className={styles.buttons}>
							<button className={styles.button} onClick={editTaskItem}>
								{editTask ? 'Отмена' : 'Изменить'}
							</button>
							<button
								className={styles.button}
								disabled={isDeleting}
								onClick={requestDeleteTask}
							>
								Удалить
							</button>
						</div>
					</div>
				),
			)}
		</div>
	);
};

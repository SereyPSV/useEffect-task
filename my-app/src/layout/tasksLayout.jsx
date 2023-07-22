import { useState } from 'react';
import { useRequestDeleteTask, useRequestAddTask } from '../components';

import styles from './tasksLayout.module.css';

export const Item = ({
	buttonFirst = '',
	buttonSecond = '',
	el = '',
	refreshTasks,
	setRefreshTasks,
}) => {
	const [task, setTask] = useState(el.task);
	const [showInput, setShowInput] = useState(false);

	const onChangeTask = ({ target }) => {
		setTask(target.value);
	};

	const onClick1 = () => {
		setRefreshTasks(!refreshTasks);
		setShowInput(!showInput);
	};

	const { confirmAddingTask } = useRequestAddTask(
		showInput,
		setShowInput,
		refreshTasks,
		setRefreshTasks,
		task,
		setTask,
		el.id,
	);

	const { requestDeleteTask, isDeleting } = useRequestDeleteTask(
		refreshTasks,
		setRefreshTasks,
		el.id,
		setShowInput,
	);

	const onClick4 = () => {
		setShowInput(false);
	};

	return (
		<div className={styles.wrapper}>
			{showInput ? (
				<input
					className={styles.inputField}
					name={'task'}
					type={'text'}
					placeholder={'Заполните задачу'}
					value={task}
					onChange={onChangeTask}
				></input>
			) : (
				<div className={styles.task}>- {task}</div>
			)}
			<div className={styles.buttons}>
				{showInput ? (
					<>
						<button
							id={'but1' + el.id}
							className={styles.button}
							onClick={confirmAddingTask}
						>
							{buttonFirst.hidden}
						</button>
						<button id={'but2' + el.id} className={styles.button} onClick={onClick4}>
							{buttonSecond.hidden}
						</button>
					</>
				) : (
					<>
						<button id={'but1' + el.id} className={styles.button} onClick={onClick1}>
							{buttonFirst.main}
						</button>
						<button
							id={'but2' + el.id}
							className={styles.button}
							onClick={requestDeleteTask}
							disabled={isDeleting}
						>
							{buttonSecond.main}
						</button>
					</>
				)}
			</div>
		</div>
	);
};

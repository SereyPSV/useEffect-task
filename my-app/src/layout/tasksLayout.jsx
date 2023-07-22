import { useState } from 'react';
import { firstButtons, secondButtons, thirdButtons, fourthButtons } from '../utils/onCklick'; //

import styles from './tasksLayout.module.css';

export const onClick = ({ target }) => console.log('onClick1', target.id);

export const Item = ({
	buttonFirst = '',
	buttonSecond = '',
	el = '',
	showBtn2,
	setShowBtn2,
	refreshTasks,
	setRefreshTasks,
}) => {
	const [task, setTask] = useState(el.task);
	const [showInput, setShowInput] = useState(false);

	const onChangeTask = ({ target }) => {
		setTask(target.value);
	};

	const onClick1 = ({ target }) => {
		console.log('onClick1', target.id, task);
		firstButtons(task, target.id, showInput, setShowInput, refreshTasks, setRefreshTasks);
	};
	const onClick2 = ({ target }) => {
		console.log('onClick2', task, target.id);
		secondButtons(task, target.id, showInput, setShowInput, refreshTasks, setRefreshTasks);
	};
	const onClick3 = ({ target }) => {
		console.log('onClick3', task, target.id);
		thirdButtons(task, target.id, showInput, setShowInput, refreshTasks, setRefreshTasks);
	};
	const onClick4 = ({ target }) => {
		console.log('onClick4', task, target.id);
		fourthButtons(task, target.id, showInput, setShowInput, refreshTasks, setRefreshTasks);
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
						<button id={'but1' + el.id} className={styles.button} onClick={onClick3}>
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
						<button id={'but2' + el.id} className={styles.button} onClick={onClick2}>
							{buttonSecond.main}
						</button>
					</>
				)}
			</div>
		</div>
	);
};

import styles from './app.module.css';

import { useState } from 'react';
import { Item } from './layout/tasksLayout';
import { useRequestGetTasks } from './components';
import {
	buttonAddSave,
	buttonSorting,
	buttonEditSave,
	buttonDeleteConfirmation,
	buttonUpdateConfirmation,
	buttonSearch,
} from './utils/nameButtons';

export const App = () => {
	const [refreshTasks, setRefreshTasks] = useState(false);
	const [displaySortedObjects, setDisplaySortedObjects] = useState(false);
	const [showBtn2, setShowBtn2] = useState(false);

	const { tasks } = useRequestGetTasks(refreshTasks);
	const sortTasks = () => {
		setDisplaySortedObjects(!displaySortedObjects);
		setRefreshTasks(!refreshTasks);
	};

	return (
		<div className={styles.app}>
			<div className={styles.wrapper}>
				<button className={styles.button} onClick={sortTasks}>
					{displaySortedObjects ? buttonSorting.hidden : buttonSorting.main}
				</button>
			</div>
			<div className={styles.item}>
				<Item
					buttonFirst={buttonSearch}
					buttonSecond={buttonSorting}
					item="Пустая строка"
					el={{ id: 'add', task: '' }}
					showBtn2={showBtn2}
					setShowBtn2={setShowBtn2}
					refreshTasks={refreshTasks}
					setRefreshTasks={setRefreshTasks}
					onClickFirst={sortTasks}
					onClickSecond={sortTasks}
				/>
			</div>
			<div className={styles.item}>
				<Item
					buttonFirst={buttonAddSave}
					buttonSecond={buttonUpdateConfirmation}
					item="Пустая строка"
					el={{ id: 'add', task: '' }}
					showBtn2={showBtn2}
					setShowBtn2={setShowBtn2}
					refreshTasks={refreshTasks}
					setRefreshTasks={setRefreshTasks}
				/>
			</div>
			<div className={styles.item}>
				{(displaySortedObjects
					? tasks.sort((a, b) => (a.task > b.task ? 1 : -1))
					: tasks
				).map((el) => (
					<Item
						buttonFirst={buttonEditSave}
						buttonSecond={buttonDeleteConfirmation}
						key={el.id}
						value={el.task}
						el={el}
						showBtn2={showBtn2}
						setShowBtn2={setShowBtn2}
						refreshTasks={refreshTasks}
						setRefreshTasks={setRefreshTasks}
					/>
				))}
			</div>
		</div>
	);
};

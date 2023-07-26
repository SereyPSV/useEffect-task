import styles from './app.module.css';

import { useState } from 'react';
import { Item } from './layout/tasksLayout';
import { useRequestGetTasks } from './components';
import {
	buttonSearch,
	buttonAddSave,
	buttonSorting,
	buttonEditSave,
	buttonDeleteConfirmation,
	buttonUpdateConfirmation,
} from './utils/nameButtons';

export const App = () => {
	const [refreshTasks, setRefreshTasks] = useState(false);
	const [displaySortedObjects, setDisplaySortedObjects] = useState(false);
	const [showBtn2, setShowBtn2] = useState(false);
	const [serchTask, setSerchTask] = useState('');

	const { tasks } = useRequestGetTasks(refreshTasks);
	//----- Сортировка ------//
	const sortTasks = () => {
		setDisplaySortedObjects(!displaySortedObjects);
		setRefreshTasks(!refreshTasks);
	};
	//-------- Поиск --------//

	const search = () => setSerchTask('');

	const onChangeSearch = ({ target }) => {
		setSerchTask(target.value);
	};

	return (
		<div className={styles.app}>
			<div className={styles.wrapper}>
				<input
					className={styles.inputField}
					name={'task'}
					type={'text'}
					placeholder={'Поиск'}
					value={serchTask}
					onChange={onChangeSearch}
				></input>
				<div className={styles.buttons}>
					<button className={styles.button} onClick={search}>
						{displaySortedObjects ? buttonSearch.hidden : buttonSearch.main}
					</button>
					<button className={styles.button} onClick={sortTasks}>
						{displaySortedObjects ? buttonSorting.hidden : buttonSorting.main}
					</button>
				</div>
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
				).map((el) =>
					el.task.toLowerCase().includes(serchTask.toLowerCase()) ? (
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
					) : null,
				)}
			</div>
		</div>
	);
};

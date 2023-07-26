import styles from '../tasksLayout.module.css';

export const Input = ({ showInput, task, onChangeTask }) => {
	return showInput ? (
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
	);
};

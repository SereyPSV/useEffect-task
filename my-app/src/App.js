import { Fragment, useEffect, useState } from 'react';
import styles from './app.module.css';

export const AppP = () => {
	const [todos, setTodos] = useState([]);
	const [userURL, setUserURL] = useState('https://jsonplaceholder.typicode.com/todos');

	const createUrl = (item) => {
		setUserURL(
			item.target.textContent === 'All users'
				? 'https://jsonplaceholder.typicode.com/todos'
				: `https://jsonplaceholder.typicode.com/users/${item.target.textContent.slice(
						5,
				  )}/todos/`,
		);
	};

	useEffect(() => {
		fetch(userURL)
			.then((loadedData) => loadedData.json())
			.then((loadedTodos) => {
				setTodos(loadedTodos);
			});
	}, [userURL]);

	return (
		<Fragment>
			<div className={styles.buttons}>
				<button className={styles.button} onClick={createUrl}>
					User 1
				</button>
				<button className={styles.button} onClick={createUrl}>
					User 2
				</button>
				<button className={styles.button} onClick={createUrl}>
					User 3
				</button>
				<button className={styles.button} onClick={createUrl}>
					User 4
				</button>
				<button className={styles.button} onClick={createUrl}>
					User 5
				</button>
				<button className={styles.button} onClick={createUrl}>
					User 6
				</button>
				<button className={styles.button} onClick={createUrl}>
					User 7
				</button>
				<button className={styles.button} onClick={createUrl}>
					User 8
				</button>
				<button className={styles.button} onClick={createUrl}>
					User 9
				</button>
				<button className={styles.button} onClick={createUrl}>
					User 10
				</button>
				<button className={styles.button} onClick={createUrl}>
					All users
				</button>
			</div>
			<div className={styles.app}>
				{todos.map(({ userId, id, title, completed }) => (
					<div className={completed ? styles.red : styles.darkblue} key={id}>
						{id}. User {userId} - {title}.
					</div>
				))}
			</div>
		</Fragment>
	);
};

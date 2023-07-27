import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';

export const useRequestGetTasks = () => {
	const [tasks, setTasks] = useState([]);
	useEffect(() => {
		const tasksDatabaseRef = ref(db, 'tasks');

		return onValue(tasksDatabaseRef, (snapshot) => {
			const loadedTasks = snapshot.val() || [];
			setTasks(loadedTasks);
		});
	}, []);

	return { tasks };
};

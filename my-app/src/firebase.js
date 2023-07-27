import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyCDj46_um_9aEPIWHHCn4RRHqCd9pQhAjk',
	authDomain: 'useeffecttaskproject.firebaseapp.com',
	projectId: 'useeffecttaskproject',
	storageBucket: 'useeffecttaskproject.appspot.com',
	messagingSenderId: '468569203221',
	appId: '1:468569203221:web:2994d035580170d9be241c',
	databaseURL: 'https://useeffecttaskproject-default-rtdb.europe-west1.firebasedatabase.app/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';

import classes from './AddUser.module.css';

const AddUser = (props) => {
	const [username, setUsername] = useState('');
	const [age, setAge] = useState('');
	const [error, setError] = useState();

	const addUserHandler = (event) => {
		event.preventDefault();
		if (username.trim().length === 0 || age.trim() === 0) {
			setError({
				title: 'Invalid Input',
				message: 'Please enter a valid name and age.',
			});
			return;
		}
		if (+age < 1) {
			setError({
				title: 'Invalid Age',
				message: 'Please enter an age greater than 0',
			});
			return;
		}
		props.onUserAdded({ id: Math.random(), username, age });
		resetForm();
	};

	const resetForm = () => {
		setUsername('');
		setAge('');
	};

	const updateUsernameHandler = (event) => {
		setUsername(event.target.value);
	};

	const updateAgeHandler = (event) => {
		setAge(event.target.value);
	};

	const clearErrorHandler = () => {
		setError(undefined);
	};

	return (
		<>
			{error && <ErrorModal
				title={error.title}
				message={error.message}
				onDismissError={clearErrorHandler}
			></ErrorModal>}
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input
						type="text"
						id="username"
						value={username}
						onChange={updateUsernameHandler}
					/>
					<label htmlFor="age">Age</label>
					<input
						type="numbers"
						id="age"
						value={age}
						onChange={updateAgeHandler}
					/>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</>
	);
};

export default AddUser;

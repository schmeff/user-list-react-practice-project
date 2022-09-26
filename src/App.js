import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
	const [users, setUsers] = useState([]);

	const addUserHandler = user => {
		setUsers(prevUsers => [user, ...prevUsers])
	}

	return (
		<div>
			<AddUser onUserAdded={ addUserHandler } />
			<UsersList users={users} />
		</div>
	);
}

export default App;

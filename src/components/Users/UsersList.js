import Card from '../UI/Card';
import User from './User';

import classes from './UsersList.module.css';

const UsersList = (props) => {
	if (props.users.length < 1) return;

	return (
		<Card className={classes.users}>
			<ul>
				{props.users.map((user) => (
					<User key={user.id} userInfo={user} />
				))}
			</ul>
		</Card>
	);
};

export default UsersList;

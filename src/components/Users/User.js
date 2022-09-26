const User = ({userInfo}) => {
	return (
		<li>
			{userInfo.username} ({userInfo.age} years old)
		</li>
	);
};

export default User;

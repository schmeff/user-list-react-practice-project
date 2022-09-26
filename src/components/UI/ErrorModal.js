import Button from './Button';
import Card from './Card';

import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
	const dismissErrorHandler = () => {
		props.onDismissError();
	}

	return (
		<>
			<div className={classes.backdrop}></div>
			<Card className={classes.modal}>
				<header className={classes.header}>
					<h2>{props.title}</h2>
				</header>
				<div className={classes.content}>
					<p>{props.message}</p>
				</div>
				<footer className={classes.actions}>
					<Button onClick={dismissErrorHandler}>Okay</Button>
				</footer>
			</Card>
		</>
	);
};

export default ErrorModal;

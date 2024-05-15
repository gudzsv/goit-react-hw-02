import styles from './Description.module.css';
const Description = () => {
	return (
		<>
			<h1 className={styles.title}>Sip Happens Café</h1>
			<p className={styles.text}>
				Please leave your feedback about our service by selecting one of the
				options below.
			</p>
		</>
	);
};

export default Description;

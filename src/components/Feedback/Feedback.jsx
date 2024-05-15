import styles from './Feedback.module.css';

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
	return (
		<ul className={styles.wrapper}>
			{Object.entries(feedback).map((item, idx) => {
				return (
					<li className={styles.text} key={idx}>
						{item[0]}: <b>{item[1]}</b>
					</li>
				);
			})}
			<li>
				Total: <b> {totalFeedback}</b>
			</li>
			<li>
				Positive: <b> {positiveFeedback}% </b>
			</li>
		</ul>
	);
};

export default Feedback;

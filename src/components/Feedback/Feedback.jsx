const Feedback = ({ feedback }) => {
	return (
		<ul>
			{Object.entries(feedback).map((item, idx) => {
				return (
					<li key={idx}>
						{item[0]}: <span>{item[1]}</span>
					</li>
				);
			})}
		</ul>
	);
};

export default Feedback;

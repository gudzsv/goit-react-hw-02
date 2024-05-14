const Options = ({ updateFeedback }) => {
	return (
		<>
			<button
				onClick={() => {
					updateFeedback('good');
				}}
			>
				Good
			</button>
			<button
				onClick={() => {
					updateFeedback('neutral');
				}}
			>
				Neutral
			</button>
			<button
				onClick={() => {
					updateFeedback('bad');
				}}
			>
				Bad
			</button>
			<button>Reset</button>
		</>
	);
};
export default Options;

import { useState } from 'react';

import './App.css';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';

function App() {
	const [feedback, setFeedback] = useState({
		good: 0,
		neutral: 0,
		bad: 0,
	});

	const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
	console.log('totalFeedback: ', totalFeedback);

	const updateFeedback = (feedbackType) => {
		console.log('updateFeedback');
		setFeedback({
			...feedback,
			[feedbackType]: feedback[feedbackType] + 1,
		});
	};

	return (
		<>
			<Description />
			<Options updateFeedback={updateFeedback} />
			<Feedback feedback={feedback} />
		</>
	);
}

export default App;

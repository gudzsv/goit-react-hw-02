const Button = ({ btnType = 'button', children }) => {
	return (
		<button type={btnType} aria-label={`button ${children}`}>
			{children}
		</button>
	);
};
export default Button;

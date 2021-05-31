import React from "react";

const Button = ({ children, className, pdVer, pdHor, onClick }) => {
	const inlineStyle = {
		padding: `${pdVer}px ${pdHor}px`,
	};
	return (
		<div
			style={inlineStyle}
			className={`button ${className}`}
			onClick={onClick}>
			{children}
		</div>
	);
};

export default Button;

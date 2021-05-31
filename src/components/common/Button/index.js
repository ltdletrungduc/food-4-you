import React from "react";

const Button = ({ children, className, pdVer, pdHor }) => {
	const inlineStyle = {
		padding: `${pdVer}px ${pdHor}px`,
	};
	return (
		<div style={inlineStyle} className={`button ${className}`}>
			{children}
		</div>
	);
};

export default Button;

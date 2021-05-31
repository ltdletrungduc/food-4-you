import React from "react";
import { ReactComponent as LogoSVG } from "../../../assets/icons/logo.svg";
import styled from "styled-components";

const LogoContainer = styled.div`
	width: ${(props) => `${props.size}px`};
	.logo {
		width: 100%;
	}
`;
const Logo = ({ size }) => {
	return (
		<LogoContainer size={size}>
			<LogoSVG className='logo'></LogoSVG>
		</LogoContainer>
	);
};

export default Logo;

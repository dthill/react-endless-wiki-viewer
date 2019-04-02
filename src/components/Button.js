import React from 'react';
import styled from 'styled-components';
import colors from './colors'

const StyledButton = styled.div`
	background: ${colors.buttonBackground};
	border: none;
	border-radius: 1em
	color: white;
	box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
	padding: 0 1em;
	line-height: 2.5em;
	text-align: center;
	text-decoration: none;
	font-size: 1em;

	:hover {
		background: white;
		color: black;
	}
	:active {
		background: ${colors.active};
		color: white;
	}

`;

function Button(props){
	return (
		<StyledButton>{props.value}</StyledButton>
	);
}

export default Button;
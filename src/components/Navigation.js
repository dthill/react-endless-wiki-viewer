import React from 'react';
import styled from 'styled-components';

const StyledNavigation = styled.nav`
background: black;
display: flex;
justify-content: space-between;
align-items: center;
position: sticky;
top: 0;
padding: 0 1rem;
height: 4rem;

div {
	display: flex;
	flex-wrap: wrap;
}

p {
	color: white;
	line-height: 1em;
	padding: 0 1em;
	margin: 0;
	text-align: center;
	text-decoration: none;
	font-size: 1.5em;
}

`;

const StyledNavigationButton = styled.button`
	background: black;
	border: none;
	color: white;
	font-size: 1em;
	line-height: 3em;
	padding: 0.5em 1em;
	text-align: center;
	text-decoration: none;
	cursor: pointer;
	:hover {
		background-color: white;
		color: black;
	}	
`;

function NavigationButton(props){
	return (
		<StyledNavigationButton active={props.active}>
			{props.value}
		</StyledNavigationButton>
	);
}

function Navigation(props){
	return (
		<StyledNavigation {...props}>
			<div>
				<p>
					Wiki Viewer
				</p>
			</div>
			<div onClick={props.handleReload}>
				<NavigationButton value="New Articles" />
			</div>
		</StyledNavigation>
	);
}

export default Navigation;
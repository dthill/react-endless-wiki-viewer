import React from 'react';
import styled from 'styled-components';
import MainContainer from "./MainContainer"


const StyledArticle = styled.div`
background: white;
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
padding: 1em;
margin: 1em 0;
overflow: auto;
div {
	cursor: pointer;
}
h1{
	font-size: 1.5rem;
}

p {
	padding 0;
	text-align: justify;
}

img {
	margin-right: 1em;
	float: left;
	clear: left;
}
`;

function ArticleDescription(props){
	return (
		<p>
		{props.extract}
		</p>
		);
}

function ArticleImage(props){
	if(props.image){
		return (
			<img src={props.image} alt=""/>
			);
	}
	return null;
}

function RandomArticle(props){
	return (
		<StyledArticle >
			<div onClick={()=>props.handleOpenArticle(props)}>
				<ArticleImage image={props.image}/>
				<h1>{props.title}</h1>
				<ArticleDescription extract={props.extract}/>
			</div>
		</StyledArticle>
	);
}


function RandomArticles (props){
	let randomArticles = props.randomArticles.map(randomArticle => {
		return(
			<RandomArticle 
			key={randomArticle.pageid}
			pageid={randomArticle.pageid}
			title={randomArticle.title} 
			extract={randomArticle.extract}
			image={randomArticle.image}
			url={randomArticle.url}
			outsideUrl={randomArticle.outsideUrl}
			{...props}
			/>
		);
	});

	if(props.randomArticlesError){
		return(
			<MainContainer 
			ref={props.randomArticlesRef}
			>
				<h1>Error loading...</h1>
				<h1>Try again later</h1>
			</MainContainer>
		);
	} else {
		return(
			<MainContainer 
			ref={props.randomArticlesRef} 
			onScroll={props.handleRandomArticlesScroll} 
			{...props}
			>
				{randomArticles}
				<h1>Loading...</h1>
			</MainContainer>
		);
	}
}

export default RandomArticles;
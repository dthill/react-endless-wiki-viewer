import React from 'react';
import styled from 'styled-components';
import Button from "./Button";

const ArticleViewerHeader = styled.div`
	padding: 0.5em 1em 3em 1em;
	position: sticky;
	top: 0;
`;

const StyledArticleViewerBody = styled.iframe`
	box-sizing: border-box;
  	border: none;
  	margin: 0;
  	padding: 0;
  	width: 100%;
  	height: 250px;
`;

const StyledArticleViewerContainer = styled.div`
margin: 0 auto;
width: 100%;
overflow-y: scroll;
-webkit-overflow-scrolling: touch;
height: calc(100vh - 4rem);
`;


const StyledTopLeftButton = styled.div`
float: left;
a {
	text-decoration: none;
}
`;

const StyledTopRightButton = styled.div`
float: right;
`;

const StyledLoading = styled.h1`
font-size: 1.5rem; 
text-align: center;
`;
function Loading(props){
	return(
		<StyledLoading>
			Loading...
		</StyledLoading>
	);
}

function ArticleViewer(props) {
	let loading = props.articleIsLoading ? <Loading />: null;
	return(
		<StyledArticleViewerContainer {...props}>
			<ArticleViewerHeader {...props}>
				<StyledTopLeftButton>
					<a href={props.openArticle.outsideUrl} target="_blank" rel="noopener noreferrer">
						<Button value="Open on Wikipedia"/>
					</a>
				</StyledTopLeftButton>
				<StyledTopRightButton onClick={props.handleCloseArticle}>
					<Button value="&times;" />
				</StyledTopRightButton>
			</ArticleViewerHeader>
			{loading}
			{/*eslint-disable-next-line*/}
			<StyledArticleViewerBody title="open-article" ref={props.iframeRef} src="javascript:void(0);"/>
		</StyledArticleViewerContainer>
	);
}


export default ArticleViewer;
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';
import Navigation from './components/Navigation';
import RandomArticles from './components/RandomArticles';
import ArticleViewer from './components/ArticleViewer';
import fetchRandomArticles from "./utils/fetchRandomArticles";
import fetchArticle from "./utils/fetchArticle";


const GlobalStyles = createGlobalStyle`
 html, body {
   box-sizing: border-box;
   height: 100%;
   font-family: Verdana, sans-serif;
   font-size: 16px;
   line-height: 1.5;
   background: #E5E5E5
}

 *,
 *::before,
 *::after {
   box-sizing: inherit;
}
`;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      randomArticles: [],
      randomArticlesLoading: false,
      randomArticlesError: false,
      randomArticlesScrollDistance: 0,
      openArticle: false,
      articleIsLoading: false,
    }
    this.iframeRef = React.createRef();
    this.randomArticlesRef = React.createRef();
    this.handleOpenArticle = this.handleOpenArticle.bind(this);
    this.handleCloseArticle = this.handleCloseArticle.bind(this);
    this.handleFetchRandomArticles = this.handleFetchRandomArticles.bind(this);
    this.handleRandomArticlesScroll = this.handleRandomArticlesScroll.bind(this);
    this.handleReload = this.handleReload.bind(this);
  }

  handleFetchRandomArticles(){
    this.setState({randomArticlesLoading: true});
    fetchRandomArticles().then((randomArticles) =>{
      this.setState({
        randomArticles: this.state.randomArticles.concat(randomArticles.articles),
        randomArticlesLoading: false
      });
    }).catch(error => {
       this.setState({
        randomArticles: [],
        randomArticlesError: error.error,
        randomArticlesLoading: false,
      });
    })
  }

  handleRandomArticlesScroll(e){
    if (((e.target.scrollHeight - e.target.scrollTop) * 0.8 <= e.target.clientHeight) &&
      this.state.randomArticlesLoading === false){
        this.handleFetchRandomArticles();
    }
  }

  handleOpenArticle(props){
    this.setState({
      randomArticlesScrollDistance: this.randomArticlesRef.current.scrollTop,
      openArticle: props,
      articleIsLoading: true
    });
    this.setState({openArticle: props, articleIsLoading: true}, ()=>{
      fetchArticle(props.url).then(fetchedArticle => {
        this.iframeRef.current.contentDocument.open();
        this.iframeRef.current.contentDocument.write(fetchedArticle.article.documentElement.innerHTML);
        this.iframeRef.current.contentDocument.close();
        this.iframeRef.current.contentDocument.addEventListener("DOMContentLoaded", () =>{
          this.iframeRef.current.style.height = this.iframeRef.current.contentDocument.documentElement.scrollHeight.toString() + "px";
        });
        this.setState({articleIsLoading: false});
      });
    });
  }

  handleCloseArticle(){
    this.setState({openArticle: false}, () =>{
      this.randomArticlesRef.current.scrollTop = this.state.randomArticlesScrollDistance;
    });
  }

  handleReload(){
    this.setState({
      randomArticles: [],
      randomArticlesLoading: false,
      randomArticlesError: false,
      randomArticlesScrollDistance: 0,
      openArticle: false,
      articleIsLoading: false,
    });
    this.handleFetchRandomArticles();
  }

  componentDidMount(){
    this.handleFetchRandomArticles();
    this.randomArticlesRef.current.scrollTop = this.state.randomArticlesScrollDistance;
  }

  render() {
    let mainSection;
    if(this.state.openArticle){
      mainSection = (
        <ArticleViewer 
        iframeRef={this.iframeRef}
        articleIsLoading={this.state.articleIsLoading}
        handleCloseArticle={this.handleCloseArticle}
        openArticle={this.state.openArticle}
        />
        );
    } else {
      mainSection = (
        <RandomArticles 
        randomArticles={this.state.randomArticles}
        randomArticlesError={this.state.randomArticlesError}
        randomArticlesRef={this.randomArticlesRef}
        handleFetchRandomArticles={this.handleFetchRandomArticles}
        handleRandomArticlesScroll={this.handleRandomArticlesScroll}
        handleOpenArticle={this.handleOpenArticle}
        />
        );
    }
    return (
      <React.Fragment>
        <Normalize />
        <GlobalStyles />
        <Navigation handleReload={this.handleReload} />
        {mainSection}  
      </React.Fragment>
    );
  }
}

export default App;

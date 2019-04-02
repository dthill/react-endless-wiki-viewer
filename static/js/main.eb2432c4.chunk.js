(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(29)},29:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(4),o=n.n(i),c=n(9),l=n(10),u=n(15),d=n(11),s=n(16),m=n(3),h=n(2),f=n(1),g=n(12);function p(){var e=Object(h.a)(["\n\tbackground: black;\n\tborder: none;\n\tcolor: white;\n\tfont-size: 1em;\n\tline-height: 3em;\n\tpadding: 0.5em 1em;\n\ttext-align: center;\n\ttext-decoration: none;\n\tcursor: pointer;\n\t:hover {\n\t\tbackground-color: white;\n\t\tcolor: black;\n\t}\t\n"]);return p=function(){return e},e}function b(){var e=Object(h.a)(["\nbackground: black;\ndisplay: flex;\njustify-content: space-between;\nalign-items: center;\nposition: sticky;\ntop: 0;\npadding: 0 1rem;\nheight: 4rem;\n\ndiv {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n}\n\np {\n\tcolor: white;\n\tline-height: 1em;\n\tpadding: 0 1em;\n\tmargin: 0;\n\ttext-align: center;\n\ttext-decoration: none;\n\tfont-size: 1.5em;\n}\n\n"]);return b=function(){return e},e}var v=f.default.nav(b()),A=f.default.button(p());function E(e){return a.a.createElement(A,{active:e.active},e.value)}var w=function(e){return a.a.createElement(v,e,a.a.createElement("div",null,a.a.createElement("p",null,"Wiki Viewer")),a.a.createElement("div",{onClick:e.handleReload},a.a.createElement(E,{value:"New Articles"})))};function x(){var e=Object(h.a)(["\nmax-width: 1000px;\nmargin: 0 auto;\nwidth: 100%;\ntext-align: center;\noverflow-y: scroll;\n-webkit-overflow-scrolling: touch;\nheight: calc(100vh - 5rem);\npadding: 0;\n"]);return x=function(){return e},e}var k=f.default.div(x());function O(){var e=Object(h.a)(["\nbackground: white;\nbox-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\npadding: 1em;\nmargin: 1em 0;\noverflow: auto;\ndiv {\n\tcursor: pointer;\n}\nh1{\n\tfont-size: 1.5rem;\n}\n\np {\n\tpadding 0;\n\ttext-align: justify;\n}\n\nimg {\n\tmargin-right: 1em;\n\tfloat: left;\n\tclear: left;\n}\n"]);return O=function(){return e},e}var R=f.default.div(O());function j(e){return a.a.createElement("p",null,e.extract)}function y(e){return e.image?a.a.createElement("img",{src:e.image,alt:""}):null}function S(e){return a.a.createElement(R,null,a.a.createElement("div",{onClick:function(){return e.handleOpenArticle(e)}},a.a.createElement(y,{image:e.image}),a.a.createElement("h1",null,e.title),a.a.createElement(j,{extract:e.extract})))}var L=function(e){var t=e.randomArticles.map(function(t){return a.a.createElement(S,Object.assign({key:t.pageid,pageid:t.pageid,title:t.title,extract:t.extract,image:t.image,url:t.url,outsideUrl:t.outsideUrl},e))});return e.randomArticlesError?a.a.createElement(k,{ref:e.randomArticlesRef},a.a.createElement("h1",null,"Error loading..."),a.a.createElement("h1",null,"Try again later")):a.a.createElement(k,Object.assign({ref:e.randomArticlesRef,onScroll:e.handleRandomArticlesScroll},e),t,a.a.createElement("h1",null,"Loading..."))},F={buttonBackground:"#7F7F7F"};function D(){var e=Object(h.a)(["\n\tbackground: ",";\n\tborder: none;\n\tborder-radius: 1em\n\tcolor: white;\n\tbox-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n\tpadding: 0 1em;\n\tline-height: 2.5em;\n\ttext-align: center;\n\ttext-decoration: none;\n\tfont-size: 1em;\n\n\t:hover {\n\t\tbackground: white;\n\t\tcolor: black;\n\t}\n\t:active {\n\t\tbackground: ",";\n\t\tcolor: white;\n\t}\n\n"]);return D=function(){return e},e}var z=f.default.div(D(),F.buttonBackground,F.active);var C=function(e){return a.a.createElement(z,null,e.value)};function q(){var e=Object(h.a)(["\nfont-size: 1.5rem; \ntext-align: center;\n"]);return q=function(){return e},e}function I(){var e=Object(h.a)(["\nfloat: right;\n"]);return I=function(){return e},e}function T(){var e=Object(h.a)(["\nfloat: left;\na {\n\ttext-decoration: none;\n}\n"]);return T=function(){return e},e}function B(){var e=Object(h.a)(["\nmargin: 0 auto;\nwidth: 100%;\noverflow-y: scroll;\n-webkit-overflow-scrolling: touch;\nheight: calc(100vh - 4rem);\n"]);return B=function(){return e},e}function H(){var e=Object(h.a)(["\n\tbox-sizing: border-box;\n  \tborder: none;\n  \tmargin: 0;\n  \tpadding: 0;\n  \twidth: 100%;\n  \theight: 250px;\n"]);return H=function(){return e},e}function M(){var e=Object(h.a)(["\n\tpadding: 0.5em 1em 3em 1em;\n\tposition: sticky;\n\ttop: 0;\n"]);return M=function(){return e},e}var U=f.default.div(M()),W=f.default.iframe(H()),P=f.default.div(B()),J=f.default.div(T()),N=f.default.div(I()),V=f.default.h1(q());function _(e){return a.a.createElement(V,null,"Loading...")}var G=function(e){var t=e.articleIsLoading?a.a.createElement(_,null):null;return a.a.createElement(P,e,a.a.createElement(U,e,a.a.createElement(J,null,a.a.createElement("a",{href:e.openArticle.outsideUrl,target:"_blank",rel:"noopener noreferrer"},a.a.createElement(C,{value:"Open on Wikipedia"}))),a.a.createElement(N,{onClick:e.handleCloseArticle},a.a.createElement(C,{value:"\xd7"}))),t,a.a.createElement(W,{title:"open-article",ref:e.iframeRef,src:"javascript:void(0);"}))},$={action:"query",format:"json",prop:"extracts|pageimages",generator:"random",exchars:"500",exlimit:"12",exintro:1,explaintext:1,pithumbsize:"200",pilimit:"12",grnnamespace:"0",grnlimit:"12",origin:"*"};var K=function(){return new Promise(function(e,t){fetch(function(e){var t="https://en.wikipedia.org/w/api.php?";return Object.keys(e).forEach(function(n){t+="&"+n+"="+e[n]}),t}($)).then(function(e){if(e.ok)return e.json();throw new Error}).then(function(t){var n={error:!1,articles:[]};Object.keys(t.query.pages).forEach(function(e){n.articles.push({pageid:e,title:t.query.pages[e].title,image:t.query.pages[e].thumbnail?t.query.pages[e].thumbnail.source:null,extract:t.query.pages[e].extract,url:"https://en.wikipedia.org/api/rest_v1/page/mobile-html/"+t.query.pages[e].title,outsideUrl:"https://en.wikipedia.org/wiki/"+t.query.pages[e].title})}),e(n)}).catch(function(e){t({error:e})})})};var Q=function(e){return new Promise(function(t,n){fetch(e).then(function(e){if(e.ok)return e.text();throw new Error}).then(function(e){var n={error:!1,article:(new DOMParser).parseFromString(e,"text/html")};t(n)}).catch(function(e){n({error:e})})})};function X(){var e=Object(h.a)(["\n html, body {\n   box-sizing: border-box;\n   height: 100%;\n   font-family: Verdana, sans-serif;\n   font-size: 16px;\n   line-height: 1.5;\n   background: #E5E5E5\n}\n\n *,\n *::before,\n *::after {\n   box-sizing: inherit;\n}\n"]);return X=function(){return e},e}var Y=Object(f.createGlobalStyle)(X()),Z=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={randomArticles:[],randomArticlesLoading:!1,randomArticlesError:!1,randomArticlesScrollDistance:0,openArticle:!1,articleIsLoading:!0},n.iframeRef=a.a.createRef(),n.randomArticlesRef=a.a.createRef(),n.handleOpenArticle=n.handleOpenArticle.bind(Object(m.a)(Object(m.a)(n))),n.handleCloseArticle=n.handleCloseArticle.bind(Object(m.a)(Object(m.a)(n))),n.handleFetchRandomArticles=n.handleFetchRandomArticles.bind(Object(m.a)(Object(m.a)(n))),n.handleRandomArticlesScroll=n.handleRandomArticlesScroll.bind(Object(m.a)(Object(m.a)(n))),n.handleReload=n.handleReload.bind(Object(m.a)(Object(m.a)(n))),n}return Object(s.a)(t,e),Object(l.a)(t,[{key:"handleFetchRandomArticles",value:function(){var e=this;this.setState({randomArticlesLoading:!0}),K().then(function(t){e.setState({randomArticles:e.state.randomArticles.concat(t.articles),randomArticlesLoading:!1})}).catch(function(t){e.setState({randomArticles:[],randomArticlesError:t.error,randomArticlesLoading:!1})})}},{key:"handleRandomArticlesScroll",value:function(e){.8*(e.target.scrollHeight-e.target.scrollTop)<=e.target.clientHeight&&!1===this.state.randomArticlesLoading&&this.handleFetchRandomArticles()}},{key:"handleOpenArticle",value:function(e){var t=this;this.setState({randomArticlesScrollDistance:this.randomArticlesRef.current.scrollTop,openArticle:e,articleIsLoading:!0}),this.setState({openArticle:e,articleIsLoading:!0},function(){Q(e.url).then(function(e){t.iframeRef.current.contentDocument.open(),t.iframeRef.current.contentDocument.write(e.article.documentElement.innerHTML),t.iframeRef.current.contentDocument.close(),t.iframeRef.current.contentDocument.addEventListener("DOMContentLoaded",function(){t.iframeRef.current.style.height=t.iframeRef.current.contentDocument.documentElement.scrollHeight.toString()+"px",t.setState({articleIsLoading:!1})})})})}},{key:"handleCloseArticle",value:function(){var e=this;this.setState({openArticle:!1},function(){e.randomArticlesRef.current.scrollTop=e.state.randomArticlesScrollDistance})}},{key:"handleReload",value:function(){this.setState({randomArticles:[]}),this.handleFetchRandomArticles()}},{key:"componentDidMount",value:function(){this.handleFetchRandomArticles(),this.randomArticlesRef.current.scrollTop=this.state.randomArticlesScrollDistance}},{key:"render",value:function(){var e;return e=this.state.openArticle?a.a.createElement(G,{iframeRef:this.iframeRef,articleIsLoading:this.state.articleIsLoading,handleCloseArticle:this.handleCloseArticle,openArticle:this.state.openArticle}):a.a.createElement(L,{randomArticles:this.state.randomArticles,randomArticlesError:this.state.randomArticlesError,randomArticlesRef:this.randomArticlesRef,handleFetchRandomArticles:this.handleFetchRandomArticles,handleRandomArticlesScroll:this.handleRandomArticlesScroll,handleOpenArticle:this.handleOpenArticle}),a.a.createElement(a.a.Fragment,null,a.a.createElement(g.Normalize,null),a.a.createElement(Y,null),a.a.createElement(w,{handleReload:this.handleReload}),e)}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.eb2432c4.chunk.js.map
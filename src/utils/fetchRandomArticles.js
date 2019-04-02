const queryJSON = {
	"action": "query",
	"format": "json",
	"prop": "extracts|pageimages",
	"generator": "random",
	"exchars": "500",
	"exlimit": "12",
	"exintro": 1,
	"explaintext": 1,
	"pithumbsize": "200",
	"pilimit": "12",
	"grnnamespace": "0",
	"grnlimit": "12",
	"origin": "*"
};

function createAPIurl(obj){
	var result = "https://en.wikipedia.org/w/api.php?";
	Object.keys(obj).forEach(function(queryKey){
		result += "&" + queryKey + "=" + obj[queryKey];
	});
	return result;
}


function fetchRandomArticles(){
	return new Promise((resolve, reject)=> {
		fetch(createAPIurl(queryJSON))
		.then(response => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error();
			}
		})
		.then(fetchedData => {
			let result = {
				error: false,
				articles: [],
			};
			Object.keys(fetchedData.query.pages).forEach(articleDataId =>{
				result.articles.push({
					pageid: articleDataId,
					title: fetchedData.query.pages[articleDataId].title,
					image: fetchedData.query.pages[articleDataId].thumbnail ?
						fetchedData.query.pages[articleDataId].thumbnail.source : null,
					extract: fetchedData.query.pages[articleDataId].extract,
					url: "https://en.wikipedia.org/api/rest_v1/page/mobile-html/" +
						fetchedData.query.pages[articleDataId].title,
					outsideUrl: "https://en.wikipedia.org/wiki/" +
						fetchedData.query.pages[articleDataId].title,
				});
			});
			resolve(result);
		})
		.catch(error => {
			reject({error: error});
		});
	});
}

export default fetchRandomArticles;
function fetchArticle(url){
	return new Promise((resolve, reject) => {
		fetch(url)
		.then(response => {
			if (response.ok) {
				return response.text();
			} else {
				throw new Error();
			}
		})
		.then(fetchedData => {
			let result = {
				error: false,
				article: new DOMParser().parseFromString(fetchedData, "text/html"),
			} 
			resolve(result);
		}).catch(error => {
			reject({error: error});
		});
	});
}
export default fetchArticle;
export function getMovieQueryID() {
	const url = window.location.href.split('/');
	var id = '';
	// Search for movie url and return movieID from url
	for (let i = 0; i < url.length - 1; i++) {
		url[i] === 'movie' ? id = url[i+1] : null;
	}
	return id;
}	
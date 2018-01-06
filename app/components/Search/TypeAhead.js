import React from 'react';


class TypeAhead extends React.Component {

	constructor() {
		super();
		this.state = {
			searchResults: false
		}
	}

	componentWillReceiveProps() {
		
	}

	componentDidMount(props) {

		const apiKey = "1ae83ca4d8a91826db50f652ef3e24de";
		const getSearchQuery = "https://api.themoviedb.org/3/search/multi?api_key=" + apiKey + "&query=" + this.props.query;

		// Get search input query results to dropdown
		fetch(getSearchQuery)
		.then(data => data.json())
		.then(data => {
			this.setState({
				searchResults: data.results
			})
		});

	}

	render() {
		const searchItem = this.state.searchResults;
		if (this.state.searchResults) {
			return(
				<div className="typeahead-form">
					<ol>
						{ 
							Object.keys(this.state.searchResults).map(key => 
								<li key={key}>
									<i className="fa fa-search" aria-hidden="true"></i>
									<p>{searchItem[key].title}</p>
								</li>
							)
						}
					</ol>
				</div>
			)
		} else {
			return('');
		}
	}
}

export default TypeAhead;

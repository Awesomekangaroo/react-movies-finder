import React from 'react';

const apiKey = "1ae83ca4d8a91826db50f652ef3e24de";

class TypeAhead extends React.Component {

	constructor() {
		super();
		this.state = {
			searchResults: false
		}
		this.getSearchQuery = this.getSearchQuery.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.getSearchQuery(nextProps);
	}

	componentDidMount(props) {
		// Get initial search input query results to dropdown
		const searchQueryUrl = "https://api.themoviedb.org/3/search/multi?api_key=" + apiKey + "&query=" + this.props.query;

		fetch(searchQueryUrl)
		.then(data => data.json())
		.then(data => {
			this.setState({
				searchResults: data.results
			})
		});
	}

	getSearchQuery(nextProps) {
		// Get sequential search input query results.
		const searchQueryUrl = "https://api.themoviedb.org/3/search/multi?api_key=" + apiKey + "&query=" + nextProps.query;

		fetch(searchQueryUrl)
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
					<h3>Search results: {this.props.query}</h3>
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

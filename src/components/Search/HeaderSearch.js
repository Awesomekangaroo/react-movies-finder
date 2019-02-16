import React from 'react';
import TypeAhead from './TypeAhead';

class HeaderSearch extends React.Component {

	constructor() {
		super();
		this.state = {
			characters: 0,
			query: ''
		}
		this.getCharacterCount = this.getCharacterCount.bind(this);
	}

	render() {
		return(
			<div id="header-search" className={this.props.addActiveClass2 ? 'active': ''}>
				<form className="header-search__form" role="search">
					<input className="header-search__input" type="search" placeholder="Search" title="search movie database" ref={val => this.input = val} onChange={this.getCharacterCount} />
				</form>
				{this.state.characters > 1 ? <TypeAhead query={this.state.query} /> : ''}
			</div>
		)
	}

	getCharacterCount(e) {
		// Allow search query on change
		if (this.input.value.length > 1) {
			this.setState({
				characters: this.input.value.length,
				query: this.input.value
			})
		} else {
			this.setState({
				characters: 0,
				query: ''
			})
		}
	}
}

export default HeaderSearch;

import React from 'react';
import TypeAhead from './TypeAhead';

class HeaderSearch extends React.Component {

	constructor() {
		super();
		this.state = {
			characters: 0
		}
		this.getCharacterCount = this.getCharacterCount.bind(this);
	}

	render() {
		return(
			<div id="header-search" className={this.props.addActiveClass2 ? 'active': ''}>
				<form className="header-search__form" role="search">
					<input className="header-search__input" type="search" placeholder="Search ..." title="search movie database" ref={c => this.input = c} onChange={this.getCharacterCount} />
				</form>
				<TypeAhead />
			</div>
		)
	}

	getCharacterCount(e) {
		this.setState({
			characters: this.input.value.length
		})
	}
}

export default HeaderSearch;

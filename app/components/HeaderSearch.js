import React from 'react';

class HeaderSearch extends React.Component {
	render() {
		return(
			<div id="header-search" className={this.props.addActiveClass2 ? 'active': ''}>
				<form role="search">
					<input className="header-search__input" type="search" placeholder="Search ..." title="search movie database"/>
				</form>
			</div>
		)
	}
}

export default HeaderSearch;

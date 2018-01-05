import React from 'react';
import NavMenu from './NavMenu';
import HeaderSearch from './Search/HeaderSearch';

class Header extends React.Component {
	constructor() {
		super();
		// check if search and menu have active class
		this.state = { 
			isNavActiveOn: false,
			isSearchActiveon: false
		}
		this.addActiveClass = this.addActiveClass.bind(this);
		this.addActiveClass2 = this.addActiveClass2.bind(this);
	}

	addActiveClass(e) {
		// add or remove class on click
		this.setState(prevState => ({
			isNavActiveOn: !prevState.isNavActiveOn,
		}));
	}

	addActiveClass2(e) {
		this.setState(prevState => ({
			isSearchActiveon: !prevState.isSearchActiveon
		}));
	}

	render() {
		return(
			<div className="nav-header">
				<div className="search-container" onClick={e=> this.addActiveClass2(e)}>
					<i className="fa fa-search" aria-hidden="hidden"></i>
				</div>
				<HeaderSearch addActiveClass2={ this.state.isSearchActiveon } />
				<nav>
					<div id="mobile-menu" onClick={e=> this.addActiveClass(e)} >
						<i className="fa fa-bars" aria-hidden="hidden"></i>
					</div>
					<NavMenu addActiveClass={ this.state.isNavActiveOn } />
				</nav>
			</div>
		)
	}
}

export default Header;
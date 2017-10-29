import React from 'react';
import NavMenu from './NavMenu';

class Header extends React.Component {
	constructor() {
		super();
		// check if search and menu have active class
		this.state= { isActiveOn: false }
		this.addActiveClass = this.addActiveClass.bind(this);
	}

	addActiveClass(e) {
		// add or remove class on click
		this.setState(prevState=> ({
			isActiveOn: !prevState.isActiveOn
		}));
	}

	render() {
		return(
			<div className="nav-header">
				<div className="search-container">
					<i className="fa fa-search" aria-hidden="hidden"></i>
				</div>
				<nav>
					<div id="mobile-menu" className={this.state.isActiveOn ? 'active' : ''} onClick={e=> this.addActiveClass(e)} >
						<i className="fa fa-bars" aria-hidden="hidden"></i>
					</div>
					<NavMenu addActiveClass={ this.state.isActiveOn } />
				</nav>
			</div>
		)
	}
}

export default Header;
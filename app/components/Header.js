import React from 'react';
import NavMenu from './NavMenu';

class Header extends React.Component {
	render() {
		return(
			<div className="nav-header">
				<div className="search-container">
					<i className="fa fa-search" aria-hidden="hidden"></i>
				</div>
				<nav>
					<div className="mobile-menu">
						<i className="fa fa-bars" aria-hidden="hidden"></i>
					</div>
				</nav>
			</div>
		)
	}
}

export default Header;
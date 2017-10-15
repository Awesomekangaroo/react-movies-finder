import React from 'react';
import NavMenu from './NavMenu';

class Header extends React.Component {
	constructor() {
		super();
		this.state= { isActiveOn: false, isActiveOn2: true }
		// this.addActiveClass = this.addActiveClass.bind(this);
	}
	addActiveClass(e) {
		this.setState(prevState=> ({
			isActiveOn: !prevState.isActiveOn,
			isActiveOn2: !prevState.isActiveOn2
		}));
	}
	render() {
		return(
			<div className="nav-header">
				<div className={"search-container" + (this.state.isActiveOn ? ' active' : '')} onClick={e=> this.addActiveClass(e)}>
					<i className="fa fa-search" aria-hidden="hidden"></i>
				</div>
				<nav>
					<div id="mobile-menu" className={this.state.isActiveOn2 ? 'active' : ''} onClick={e=> this.addActiveClass(e)} >
						<i className="fa fa-bars" aria-hidden="hidden"></i>
					</div>
					<NavMenu />
				</nav>
			</div>
		)
	}
}

export default Header;
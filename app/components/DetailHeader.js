import React from 'react';
import NavMenu from './NavMenu';
import { Link } from 'react-router-dom';

class DetailHeader extends React.Component {

	constructor() {
		super();
		this.state= {
			isNavActiveOn: false
		}

		this.addActiveClass = this.addActiveClass.bind(this);
	}

	addActiveClass() {
		// add or remove class on click
		this.setState(prevState => ({
			isNavActiveOn: !prevState.isNavActiveOn,
		}));
	}

	render() {
		return(
			<div className="nav-header--detail">
				{/* Add back arrow to previous state */}
				<div className="mobile-return--btn">
					<i className="fa fa-chevron-left" aria-hidden="hidden"></i>
				</div>
				<nav>
					<div id="mobile-menu" onClick={e=> this.addActiveClass(e)} >
						<i className="fa fa-bars" aria-hidden="hidden"></i>
					</div>
					<NavMenu addDetailClass={ this.state.isNavActiveOn } />
				</nav>
			</div>
		)
	}

}

export default DetailHeader;

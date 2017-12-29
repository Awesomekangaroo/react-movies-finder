import React from 'react';

class NavMenu extends React.Component {
	render() {
		return(
			<div className={"nav-menu__container" + ((this.props.addActiveClass) ? ' active' : (this.props.addDetailClass) ? ' active detail' : '')}>
				<ul className="nav-menu__main">
					<li>
						<a href="">Search</a>
					</li>
					<li>
						<a href="">Movies</a>
					</li>
					<li>
						<a href="">Discover TV Shows</a>
					</li>
					<li>
						<a href="">Latest</a>
					</li>
				</ul>
				<ul className="nav-menu__about">
					<li>
						<a href="">About the API</a>
					</li>
					<li>
						<a href="">More about developer</a>
					</li>
				</ul>
				<div className="attribute-credits">
					<img src="https://www.themoviedb.org/assets/static_cache/27b65cb40d26f78354a4ac5abf87b2be/images/v4/logos/powered-by-rectangle-green.svg" alt="The Movie DB logo"/>
				</div>
			</div>
		)
	}
}

export default NavMenu;
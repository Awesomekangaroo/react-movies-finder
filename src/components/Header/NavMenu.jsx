import React from 'react'
import { Link } from 'react-router-dom'

class NavMenu extends React.Component {
	render() {
		return(
			<div className={"nav-menu__container" + ((this.props.addActiveClass) ? ' active' : (this.props.addDetailClass) ? ' active detail' : '')}>
				<ul className="nav-menu__main">
					<li>
						<Link to={{pathname: '/'}}>
							Home
						</Link>
					</li>
					<li>
						<a href="http://www.themoviedb.org" target="_blank">Movies</a>
					</li>
				</ul>
				<ul className="nav-menu__about">
					<li>
						<a href="https://developers.themoviedb.org/3" target="_blank">About the API</a>
					</li>
					<li>
						<a href="https://www.eloydev.com">More about developer</a>
					</li>
				</ul>
				<div className="attribute-credits">
					<img src="https://www.themoviedb.org/assets/static_cache/27b65cb40d26f78354a4ac5abf87b2be/images/v4/logos/powered-by-rectangle-green.svg" alt="The Movie DB logo"/>
				</div>
			</div>
		)
	}
}

export default NavMenu
import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ReactComponent as AttributionLogo } from '../../static/images/tmdb-attribution.svg'

class NavMenu extends PureComponent {
	componentDidMount() {
		this.navContainer && this.navContainer.focus()
	}

	render() {
		const { toggleMenu } = this.props

		return (
			<div
				className="nav-menu__container"
				onKeyDown={e => e.key === 'Escape' && toggleMenu()}
				ref={container => this.navContainer = container}
			>
				<ul className="nav-menu__top">
					<li>
						<Link to={'/'}>
							Home
						</Link>
					</li>
					<li>
						<a href="http://www.themoviedb.org" target="_blank" rel="noopener noreferrer">Movies</a>
					</li>
					<li>
						<a href="https://developers.themoviedb.org/3" target="_blank" rel="noopener noreferrer">About the API</a>
					</li>
				</ul>

				<div className="attribute-credits">
					<AttributionLogo role="img" title="The Movie DB logo" />
				</div>
			</div>
		)
	}
}

NavMenu.propTypes = {
	toggleMenu: PropTypes.func
}

export default NavMenu
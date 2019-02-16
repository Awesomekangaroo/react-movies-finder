import React from 'react';

class ShareButtons extends React.Component {
	constructor() {
		super();
		this.state = {

		}
		this.renderSocialIcons = this.renderSocialIcons.bind(this);
	}

	renderSocialIcons(key) {
		// Display social icons based on props argument
		const icons = this.props.icons;
		return(
			<li key={key}>
				<i className={`fa fa-${icons[key]}`} aria-hidden="hidden"></i>
			</li>
		)
	}

	render() {
		return(
			<div className="share-social">
				<ul>
					{ Object.keys(this.props.icons).map(this.renderSocialIcons) }
				</ul>
			</div>
		)
	}
}

export default ShareButtons;
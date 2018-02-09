import React from 'react';
import PropTypes from 'prop-types';

class OpenModal extends React.Component {
	constructor() {
		super();
		this.state = {
			isOpen: false
		}
		// this.toggleBackdrop = this.toggleBackdrop.bind(this);
	}

	// componentWillUpdate(nextProps, nextState) {
	// 	if (nextProps.show) {
	// 		this.toggleBackdrop();
	// 	}
	// 	console.log('From will update: '+ nextState);
	// }

	// toggleBackdrop(index) {
	// 	// If preview image clicked add backdrop, else remove backdrop
	// 	const modalBackdrop = document.createElement('div');
	// 	modalBackdrop.className = "modal-backdrop";

	// 	if (!this.state.isOpen) {
	// 		document.body.prepend(modalBackdrop);
	// 		console.log('First block');
	// 		this.setState({ isOpen: true });
	// 	} else if (this.state.isOpen) {
	// 		const backdrop = document.body.querySelectorAll('.modal-backdrop');
	// 		console.log(backdrop, 'Second block');
	// 		backdrop[0].parentNode.removeChild(backdrop[0]);
	// 	}
	// }

	render() {

		if (!this.props.show) {
			return null;
		}

		return(
			<div className="trailer-modal">
				<header>
					<div className="trailer-modal__header">
						<p>{this.props.video.name}</p>
						<button onClick={this.props.close}>
							<span>close</span>
						</button>
					</div>
				</header>
				<div className="trailer-modal__content">
					<iframe src={"http://www.youtube.com/embed/" + this.props.video.key} allowFullScreen="allowFullScreen" frameBorder="0"></iframe>
				</div>
			</div>
		);
	}
}

export default OpenModal;

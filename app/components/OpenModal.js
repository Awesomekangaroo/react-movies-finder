import React from 'react';
import PropTypes from 'prop-types';

class OpenModal extends React.Component {

	render() {

		if(!this.props.show) {
			return null;
		}
		
		return(
			<div className="trailer-modal">
				<div className="trailer-modal__header">
					<button>
						<span>close</span>
					</button>
				</div>
				<div className="trailer-modal__content">
					<iframe src={"http://www.youtube.com/embed/" + this.props.video.key} allowFullScreen></iframe>
				</div>
			</div>
		);
	}
}

OpenModal.propTypes = {
	show: PropTypes.bool,
	children: PropTypes.node
};

export default OpenModal;

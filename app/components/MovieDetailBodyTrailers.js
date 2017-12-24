import React from 'react';
import OpenModal from './OpenModal';

class MovieDetailBodyTrailers extends React.Component {
	constructor(props) {
		super(props);
		this.state = { activeModal: false, isOpen: false };

		this.toggleModal = this.toggleModal.bind(this);
		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler(e, index) {
		// If modal not active, remove backdrop
		console.log(this.state);

		this.setState({ 
			activeModal: index,
			isOpen: true
		});

		if (this.state.isOpen === false) {
			const modalBackdrop = document.createElement('div');
			modalBackdrop.className = "modal-backdrop";
			document.body.appendChild(modalBackdrop);
		} else {
			const modalBackdrop = document.querySelector(".modal-backdrop");
			modalBackdrop.parentNode.removeChild(modalBackdrop);
		}

		console.log(this.state);

	}

	toggleModal() {
		// Change to show modal
		this.setState({
			activeModal: false,
			isOpen: false
		});
	}

	render() {
		return(
			<ul>
				{
					Object.keys(this.props.videos).map(key =>
						<li key={key} className="movie-trailers__carousel--item" onClick={(e) => this.clickHandler(e, key)}>
							{/* Open modal on click */}
							<img src={"https://i.ytimg.com/vi/" + this.props.videos[key].key + "/sddefault.jpg"} alt={this.props.videos[key].name} />
							<OpenModal
								video={this.props.videos[key]}
								show={this.state.activeModal === key}
								onClick={this.toggleModal}
							/>
						</li>
					)
				}
			</ul>
		)
	}
}

export default MovieDetailBodyTrailers;
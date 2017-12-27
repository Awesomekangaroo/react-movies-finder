import React from 'react';
import OpenModal from './OpenModal';

class MovieDetailBodyTrailers extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeModal: false,
			isOpen: false
		};

		this.toggleModal = this.toggleModal.bind(this);
		this.clickHandler = this.clickHandler.bind(this);
		this.renderTrailerVideos = this.renderTrailerVideos.bind(this);
	}

	clickHandler(e, index) {
		
		// If modal not active, remove backdrop
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
	}

	toggleModal(event) {
		// Change to show modal
		this.setState({
			activeModal: false,
			isOpen: false
		});
	}

	renderTrailerVideos(key) {
		const trailer = this.props.videos.results;
		return(
			<li key={key} className="movie-trailers__carousel--item" onClick={(e) => this.clickHandler(e, key)}>
				{/* Open modal on click */}
				<img src={"https://i.ytimg.com/vi/" + trailer[key].key + "/sddefault.jpg"} alt={trailer[key].name} />
				<OpenModal
					video={trailer[key]}
					show={this.state.activeModal === key}
					isOpen={this.state.isOpen}
					toggleModal={this.toggleModal}
				/>
			</li>
		)
	}

	render() {
		return(
			<div className="container">
				<section>
					<div id="trailers" className="movie-trailers__container">
						<h3>Trailers</h3>
						<div className="movie-trailers__carousel">
							<ul>
								{ Object.keys(this.props.videos.results).map(this.renderTrailerVideos) }
							</ul>
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default MovieDetailBodyTrailers;
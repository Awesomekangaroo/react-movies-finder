import React from 'react';
import OpenModal from './OpenModal';

class MovieDetailBodyTrailers extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeModal: false,
			isOpen: false
		};

		this.closeModal = this.closeModal.bind(this);
		this.toggleBackdrop = this.toggleBackdrop.bind(this);
		this.renderTrailerVideos = this.renderTrailerVideos.bind(this);
	}

	toggleBackdrop(index) {
		const modalBackdrop = document.createElement('div');
		modalBackdrop.className = "modal-backdrop";

		// If preview image clicked add backdrop, else remove backdrop
		if (!this.state.isOpen) {
			document.body.prepend(modalBackdrop);
			console.log('First block');
		} else {
			const backdrop = document.body.querySelectorAll('.modal-backdrop');
			backdrop[0].parentNode.removeChild(backdrop[0]);
			console.log(backdrop, 'Second block');
		}

		this.setState({ 
			activeModal: index,
			isOpen: true
		});
	}

	closeModal() {
		// Change to show modal
		console.log('you invoked closeModal');

		this.setState({
			isOpen: false
		});

		// Invoke method to remove backdrop
		this.toggleBackdrop();
	}

	componentWillUnmount() {
		// Remove backdrop on page leave
		// this.toggleBackdrop();
	}

	renderTrailerVideos(key) {
		const trailer = this.props.videos.results;
		return(
			<div key={key} className="movie-trailers__carousel--item">
				<li onClick={() => this.toggleBackdrop(key)}>
					{/* Open modal on click */}
					<img src={"https://i.ytimg.com/vi/" + trailer[key].key + "/sddefault.jpg"} alt={trailer[key].name} />
				</li>
				<OpenModal
					video={ trailer[key] }
					show={ this.state.activeModal === key }
					closeModal={ this.closeModal }
				/>
			</div>
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
import React from 'react';
import OpenModal from './OpenModal';

class MovieDetailBodyTrailers extends React.Component {

	constructor() {
		super();
		this.openModal = this.openModal.bind(this);
		this.displayTrailers = this.displayTrailers.bind(this);

		this.state = {
			showModal: false,
			showOverlay: false
		};
	}

	openModal(e) {
		e.target.preventDefault();
		console.log(e);
		// Change to show modal
		this.setState(prevState => ({
			showModal: !prevState.showModal
		}));
	}

	displayTrailers(props) {
		const trailers = [];
		props.forEach(function(item) {
			trailers.push(<li key={item} className="movie-trailers__carousel--item" onClick={ (e)=> this.openModal(e) }>
					{/* Open modal on click */}
					{/*<iframe src={"http://www.youtube.com/embed/" + item.key} allowfullscreen></iframe>*/}
					<img src={"https://i.ytimg.com/vi/" + item.key + "/sddefault.jpg"} alt={item.site + item.type + " - " + item.name}/>
				</li>)
			}
		)
		return trailers;
	}

	render() {
		return(
			<div className="container">
				<section>
					<div id="trailers" className="movie-trailers__container">
						<h3>Trailers</h3>
						<div className="movie-trailers__carousel">
							<ul>
								{ this.displayTrailers(this.props.videos) }
								{ this.state.showModal ? <OpenModal details={this.props.videos} /> : false }
							</ul>
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default MovieDetailBodyTrailers;
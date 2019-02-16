import React from 'react'
import OpenModal from './../OpenModal'

class MovieDetailBodyTrailers extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			activeModal: false
		}
		this.renderTrailerVideos = this.renderTrailerVideos.bind(this)
		this.closeModal = this.closeModal.bind(this)
	}

	closeModal() {
		this.setState({
			activeModal: false
		})
	}

	renderTrailerVideos(key) {
		const trailer = this.props.videos.results
		return(
			<div key={key} className="movie-trailers__carousel--item">
				<li onClick={() => this.setState({ activeModal: key })}>
					<img src={"https://i.ytimg.com/vi/" + trailer[key].key + "/sddefault.jpg"} alt={trailer[key].name} />
				</li>
				<OpenModal
					video={ trailer[key] }
					show={ this.state.activeModal === key }
					close={ this.closeModal }
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

export default MovieDetailBodyTrailers
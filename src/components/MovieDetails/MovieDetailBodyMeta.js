import React from 'react';

class MovieDetailBodyMeta extends React.Component {
	render() {
		const details = this.props.info;
		return(
			<div className="container">
				<div className="movie-body__meta--container movie-body__information">
					<ul className="movie-body__meta--items">
						<li>
							<div className="movie-body__meta--label">
								<span>Release Date: </span>
							</div>
							<div className="movie-body__meta--info">
								<span>{details.release_date} ({details.status})</span>
							</div>
						</li>
						<li>
							<div className="movie-body__meta--label">
								<span>Language: </span>
							</div>
							<div className="movie-body__meta--info">
								<span>{details.original_language === 'en' ? 'English' : details.original_language }</span>
							</div>
						</li>
						<li>
							<div className="movie-body__meta--label">
								<span>Country of Origin: </span>
							</div>
							<div className="movie-body__meta--info">
								<span>USA</span>
								<i className="fa fa-flag" aria-label="hidden"></i>
							</div>
						</li>
						<li>
							<div className="movie-body__meta--label">
								<span>Runtime: </span>
							</div>
							<div className="movie-body__meta--info">
								<span>{details.runtime} mins</span>
							</div>
						</li>
						<li>
							<div className="movie-body__meta--label">
								<span>Budget: </span>
							</div>
							<div className="movie-body__meta--info">
								<span>{details.budget}</span>
							</div>
						</li>
						<li>
							<div className="movie-body__meta--label">
								<span>Revenue: </span>
							</div>
							<div className="movie-body__meta--info">
								<span>{details.revenue}</span>
							</div>
						</li>
						<li>
							<div className="movie-body__meta--label">
								<span>Visit homepage: </span>
							</div>
							<div className="movie-body__meta--info">
								<a className="primary-link" target="_blank" href={details.homepage} title={"Visit homepage of" + details.title}>{details.title}</a>
							</div>
						</li>
						<li>
							<div className="movie-body__meta--label">
								<span>Companies: </span>
							</div>
							<div className="movie-body__meta--info">
								{ details.production_companies.map(item => <p key={item.id}>{item.name}</p>) }
							</div>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default MovieDetailBodyMeta;
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';

import App from './components/App';
import NotFound from './components/NotFound';
import MovieDetail from './components/MovieDetails/MovieDetail';

const Root = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={App} />
				<Route path="/movie/:title" component={MovieDetail} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	)
}

render(<Root />, document.getElementById('root'));

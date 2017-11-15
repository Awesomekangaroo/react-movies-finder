import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import IndexHome from './components/IndexHome';
import NotFound from './components/NotFound';
import MovieDetail from './components/MovieDetail';

const Root = () => {
	return(
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={App} />
				<Route path="/movie/:title" component={MovieDetail} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	)
}

render(<Root />, document.getElementById('app'));

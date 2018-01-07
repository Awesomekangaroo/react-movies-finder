import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './components/App';
import IndexHome from './components/IndexHome';
import NotFound from './components/NotFound';
import MovieDetail from './components/MovieDetail';
import css from './css/style.scss';

const Root = () => {
	return(
		<HashRouter>
			<Switch>
				<Route exact path="/" component={App} />
				<Route path="/movie/:title" component={MovieDetail} />
				<Route component={NotFound} />
			</Switch>
		</HashRouter>
	)
}

render(<Root />, document.getElementById('app'));

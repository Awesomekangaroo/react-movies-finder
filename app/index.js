import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import IndexHome from './components/IndexHome';
import NotFound from './components/NotFound';

const Root = () => {
	return(
		<BrowserRouter>
			<Switch>
					<Route path="/" exact component={App} />
					<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	)
}

render(<Root />, document.getElementById('app'));

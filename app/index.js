import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import App from './components/App';
import NotFound from './components/NotFound';

const Root = () => {
	return(
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={MovieIndexFeed} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	)
}

render(<App />, document.getElementById('app'));
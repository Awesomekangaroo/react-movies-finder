import React from 'react';
import Routes from '../index';
import Header from './Header';
import IndexHome from './IndexHome';

class App extends React.Component {
	constructor() {
		super();
	}

	render() {
		return(
			<div className="react-app">
				<Header />
				<div className="index-container">
					<IndexHome />
				</div>
			</div>
		)
	}
}

export default App;
import React from 'react';
import Routes from '../index';
import Header from './Header';
import IndexHome from './IndexHome';
import Footer from './Footer';

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
				<Footer />
			</div>
		)
	}
}

export default App;
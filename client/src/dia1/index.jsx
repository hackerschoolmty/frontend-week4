require("../../../node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react';
import ReactDOM from 'react-dom';
import Parent from './components/Parent';

export class App extends React.Component {

	render() {
		return (
			<div className="container">
				<div className="jumbotron">
					<h1>React Basico</h1>
					<p>Ejemplo basico de React</p>
				</div>
				<div className="panel">
					<Parent />
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.getElementById("myApp"));

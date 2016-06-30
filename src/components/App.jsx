import React from 'react';
import { generateNewChat, generateNewMessage } from '../utils/chatHelper';

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
	        <div className="col s12">
	          <div className="card blue-grey darken-1">
							<div className="card-content white-text center-align">
	              <span className="card-title">React Chat</span>
	              <p>Ejemplo basico de React simulando un chat</p>
	            </div>
	            <div className="card-action">
								<a className="waves-effect waves-light btn">Generar Nuevo Chat</a>
								<a className="waves-effect waves-light btn">Enviar Mensaje Chat</a>
	            </div>
	          </div>
	        </div>
	      </div>
				<div className="row">
		      <div className="col s12 m4 l3">
						<div className="card orange darken-4">
							<div className="card-content white-text left-align">
	              <span className="card-title">Chats</span>
	            </div>
							<div className="collection">
				        <a className="collection-item">User 1</a>
				        <a className="collection-item">User 2</a>
				      </div>
	          </div>
		      </div>
		      <div className="col s12 m8 l9">
						<div className="card hoverable indigo darken-4">
							<div className="card-content white-text left-align">
	              <span className="card-title">User 1 Chat</span>
	            </div>
							<div className="card">
								<div className="card-content left-align">
									<div className="chip">
								    <b>User 1: </b>
										<text>Chatting...</text>
								  </div>
		            </div>
								<div className="card-content right-align">
									<div className="chip">
								    <b>You: </b>
										<text>Chatting...</text>
								  </div>
		            </div>
								<div className="card-action">
									<div className="row">
								    <form className="col s12">
							        <div className="input-field col s10">
							          <input type="text" />
							        </div>
											<div className="input-field col s2">
							          <a className="waves-effect waves-light btn">Enviar</a>
							        </div>
								    </form>
								  </div>
		            </div>
		          </div>
	          </div>
		      </div>
		    </div>
			</div>
		);
	}
}

export default App;

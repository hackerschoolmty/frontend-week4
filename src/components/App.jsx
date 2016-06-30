import React from 'react';
import { generateNewChat, generateNewMessage } from '../utils/chatHelper';

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<nav>
				  <div className="nav-wrapper red darken-1">
				    <a className="brand-logo right">React Chat</a>
				    <ul id="nav-mobile" className="left hide-on-med-and-down">
				      <li><a>Generar Nuevo Chat</a></li>
				      <li><a>Enviar Mensaje Chat</a></li>
							<li><a>Mensajes sin leer<span className="new badge">1</span></a></li>
				    </ul>
				  </div>
				</nav>
				<div className="row">
		      <div className="col s12 m4 l3">
						<div className="card orange darken-4">
							<div className="card-content white-text left-align">
	              <span className="card-title">Chats</span>
	            </div>
							<div className="collection">
				        <a className="collection-item">User 1</a>
				        <a className="collection-item">User 2<span className="new badge">1</span></a>
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
										<text>hey</text>
								  </div>
		            </div>
								<div className="card-content right-align">
									<div className="chip">
								    <b>You: </b>
										<text>hola</text>
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

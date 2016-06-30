import React from 'react';

class NavBar extends React.Component {
	render() {
		return (
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
		);
	}
}

export default NavBar;

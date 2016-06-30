import React from 'react';
import { generateNewChat, generateNewMessage } from '../utils/chatHelper';
import NavBar from './NavBar';
import ChatTable from './ChatTable';
import SideChat from './SideChat';

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<NavBar />
				<div className="row">
		      <SideChat />
		      <ChatTable />
		    </div>
			</div>
		);
	}
}

export default App;

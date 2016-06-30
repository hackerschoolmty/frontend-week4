import React from 'react';
import { generateNewChat, generateResponse } from '../utils/chatHelper';
import NavBar from './NavBar';
import ChatTable from './ChatTable';
import SideChat from './SideChat';

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<NavBar
					appTitle="React Chat"
					generateNewChat={generateNewChat}
					generateResponse={generateResponse}
				/>
				<div className="row">
		      <SideChat
						userList={['user_1', 'user_2']}
					/>
		      <ChatTable
						userName="user_1"
						messageList={[
							{
								userName: 'You',
								message: 'hey'
							},
							{
								userName: 'user_1',
								message: 'hola'
							}
						]}
					/>
		    </div>
			</div>
		);
	}
}

export default App;

import React from 'react';

class SideChat extends React.Component {
	render() {
		return (
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
		);
	}
}

export default SideChat;

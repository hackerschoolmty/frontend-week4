import React from 'react';

class ChatTable extends React.Component {
	render() {
		return (
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
		);
	}
}

export default ChatTable;

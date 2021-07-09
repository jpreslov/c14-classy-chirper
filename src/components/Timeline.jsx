import React, { Component } from 'react';
//rafce shortcut makes function component (requires ES7 extension)

export default class Timeline extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div id="chirp-card" className="row">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{this.props.chirp.username}</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

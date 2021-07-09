import React from 'react';
import Timeline from './components/Timeline'

class App extends React.Component {
  constructor(props) {
    super(props);

    // const [username, setUsername] = useState("")
    // setUsername() is the same as this.setState({ username: <your value here>})

    this.state = {
      username: '',
      message: '',
      chirps: [
        { username: 'Joel Biden', message: 'I got hairy legs' },
        { username: 'Mike Wazowski', message: 'Go ahead, kid. Go grow uip' },
        { username: 'Girlboss22', message: 'Rupi Kaur' },
      ],
    };
  }
  postChirp = (e) => {
    e.preventDefault();
    this.setState({
      chirps: [
        ...this.state.chirps,
        {
          username: this.state.username,
          message: this.state.message,
        },
      ],
    });
  };

  render() {
    return (
      <>
        <div className="container justify-content-center align-items-center text-center">
          <form className="col-sm d-flex justify-content-center rounded bg-primary p-3 m-4">
            <div className="col-4">
              <div className="form-group">
                <label className="text-white" htmlFor="usernameInput">
                  Username
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Username"
                  onChange={(e) => {
                    this.setState({ username: e.target.value });
                  }}
                />
              </div>

              <div className="form-group">
                <label className="text-white" htmlFor="msgInput">
                  Message
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Message"
                  onChange={(e) => {
                    this.setState({ message: e.target.value });
                  }}
                />
              </div>
              <div className="form-group mt-2">
                <input className="form-control " type="submit" value="Post chirp" onClick={this.postChirp} />
              </div>
            </div>
          </form>
          <div className="d-flex flex-column justify-content-center text-center col-6">

          {this.state.chirps.map((chirp, id) => <Timeline key={id} chirp={chirp} />)}
          </div>
        </div>

      </>
    );
  }
}

export default App;

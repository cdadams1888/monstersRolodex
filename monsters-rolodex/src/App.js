import logo from './logo.svg';
import './App.css';
import { Component } from 'react'

class App extends Component {
  constructor() {
      super();

      this.state = {
          name: { firstName: 'Chris', lastName: 'Adams' },
          company: 'Company Name'
      }
  }

    render() {
        return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Hi {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}</p>
                <button
                    onClick={() => {
                        this.setState(() => {
                            return {
                                name: {firstName: 'Foo', lastName: 'Bar'},
                            }
                        }, () =>  console.log(this.state))
                    }}
                >Change Name</button>
              </header>
            </div>
        )
  }
}

export default App;

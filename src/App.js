import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return <div className="App">Hello, World!</div>;
//   }
// }

class App extends Component {
  render() {
    return React.createElement(
      'div',
      null,
      'Hello, world!!!'
    )
  }
}

// function App() {
//   return (
//     <div className="App"><h1>Hello, World!</h1></div>
//   );
// }

export default App;

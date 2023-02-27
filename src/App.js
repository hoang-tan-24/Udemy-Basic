import logo from './logo.svg';
import './App.scss';
import MyComponent from './components/MyComponents';
import React from 'react';


class App extends React.Component {
  render() {
    return (
      <div className='app-container'>
        Hello world với Eric &amp; Hỏi Dân It
        <MyComponent></MyComponent>
      </div>
    );
  }
}
// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>


export default App;

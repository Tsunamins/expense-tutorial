import React from 'react';
//style sheet import to remember
//import './App.css';

class App extends React.Component {

  //an initial test, temporary, start with just data then check other aspects in this case data.transactions:
  componentDidMount(){
    fetch('http://localhost:3000/api/v1/accounts/1', {
    })
    .then(resp => resp.json())
    .then(data => console.log(data.transactions))
  
  }

  render(){
    return (
      <div className="App">
      App
      </div>
    );
   }
}

export default App;

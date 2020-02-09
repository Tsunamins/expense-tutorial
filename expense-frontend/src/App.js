import React from 'react';
//style sheet import to remember
//import './App.css';

class App extends React.Component {

  //an initial test, temporary:
  componentDidMount(){
    fetch('http://localhost:3000/api/v1/accounts', {
   
      

    })
    .then(resp => resp.json())
    .then(data => console.log(data[0]))
  
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

import React from 'react';
import {connect} from 'react-redux' //to allow dispatching actions to update store connection
//style sheet import to remember
//import './App.css';

class App extends React.Component {

  //an initial test, temporary, start with just data then check other aspects in this case data.transactions:
  // componentDidMount(){
  //   fetch('http://localhost:3000/api/v1/accounts/1', {
  //   })
  //   .then(resp => resp.json())
  //   .then(data => console.log(data))
  
  // }

  render(){
    return (
      <div className="App">
      App
      </div>
    );
   }
}

const mapStateToProps = (state) =>{
  return{
    accounts: state.accounts
  }

}
//connect can accept mapStateToProps, mapDispatchToProps, or a direct reference to an action

//export default connect(mapStateToProps, {fetchAccounts}) (App);

//ex however just mappping state to props:
//the return value of mapStateToProps is coming from store, access to see what is already in store
export default connect(mapStateToProps)(App);

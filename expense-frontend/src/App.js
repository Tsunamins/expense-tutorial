import React from 'react';
import {connect} from 'react-redux' //to allow dispatching actions to update store connection
import fetchAccounts from './actions/fetchAccounts'
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





//this connect automatically calls dispatch on the return value of fetchAccounts
export default connect(null, {fetchAccounts})(App); //can call this.props.fetchAccounts



//some explanations below:

// const mapStateToProps = (state) =>{
//   return{
//     accounts: state.accounts
//   }

// }




//connect can accept mapStateToProps, mapDispatchToProps, or a direct reference to an action
//export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default connect(mapStateToProps, {fetchAccounts})(App);
//above allows access to this.props.fetchAccounts
//params: (allow access to current store, allow dispatch actions to store)

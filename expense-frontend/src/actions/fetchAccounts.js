export function fetchAccounts() {
    //return dispatch (built in) as an argument, a thunk function 
    return (dispatch) => {
      fetch('http://localhost:3000/api/v1/accounts')
      .then(resp => resp.json())
      .then(accounts => dispatch({ //brought in here to wait for connection from backend, rather than automatcially dispatching in connect
        type: 'FETCH_ACCOUNTS',  //dispatch must have at least a type, 
        payload: accounts       //and since getting and using data they next key needed is payload
      }))
    }
  }

//what does this componenet need to send data that it will then update redux store?
// = dispatch an action
//in order to do so need to import connect in App.js
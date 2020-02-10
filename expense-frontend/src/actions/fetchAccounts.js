export function fetchAccounts() {
    return (dispatch) => {
      fetch('http://localhost:3000/api/v1/accounts')
      .then(resp => resp.json())
      .then(accounts => dispatch({
        type: 'FETCH_ACCOUNTS',
        payload: accounts
      }))
    }
  }

//what does this componenet need to send data that it will then update redux store?
// = dispatch an action
//in order to do so need to import connect in App.js
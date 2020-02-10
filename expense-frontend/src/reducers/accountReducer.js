//responsible for updating parts of store that have to do with accounts
//reducer - take in previous state, and an action, then will update based on action type
//reducer is a function, can also be setup as arrow
                                //set initial state to object, coming from actions, in this case getting accounts
export default function accountReducer(state = {accounts: []}, action) {
    switch (action.type) {
      case 'FETCH_ACCOUNTS':
        return {accounts: action.payload}
      case 'ADD_ACCOUNT':
        return {...state, accounts: [...state.accounts, action.payload]}
      case 'ADD_TRANSACTION':
        let accounts = state.accounts.map(account => {
          if (account.id === action.payload.id) {
            return action.payload
          } else {
            return account
          }
        })
        return {...state, accounts: accounts}
      case 'DELETE_TRANSACTION':
        let accountsTwo = state.accounts.map(account => {
          if (account.id === action.payload.id) {
            return action.payload
          } else {
            return account
          }
        })
        return {...state, accounts: accountsTwo}
      case 'EDIT_ACCOUNT':
        let accountsThree = state.accounts.map(account => {
          if (account.id === action.payload.id) {
            return action.payload
          } else {
            return account
          }
        })
        return {...state, accounts: accountsThree}
      default:
        return state
    }
  }
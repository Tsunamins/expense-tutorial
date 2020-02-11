import React from 'react'
import {Route, Link} from 'react-router-dom' //enables link tags
import Account from './Account'


//could add as a class compenent, but in project requirements, need 5 functional components
//so this will be a functional component example
//this component will render a list of accounts - what will be needed, how will it get those?  From the accountscontainer, accessed by keyword props
//class compoonent - props being passed can use this.props
//func component - have to pass as an argument, also do not use a render, and cannot use a render
const Accounts = (props) => {

  return (
    <div>
      {props.accounts.map(account =>
        <li key={account.id}>
          <Link to={`/accounts/${account.id}`}>{account.name} - ${account.balance}</Link>
        </li> )}
    </div>
    // before this looked as above, a basic passing in of account componnent was used:
    //<div>
    //  {props.accounts.map(account => 
    //    <li key={account.id}>Account account={account/></li>})}
    //</div>

  )
}

export default Accounts
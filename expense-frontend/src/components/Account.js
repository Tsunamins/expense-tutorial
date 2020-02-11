import React from 'react'
import {Redirect} from 'react-router-dom' //allow when acct doesn't exist
import AccountEdit from './AccountEdit'

import TransactionsContainer from '../containers/TransactionsContainer'


//a show page for one specific account, another functional component
//props allows access to Accounts
const Account = (props) => {

  console.log(props)
  // let account = props.accounts[props.match.params.id - 1]
  //gets id for url/route in AccountsContainer
  let account = props.accounts.filter(account => account.id == props.match.params.id)[0]

  console.log(account)
  return (

    <div>
      <h2>
          {/* but this below isn't the best idea bc only will work while navigating through links, so idea would be to revisit how to implement redirects */}
          {/* {account ? null : <Redirect to ='/accounts'/>} */}
          {/* below is setup this way if the first time it renders props are undefined */}
        {account ? account.name : null} - {account ? account.balance : null}
      </h2>
      {/* sending out assoc account to Trans cont */}
      <TransactionsContainer account={account}/><br/>
      <h4>Edit Account</h4>
      <AccountEdit account={account}/>
    </div>
  )


}

export default Account
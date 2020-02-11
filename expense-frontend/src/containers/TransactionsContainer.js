import React from 'react'
import TransactionInput from '../components/TransactionInput'
import Transactions from '../components/Transactions'

//typ won't need state as assoc with specific transactions
class TransactionsContainer extends React.Component {


  render() {
    return (
      <div>
         
          <TransactionInput account={this.props.account}/><br/>
          {/* is a check if this thing exists then move on to the next (after the &&) */}
          {/* the serializer in the backend allows for easy use of transactions assoc with an account */}
          <Transactions transactions={this.props.account && this.props.account.transactions}/>
      </div>

    )

  }

}

export default TransactionsContainer
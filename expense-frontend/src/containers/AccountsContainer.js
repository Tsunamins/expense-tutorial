//a container, renders other components, passes them data if approp, can have functions within, callback funcitons etc

import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom' //allows access to Route tag, bc all of this is wrapped in Router from index, switch allows a specific Route match
import {fetchAccounts} from '../actions/fetchAccounts'
import Accounts from '../components/Accounts'
import Account from '../components/Account'
import AccountInput from '../components/AccountInput'
import NavBar from '../components/NavBar'

class AccountsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchAccounts()
  }

  render() {
      return (
          <div>
              {/* initial component render is usual <AccountInput /> and <Accounts accounts={this.props.accounts} />, but code expands below for navigation */}
            <NavBar/>
            {/* wrapt switch around, will chose, on navigation, will chose first route that matches that path, so it will only show that refernced component */}
            <Switch>
              {/* the order of these matter, have to check for new first, otherwise won't show a needed new */}
              <Route path='/accounts/new' component={AccountInput}/>
              {/* routerProps allows passing of these props in in additon to props set up this.props.accoutns, ~adds build in props */}
              <Route path='/accounts/:id' render={(routerProps) => <Account {...routerProps} accounts={this.props.accounts}/>}/>
              {/* this.props.accounts allows listing of all accounts, below also originally used Route exact path, exact isn't needed with switch */}
              <Route path='/accounts' render={(routerProps) => <Accounts {...routerProps} accounts={this.props.accounts}/>}/>
            </Switch>

          </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    accounts: state.accounts
  }
}

export default connect(mapStateToProps, {fetchAccounts})(AccountsContainer)
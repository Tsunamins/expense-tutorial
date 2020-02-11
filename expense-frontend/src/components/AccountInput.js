import React from 'react'
import {connect} from 'react-redux'
import {addAccount} from '../actions/addAccount'


//needs class, bc will use form, control values, in this example this is controlled via a *local state* rather than directly with redux store
//although can be done from the store
//the local state will hold the form values and work with them from there
class AccountInput extends React.Component {

  state = {
    name: '',
    balance: ''
  }

  handleChange = (event) => {
    this.setState({
      // evaluates ket, then evaluates input
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addAccount(this.state)
    this.setState({
      name: '',
      balance: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Checking Account Name: </label>
          {/* adding value makes this a controlled form, once setting state above, using state below, this is a local state, alternatively can be saved in redux store, makes easier to re-use component */}
          <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/><br/>
          <label>Checking Account Balance: </label>
          <input type='text' placeholder='Balance' value={this.state.balance} name="balance" onChange={this.handleChange}/><br/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

// null bc does not need mapToStateProps - which is - access to what's alerady in redux store - does not need
//bc resp for createing data and adding to store, so can use *null* instead
//second param is the action creator, from actions folder, allowed bc using thunk, saying allowing access to the dispatch function, instead of directly dispatching
//idea is call it "ourselves" once finished with above
export default connect(null, {addAccount})(AccountInput)
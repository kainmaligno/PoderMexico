import React, {Component} from 'react'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';


class Private extends Component {

  state={
    user: ''
  }

  componentWillMount(){
    console.log(this.props)
  if(this.props.data){
    this.setState({
      user: this.props.data.username
    })
  }
  }

  onRedirect = () => {
    return (this.state.user === '') ? (<Redirect to='/login'/>) :
    (<div>
      <h1>Bienvenido {this.state.user}</h1>
    </div>)
  }
  render(){
    return(
      <div>
      {this.onRedirect()}
      </div>
    )
  }
}
const mapStateToProps = ({ auth }) => auth

export default connect(mapStateToProps)(Private)
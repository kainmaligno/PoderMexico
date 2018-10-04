import React, {Component} from 'react'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import { Row,MediaBox } from 'react-materialize';

class Private extends Component {
  state = {
    user : ''
  }

  componentWillReceiveProps(props){
    if(!props.data){
      this.setState({user: ''})
    }
  }

  componentWillMount(){
    if(this.props.data){
      this.setState({
        user: this.props.data.username 
      })
    }

  }

  onRedirect = () => {
    return (this.state.user === '') ?
    <Redirect to='/login'/> :
    <div className='container'>
      <Row>
      <h1> Bienvenido { this.state.user } </h1>
      <MediaBox src={this.state.user.img} caption="A demo media box1" width="350"/>
      </Row>
    </div>
   
    
  }

  render(){
    return <div>
    {this.onRedirect()}
    </div>
  }
 
}
const mapStateToProps = ({ auth }) => auth

export default connect(mapStateToProps)(Private)
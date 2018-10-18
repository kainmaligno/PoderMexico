import React, { Component } from 'react'
import StoresList from '../Stores/StoresList';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import { get_stores } from '../../actions/store'


class Dashboard extends Component {
  componentDidMount(){
    this.props.get_stores()
  }
  render() {
    const {store} = this.props
    //console.log(store)  
    return( 
      
      <div className="dashboard">
      <Navbar/>
      <h3 style={{paddingLeft:'15%'}}>Visita las tiendas</h3>
        
        <StoresList store={store} />
       
       
        {/* <Link to='/create_store'>
        <Button floating fab='vertical' faicon='fa fa-plus' icon='add' className='red' large style={{bottom: '60px', right: '35px'}}/>
        </Link> */}
      </div>
    )
  }
}
const mapStateToProps = (stores) => ({
  store: stores.store,
})

export default connect(mapStateToProps,{get_stores})(Dashboard)
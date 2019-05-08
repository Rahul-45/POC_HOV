import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import VpcTable from './components/vpcTable';
import BusinessMgmt from './components/businessMgmt';
import { connect } from 'react-redux';
import { menuChange } from './actions/MenuAction';
class MenuExampleBasic extends Component {
  /*state = {
    activeItem:'VPC Table'
  }*/

  handleItemClick = (e, { name }) => {
    this.props.menuChange(name)
}

  render() {
    //const { activeItem } = this.state
    return (
     <div>
      <Menu>
        <Menu.Item
          name='VPC Table'
          active={this.props.activeItem === 'VPC Table'}
          onClick={this.handleItemClick}
          style = {this.props.activeItem==='VPC Table'?{backgroundColor:'#2475B0'}:{backgroundColor:''}}
        >
          VPC Table
        </Menu.Item>
        <Menu.Item 
          name='Business Table' 
          active={this.props.activeItem === 'Business Table'} 
          onClick={this.handleItemClick}
          style = {this.props.activeItem==='Business Table'?{backgroundColor:'#2475B0'}:{backgroundColor:''}}
          >
          Business Management
        </Menu.Item>
      </Menu>
      {this.props.activeItem === 'Business Table'?<BusinessMgmt/>:<VpcTable data = {this.props.data}/>}
      </div>
      
    )
  }
}

const mapStateToProps = state =>({
  activeItem: state.api.activeItem
})
export default connect(mapStateToProps,{menuChange})(MenuExampleBasic)
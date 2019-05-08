import React from 'react';
import './App.css';
import MenuExampleBasic from './Menu';
import { Component } from 'react';
import {fetchdata} from './actions/ApiAction';
import { connect } from 'react-redux';

class App extends Component {
 /* state = {
    data:[],
    isLoaded:false
  }*/
  componentDidMount(){
    this.props.fetchdata();
  }
    /*fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=>res.json())
    .then(data =>{
      this.setState({
        isLoaded:true,
        data
      })
    })
  }*/
  render(){
    console.log(this.props.api)
    return (
      <div className="App">
        {this.props.isLoaded===true?<MenuExampleBasic data = {this.props.data}/>:<h3>Loading....</h3>}        
      </div>
    )
  }
}

const mapStateToProps = state => ({ 
  isLoaded:state.api.isLoaded,
  data:state.api.items
})
export default connect(mapStateToProps,{fetchdata})(App);

import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
// import Spinner from './components/Spinner'
import {
  BrowserRouter as Router, 
  Routes, Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  pageSize = 5;
  api_key = process.env.REACT_APP_API_KEY;
  state = {
    progress: 0,
  }
  setProgress = (progress)=> {
    this.setState({progress: progress})
  }
  
  render() {
    return (
      <div>
        <Router>
        <LoadingBar color='#f11946'
        progress={this.state.progress} height={3}
      />
          <Navbar />
          <Routes>
            <Route path='/' element={<News api_key={this.api_key} setProgress={this.setProgress} key='general' pageSize={this.pageSize} country='in' category='general' />}></Route>
            <Route path='/business' element={<News api_key={this.api_key} setProgress={this.setProgress} key='business' pageSize={this.pageSize} country='in' category='business' />}></Route>
            <Route path='/entertainment' element={<News api_key={this.api_key} setProgress={this.setProgress} key='entertainment' pageSize={this.pageSize} country='in' category='entertainment' />}></Route>
            <Route path='/health' element={<News api_key={this.api_key} setProgress={this.setProgress} key='health' pageSize={this.pageSize} country='in' category='health' />}></Route>
            <Route path='/science' element={<News api_key={this.api_key} setProgress={this.setProgress} key='science' pageSize={this.pageSize} country='in' category='science' />}></Route>
            <Route path='/sports' element={<News api_key={this.api_key} setProgress={this.setProgress} key='sports' pageSize={this.pageSize} country='in' category='sports' />}></Route>
            <Route path='/technology' element={<News api_key={this.api_key} setProgress={this.setProgress} key='technology' pageSize={this.pageSize} country='in' category='technology' />}></Route>
            <Route path='/general' element={<News api_key={this.api_key} setProgress={this.setProgress} key='general' pageSize={this.pageSize} country='in' category='general' />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}


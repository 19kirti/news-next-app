import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import News from './News';
import React , {Component} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'


export class App extends Component {

  state = {
    progress: 0
  }

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }

 
  render() {

  return (
    <Router>
    <div className="App">
      <NavBar/>

      <LoadingBar
        height={4}
        color='#f11946'
        progress={this.state.progress}
      />

      <Routes>

     <Route exact path="/" element={<News key="all" pageSize = {6} setProgress={this.setProgress}  country="in" category="General"/>} />
     <Route exact path="/home" element={<News key="home" pageSize = {6} setProgress={this.setProgress}  country="in" category="General"/>} />
     <Route exact path="/about" element={<News key="about" pageSize = {6} setProgress={this.setProgress}   country="in" category="General"/>} />
     <Route exact path="/business" element={<News key="business" pageSize = {6} setProgress={this.setProgress}  country="in" category="Business"/>} />
     <Route exact path="/entertainment" element={<News key="entertainment" pageSize = {6} setProgress={this.setProgress}  country="in" category="Entertainment"/>} />
     <Route exact path="/general" element={<News key="general" pageSize = {6} setProgress={this.setProgress}  country="in" category="General"/>} />
     <Route exact path="/health" element={<News key="health" pageSize = {6}  setProgress={this.setProgress} country="in" category="Health"/>} />
     <Route exact path="/science" element={<News key="science" pageSize = {6} setProgress={this.setProgress}  country="in" category="Science"/>} />
     <Route exact path="/sports" element={<News key="sports" pageSize = {6} setProgress={this.setProgress}  country="in" category="Sports"/>} />
     <Route exact path="/technology" element={<News key="technology" pageSize = {6} setProgress={this.setProgress}  country="in" category="Technology"/>} />

     </Routes>

    </div>
    </Router>
  );
}
}

export default App

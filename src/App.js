import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import News from './News';
import Loading from './Loading';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <Routes>


     <Route exact path="/" element={<News key="all" pageSize = {6} country="in" category="General"/>} />
     <Route exact path="/home" element={<News key="home" pageSize = {6} country="in" category="General"/>} />
     <Route exact path="/about" element={<News key="about" pageSize = {6} country="in" category="General"/>} />
     <Route exact path="/business" element={<News key="business" pageSize = {6} country="in" category="Business"/>} />
     <Route exact path="/entertainment" element={<News key="entertainment" pageSize = {6} country="in" category="Entertainment"/>} />
     <Route exact path="/general" element={<News key="general" pageSize = {6} country="in" category="General"/>} />
     <Route exact path="/health" element={<News key="health" pageSize = {6} country="in" category="Health"/>} />
     <Route exact path="/science" element={<News key="science" pageSize = {6} country="in" category="Science"/>} />
     <Route exact path="/sports" element={<News key="sports" pageSize = {6} country="in" category="Sports"/>} />
     <Route exact path="/technology" element={<News key="technology" pageSize = {6} country="in" category="Technology"/>} />


     </Routes>

    </div>
    </Router>
  );
}

export default App;

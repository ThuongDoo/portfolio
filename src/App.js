// import logo from './logo.svg';
import './App.css';
import Home from './layouts/Home';
import Header from './layouts/Header';
import About from './layouts/About';
import Education from './layouts/Education'
import Projects from './layouts/Projects';
import Contact from './layouts/Contact';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import HomeScreen from './screens/HomeScreen';
import ProjectScreen from './screens/ProjectScreen';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={< HomeScreen />}></Route>
          <Route exact path='/project/:title' element={<ProjectScreen/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

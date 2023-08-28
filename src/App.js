// import logo from './logo.svg';
import './App.css';
import Home from './layouts/Home';
import Header from './layouts/Header';
import About from './layouts/About';
import Education from './layouts/Education'
import Projects from './layouts/Projects';
import Contact from './layouts/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      {/* <Education/> */}
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;

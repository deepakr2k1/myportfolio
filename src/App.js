import './App.css';
import Intro from './components/Intro';
import Specializing from './components/specializing';
import ProjectsList from './components/projectsList';
import Footer from './components/footer';
import Portfolio from './components/Portfoilio';
import AboutMe from './components/about me';

const App = (props) => {
  return (
    <div className="App">
      <Intro/>
      <AboutMe/>
      <Specializing/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;

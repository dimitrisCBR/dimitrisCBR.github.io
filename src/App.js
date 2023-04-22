import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Header from './components/Header';
import GridExample from './components/Example';

function App() {

  let defaultMode = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)  ? "dark" : "light"
  return (
    <div className="App">
      <Header darkMode={defaultMode}/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;

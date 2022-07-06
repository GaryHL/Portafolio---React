import './App.css';
import './assets/stylesheets/nav.css';
import './assets/stylesheets/num_pages.css';
import './assets/stylesheets/titular.css';




import Nav from './assets/components/Nav'
import Num_pages from './assets/components/Num_pages'
import Titular from './assets/components/Titular'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Num_pages/>
      <Titular texto="GARY LIMA"
      description="Front-end developer / future fullstack"/>  

    </div>
  );
}

export default App;

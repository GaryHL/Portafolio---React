import '../assets/stylesheets/nav.css';
import '../assets/stylesheets/num_pages.css';
import '../assets/stylesheets/titular.css';




import Nav from '../assets/components/Nav'
import Num_pages from '../assets/components/Num_pages'
import Titular from '../assets/components/Titular'

function Projects() {
    return ( 
    <div className="container_projects">
    <Nav/>
    <Num_pages/>
    <Titular texto="aifkljslf"/>
    </div>
        
      
    );
  }

export default Projects;
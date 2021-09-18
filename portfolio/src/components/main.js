import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link,withRouter} from "react-router-dom";

import LandingPage from './landingpage';
import AboutMe from '../components/aboutme';
import Contact from '../components/contact';
import Projects from '../components/projects';
import Resume from '../components/resume';


const Main = () => (
  <>

   <Switch>
     <Route exact path="/" component={LandingPage} />
     <Route path="/aboutme" component={AboutMe} />
     <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
     <Route path="/resume" component={Resume} />
    </Switch>
    </>
)

export default Main;
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home';
import AboutMe from './AboutMe';
import Projects from './Projects';
import ContactMe from './ContactMe';
import Navbar from './Navbar'
import NavPage from './NavPage'

class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <Navbar />
                <Route exact path='/' component={Home} />
                <Route exact path='/aboutme' component={AboutMe} />
                <Route exact path='/projects' component={Projects} />
                <Route exact path='/contactme' component={ContactMe} />
                <Route exact path='/navpage' component={NavPage} />
                </BrowserRouter>
            </div>
        )
    }
}

export default App
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home';
import AboutMe from './AboutMe';
import Projects from './Projects';
import ContactMe from './ContactMe';

class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <Route exact path='/' component={Home} />
                <Route exact path='/aboutme' component={AboutMe} />
                <Route exact path='/projects' component={Projects} />
                <Route exact path='/contactme' component={ContactMe} />
                </BrowserRouter>
            </div>
        )
    }
}

export default App
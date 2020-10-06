import React from 'react' 
import { Linkedin } from 'react-feather'
import { GitHub } from 'react-feather'
class Home extends React.Component {
    render() {
         return (
             <div>
                 Home page
                 <h1>Front end developer </h1>
                 <h3>Jordan Long</h3>
                 {/* icons for linkedin, github */}    
            <Linkedin />              
            <GitHub />
             </div>
         )
    };
};

export default Home
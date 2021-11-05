import React from 'react'

import cattop from '../../images/cattop.jpg'

class Work extends React.Component{
    render(){
        return <span>
            <h2 className="major">Work</h2>
          <span className="image main">
            <img src={cattop} alt="cat on a laptop" />
          </span>
          <p>
            I have had the joy of being able to work with a variety of technologies on just as many projects. 
            Unfortunately I have not had many opportunities to work on full projects in my spare time, but I have been able to expand my skill set with many other tasks such as:
          </p>
          <ul>
              <li>Redesigning the <a href="https://turnkey.com.au/">company website</a></li>
              <li>Creating an internal full stack licencing web app using <a href="https://vaadin.com/">Vaadin</a></li>
              <li>Working on customer projects with <a href="https://www.jhipster.tech/">JHipster</a></li>
          </ul>
        </span>
    }
}

export default Work
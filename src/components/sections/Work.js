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
              <li>Working on a full stack (Angular and Java spring) SaaS product, along with helping customer migrations</li>
              <li>Working on customer projects with <a href="https://www.jhipster.tech/">JHipster</a></li>
              <li>Maintaining and optimising cloud hosted solutions on Azure</li>
          </ul>
        </span>
    }
}

export default Work
import React from 'react'

import graduation from '../../images/graduation.jpg'

class Intro extends React.Component {
    render() {
        return <span>
            <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={graduation} alt="my graduation" />
          </span>
          <p>
            I recently completed a degree of computing at Sydney University, where I majored in data science.
            My degree was definitely worthwhile, however more from the connections than the raw knowledge.
            I found much more enjoyment from working with the data rather than analysing it, and immediately after 
            finishing my studies, begun working full time as a software developer.
          </p>
          <p>
            Studying doesn't stop after university, but I do always find it rewarding keeping up with the latest trends and evaluating what new tools are available. From my studies I found out about graph databases, which I have been following since. 
            I have also been making myself familiar with the various javascript frameworks that are out there, recent trends in the frontend experience have made working with it much simpler, and writing engaging experiences much more achievable.
          </p>
        </span>
    }
}

export default Intro
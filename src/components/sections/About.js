import React from 'react'

import walking from '../../images/mountain.jpg'

class About extends React.Component{
    render(){
        return <span>
            <h2 className="major">About</h2>
          <span className="image main">
            <img src={walking} alt="walking in Japan" />
          </span>
          <p>
            Before COVID struck, I  enjoyed travelling. Both the photo above and the background are from a holiday I took to Japan.
            I certainly am looking forward to restrictions easing, but in the meanwhile have been making the most of the sights in Australia.
          </p>
          <p>
            I also am fond of board games, at University I was heavily involved with the pop culture society.
            I find it to be a great way of bonding with friends, though my favourite games are all fairly niche
            (not to mention the games being rather pricy)
          </p>
        </span>
    }
}

export default About
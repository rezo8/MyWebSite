import React, {Component} from 'react';
import './App.css';
import {PageHeader} from 'react-bootstrap';
import MentalRepLogo from "../public/MentalRep.png"
class Sports extends Component {

  render() {
    return (<div >
      <div className="Center">
        <PageHeader>
          Sports
        </PageHeader>
      </div>
      <div >
        <p>
          Sports have always been a large part of my life. I played Football, basketball and baseball religiously growing up - albeit pretty poorly - and will pretty much play soccer at any moment anywhere when given the opportunity. What&#39;s not to love about them? They&#39;re fun, help me stay in shape and are great ways to make friends.
        </p>
        <p>
          With this love for sports comes a cost of course. This cost is border-line obsession. They&#39;re half the reason why I&#39;ve spent hours refreshing Reddit and given my love for my teams I don&#39;t expect this to stop anytime soon, as shown by me dedicating a whole page on my website to them.
        </p>
        <p>
          However, before I detail my love for my squads I have to give a disclaimer. My team allegiences are literally all over the place. I moved around a lot growing up and ended up picking a Team to ride or die for for each city I lived in. So please don&#39;t scoff when you hear that I&#39;m a Red Sox fan and a NY Giants fan. I love Eli and Mookie both, I just can&#39;t help it...
        </p>
        <br/>

        <div className="Center">
          <PageHeader>
            The Legendary Bo-Sox
          </PageHeader>
        </div>
      </div>
    </div>)
  }
}

export default Sports

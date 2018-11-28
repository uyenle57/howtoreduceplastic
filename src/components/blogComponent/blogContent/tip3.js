import React, { Component } from 'react';
import BlogCover from '../blogCover/cover.js';
import Navigation from '../blogNavigation/navigation.js';

class Tip3 extends Component {

  constructor() {
    super();

    this.state = {
      id : 3,
      title : "Buy Without Plastic Packaging",
      image : 'img/covers/tip3_cover.svg',
      linkToPrevTip : 'tip2',
      linkToNextTip : 'tip4'
    }
  }

  render() {
    return (
      <div>
        <BlogCover id={this.state.id} title={this.state.title} coverImage={this.state.image}/>

        <div className="post-content">
          <img className="centered tip3-illustration" src="img/tip3_illustrations/buy_without_packaging.svg" alt="drawing"/>
        </div>

        <Navigation linkToPrevTip={this.state.linkToPrevTip} linkToNextTip={this.state.linkToNextTip}/>
      </div>
    );
  }
}

export default Tip3;

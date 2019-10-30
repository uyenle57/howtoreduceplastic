import React, { Component } from "react";
import BlogCover from "../blogCover/cover.js";
import Navigation from "../blogNavigation/navigation.js";

class Tip13 extends Component {
  constructor() {
    super();

    this.state = {
      id: 13,
      title: "Bin Your Gum & Butts!",
      image: "img/tip12_cover.svg",
      linkToPrevTip: "tip12",
      linkToNextTip: "tip14",
      webPagesList: []
    };
  }

  componentDidMount() {
    this.getPages();
  }

  getPages() {
    this.setState({
      webPagesList: [
        {
          id: 1,
          title: "WWF",
          linkTo:
            "https://www.nationalgeographic.com/environment/planetorplastic/"
        }
      ]
    });
  }

  render() {
    return (
      <div>
        <BlogCover
          id={this.state.id}
          title={this.state.title}
          coverImage={this.state.image}
        />

        <div className="post-content">
          If there are any charities whose work focus on something you care
          about, making a small donation to those charities will show them a lot
          of trust & support and therefore motivate them to keep going. It
          doesn't have to be much, a one-off donation of as little as £1 is just
          as amazing!
          <br />
          Below are some top charities that focus on tackling plastic waste and
          pollution and protect the ocean:
          {this.state.webPagesList.map(item => {
            return (
              <ul key={item.id}>
                <li>
                  <a href={item.linkTo}>{item.title}</a>
                </li>
              </ul>
            );
          })}
          <br />
          Finally, you can also shop at{" "}
          <a href="http://smile.amazon.co.uk">smile.amazon.co.uk</a>, where
          Amazon will donate a small proportion of your purchases towards a
          charity of your choice.
          <img
            className="centered tip12-illustration"
            src="img/tip12_illustrations/thankyou_turtle.svg"
            alt="drawing"
          />
        </div>

        <Navigation
          linkToPrevTip={this.state.linkToPrevTip}
          linkToNextTip={this.state.linkToNextTip}
        />
      </div>
    );
  }
}

export default Tip13;

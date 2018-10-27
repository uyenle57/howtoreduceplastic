import React, { Component } from 'react';
import BlogCover from '../blogCover/cover.js';
import Navigation from '../blogNavigation/navigation.js';

class Tip10 extends Component {

  constructor() {
    super();

    this.state = {
      id : 10,
      title : "Educate Yourself",
      image : 'img/tip10_cover.svg',
      linkToPrevTip : 'tip9',
      linkToNextTip : 'tip11',
      booksList : []
    }
  }

  componentDidMount(){
    this.getBooksList();
  }

  getBooksList(){
    this.setState({
      booksList: [{
          id: 1,
          title: "Life Without Plastic",
          author: "Jay Sinha, Chantal Plamondon",
          image: 'img/bookCovers/life_without_plastic.jpg',
          linkTo: 'https://www.goodreads.com/book/show/33533744-life-without-plastic?ac=1'
        },
        {
          id: 2,
          title: "How to Give Up Plastic",
          author: "Will McAllum",
          image: 'img/bookCovers/how_to_giveup_plastic.jpg',
          linkTo: 'https://www.goodreads.com/book/show/38587839-how-to-give-up-plastic'
        },
        {
          id: 3,
          title: "No. More. Plastic.",
          author: "Martin Dorey",
          image: 'img/bookCovers/no_more_plastic.jpg',
          linkTo: 'https://www.goodreads.com/book/show/40030019-no-more-plastic?ac=1'
        },
        {
          id: 4,
          title: "Plastic-Free: How I Kicked the Plastic Habit and How You Can Too",
          author: "Beth Terry",
          image: 'img/bookCovers/plastic_free_habit.jpg',
          linkTo: 'https://www.goodreads.com/book/show/13274446-plastic-free'
        },
        {
          id: 5,
          title: "This Book is Not Rubbish: 50 Ways to Ditch Plastic, Reduce Rubbish and Save the World!",
          author: "Isabel Thomas, Alex Paterson",
          image: 'img/bookCovers/this_book_is_not_rubbish.jpg',
          linkTo: 'https://www.goodreads.com/book/show/41959345-this-book-is-not-rubbish'
        },
      ]
    });
  }

  render() {
    return (
      <div>
        <BlogCover id={this.state.id} title={this.state.title} coverImage={this.state.image}/>

        <div className="post-content">
          Below are great resources that I have found incredibly useful in understanding about plastic. They go in great details about different types of plastics, their
          effects on the environment and suggest ways that we can do to reduce plastic consumption:

          Books:
          <div className="books-list">
            { this.state.booksList.map(book => {
                return (
                  <li key={book.id}>
                    <img src={book.image} alt="Book cover" width="110" />
                    <b>{book.title}</b> by {book.author}
                  </li>
                )
              })
            }
          </div>
          <br/>

          Documentaries:
          <ul>
            Blue Planet 2
          </ul>
          <br/>

          Articles:
          <ul>
            <li><a href="http://www.bbc.co.uk/programmes/articles/11CnCQR0GJfkDgJs57sR5Ps/plastics-action">BBC Plastics Watch</a></li>
            <li><a href="https://www.bbc.co.uk/programmes/p06bm360">How Does Plastic Will Wildlife? by BBC</a></li>
            <li><a href="http://www.bbc.co.uk/programmes/articles/11CnCQR0GJfkDgJs57sR5Ps/plastics-action">National Geographic</a></li>
            <br/>
          </ul>
        </div>

        <Navigation linkToPrevTip={this.state.linkToPrevTip} linkToNextTip={this.state.linkToNextTip}/>
      </div>
    );
  }
}

export default Tip10;

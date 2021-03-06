import React from 'react';
import Review from './Review.jsx'


export default class Yelp extends React.Component {


  displayReviews = () => {
    return this.props.data.reviews.map(review => {
      return <Review review={review} />
    })
  }

  render() {
    return (
      <div className="Yelp-section" id="yelp">
        <a href="https://www.yelp.com/biz/iron-horse-studio-fairfax" target="_blank" rel="noreferrer"><div className="main-header_logo" ></div></a>
        <a href="https://www.yelp.com/biz/iron-horse-studio-fairfax" target="_blank" className="btn btn-danger" style={{marginTop: '2%'}} rel="noreferrer">Write a Review</a>
        <br></br>
        <div>{this.displayReviews()}</div>
      </div>
    );
  };
}

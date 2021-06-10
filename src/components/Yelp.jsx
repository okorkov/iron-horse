import React from 'react';
import StarRateIcon from '@material-ui/icons/StarRate';
import Review from './Review.jsx'


export default class Yelp extends React.Component {


  displayReviews = () => {
    return this.props.data.reviews.map(review => {
      return <Review review={review} />
    })
  }

  render() {
    return (
      <div className="Yelp-section">
        <h2> Yelp Reviews</h2>
        <br></br>
        <div>{this.displayReviews()}</div>
      </div>
    );
  };

 
}





// const Yelp = () => {
//   return (
//     <div id="yelp">
//         <div className="elfsight-app-81e89c37-c2a4-4e9f-a239-caf6bebe366c"></div>
//     </div>
//   );
// }

// export default Yelp;

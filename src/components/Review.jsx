// import React from 'react';
// import StarRateIcon from '@material-ui/icons/StarRate';


// export default class Review extends React.Component {

//   // state = {
//   //   reviews: {}
//   // }

//   // componentDidMount() {

//   //   let y_key = this.props.data.key

//   //   fetch("https://api.yelp.com/v3/business/iron-horse-studio-fairfax/reviews", {
//   //     method: "GET",
//   //     headers: {
//   //       "Authorization": `Bearer ${y_key}`,
//   //       "Content-Type": "application/json",
//   //     },
//   //     body: JSON.stringify({ reviews: 'reviews' }),
//   //   })
//   //     .then((resp) => resp.json())
//   //     .then((data) => {
//   //       this.setState({
//   //         reviews: data
//   //       })
//   //     })
//   //     .catch(console.log);
//   // };

//   displayReviews = () => {
//     this.props.data.reviews.map((review) => {
//       return <Review review={review} />
//     })
//   }

//   render() {
//     return (
//       <div className="Y">
//         <p>{this.props.review.text}</p>
//       </div>
//     );
//   };

// };


import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import { useGutterBorderedGridStyles } from '@mui-treasury/styles/grid/gutterBordered';
import StarRateIcon from '@material-ui/icons/StarRate';



const useStyles = makeStyles(({ palette }) => ({
  card: {
    borderRadius: 12,
    maxWidth: 620,
    textAlign: 'center',
    boxShadow: '0 5px 10px 0 rgba(10,10,10,0.82)',
    background: 'linear-gradient(#568ea6, #305f72)',
    color: 'rgb(255,255,255)'
  },
  avatar: {
    width: 65,
    height: 65,
    margin: 'auto',
    marginTop: -10,
    marginBottom: -10,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    marginTop: 8,
    marginBottom: 0,
  },
  subheader: {
    fontSize: 14,
    // color: palette.grey[500],
    // marginBottom: '0.875em',
  },
  statLabel: {
    fontSize: 15,
    // color: palette.grey[500],
    fontWeight: 500,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    margin: 0,
  },
  statValue: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 4,
    letterSpacing: '1px',
  },
}));

export const DayCard = React.memo(function ProfileCard({review}) {
  const styles = useStyles();
  const shadowStyles = useFadedShadowStyles();
  const borderedGridStyles = useGutterBorderedGridStyles({
    borderColor: 'rgba(0, 0, 0, 0.08)',
    height: '50%',
  });
  return (
    <div className="Day-card">
        <Card className={cx(styles.card, shadowStyles.root)}>
          <CardContent>
            <Avatar className={styles.avatar} src={review.user.image_url} />
            <h3 className={styles.heading}>{review.user.name}</h3>
            <span className={styles.subheader}>{review.time_created}</span>
          </CardContent>
          <Divider light />
          <Box display={'flex'}>
            <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
              <p className={styles.statLabel}>{review.text}</p>
            </Box>
          </Box>
        </Card>
    </div>
  );
});

export default DayCard


import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';






const useStyles = makeStyles(({ palette }) => ({
  card: {
    borderRadius: 12,
    maxWidth: 620,
    textAlign: 'center',
    boxShadow: '0 5px 10px 0 rgba(10,10,10,0.82)',
    background: 'rgb(35, 38, 43)',
    color: 'rgb(255,255,255)'
  },
  avatar: {
    width: 65,
    height: 65,
    margin: 'auto',
    marginTop: 10,
    marginBottom: 10,
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
    color: palette.grey[500],
    // marginBottom: '0.875em',
  },
  statLabel: {
    fontSize: 16,
    // color: palette.grey[500],
    fontWeight: 400,
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
  rating: {

  }
}));

export const DayCard = React.memo(function ProfileCard({review}) {
  const styles = useStyles();
  const shadowStyles = useFadedShadowStyles();


  const displayStars = (rating) => {
    const zero = <img src="/yelp_stars/0.png" className={styles.rating} alt="yelp-start"/>
    const one = <img src="/yelp_stars/1.png" className={styles.rating} alt="yelp-start"/>
    const one_half = <img src="/yelp_stars/1_half.png" className={styles.rating} alt="yelp-start"/>
    const two = <img src="/yelp_stars/2.png" className={styles.rating} alt="yelp-start"/>
    const two_half = <img src="/yelp_stars/2_half.png" className={styles.rating} alt="yelp-start"/>
    const three = <img src="/yelp_stars/3.png" className={styles.rating} alt="yelp-start"/>
    const three_half = <img src="/yelp_stars/3_half.png" className={styles.rating} alt="yelp-start"/>
    const four = <img src="/yelp_stars/4.png" className={styles.rating} alt="yelp-start"/>
    const four_half = <img src="/yelp_stars/4_half.png" className={styles.rating} alt="yelp-start"/>
    const five = <img src="/yelp_stars/5.png" className={styles.rating} alt="yelp-start"/>

    switch(rating){
    case 0:
      return zero;
    case 1:
      return one;
    case 1.5:
      return one_half;
    case 2:
      return two;
    case 2.5:
      return two_half;
    case 3:
      return three;
    case 3.5:
      return three_half;
    case 4:
      return four;
    case 4.5:
      return four_half;
    case 5:
      return five;
    default:
      return null;
    }
  }

  const processTime = (time) => {
    const new_time = time.split('-')
    return `${new_time[1]}/${new_time[2]}/${new_time[0]}`;
  }

  return (
    <div className="Day-card">
        <Card className={cx(styles.card, shadowStyles.root)}>
          <CardContent>
            <Avatar className={styles.avatar} src={review.user.image_url} />
            <h3 className={styles.heading}>{review.user.name}</h3>
            <h6 className={styles.subheader}>{processTime(review.time_created.split(' ')[0])}</h6>
            {displayStars(review.rating)}
            <p className={styles.statLabel}>{review.text} <a href={review.url} target="_blank"style={{ color:'white'}} rel="noreferrer">Read More</a></p>
          </CardContent>
        </Card>
        <br></br>
    </div>
  );
});

export default DayCard;
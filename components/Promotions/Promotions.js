import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import Slider from 'dandelion-animated-slider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import useStyles from './promotion-style';
import imgAPI from '~/public/images/imgAPI';
import Image from 'next/image';

const sliderData = [
  {
    image: imgAPI.movie[0],
    subtitle: 'You have opportunity',
    title: 'To Convert your spending into earning',

    desc: 'By redirecting the money you are already spending, towards beautyplayers.com.'
  },
  {
    image: imgAPI.movie[1],
    subtitle: 'Freedom to Choose',
    title: 'Any services,Any expert,Anywhere',
    
    desc: 'All over India at comfort of your home,all services fit your needs and your budget.'
  },
  {
    image: imgAPI.movie[2],
    subtitle: 'Features and benefits you need',
    title: 'Your buisness, your schedule, your way',
   
    desc: 'We are on a path to become the fastes-growing direct selling company with room to grow your own buisness, youe own way.'
  },
  {
    image: imgAPI.movie[3],
    subtitle: 'Absolute skin care services',
    title: 'Unfading Beauty,Unfading Reputation',
    rating: 5,
    duration: '2h 15m',
    desc: 'Revolution the history of skin care,begining of new legend that will go beyond the acheivements.'
  }
];

function Promotion() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation('common');
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));

  return (
    <div className={classes.root}>
      <div className={classes.sliderWrap}>
        <Slider
          autoplay={7500}
          className="slider-wrapper"
          previousButton={(
            <i className={cx(classes.arrowIcon, 'ion-ios-arrow-round-forward')} />
          )}
          nextButton={(
            <i className={cx(classes.arrowIcon, 'ion-ios-arrow-round-forward')} />
          )}
        >
          {sliderData.map((item, index) => (
            <div className={classes.item} key={index.toString()}>
              <div className={classes.innerBg}>
                <div className={classes.background}>
                  <figure>
                    <img src={item.image} alt={item.title} />
                  </figure>
                </div>
                <Grid container className={classes.row}>
                  <Grid item sm={7} xs={12}>
                    <div className={classes.text}>
                      <Typography variant="h4">
                        <span className={text.subtitle2}>{item.subtitle}</span>
                        {item.title}
                      </Typography>
                      <p className={classes.property}>
                        {/* <span className={classes.star}>
                          {[...Array(item.rating)].map((e, indexStar) => (
                            <Icon className={classes.starIcon} key={indexStar.toString()}>star</Icon>
                          ))}
                        </span> */}
                        {/* 5.0
                        <span className={classes.divider} /> */}
                        {/* {item.duration} */}
                      </p>
                      <article className={classes.desc}>
                        <Typography component="h6" className={text.paragraph}>
                          {item.desc}
                        </Typography>
                      </article>
                      <section className={classes.btnArea}>
                        <Button className={classes.btnText} color="secondary">
                         Learn More
                        </Button>
                        <Button variant="contained" size="large" color="primary">
                          {/* {t('movie-landing.promo_btn2')} */}Join Now
                        </Button>
                      </section>
                    </div>
                  </Grid>
                  <Grid item sm={5} xs={12}>
                    {!isMobile && (
                      <div className={classes.image}>
                        <figure>
                          <img src={item.image} alt={item.title} />
                        </figure>
                      </div>
                    )}
                  </Grid>
                </Grid>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Promotion;

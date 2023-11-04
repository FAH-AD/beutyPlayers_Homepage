import React, { Fragment } from 'react';
import Carousel from 'react-slick';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'next-i18next';
import imgAPI from '~/public/images/imgAPI';
import useStyles from './trending-style';

const settings = {
  dots: false,
  speed: 500,
  slidesToShow: 1,
  arrows: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 7000
};

function Trending() {
  const { classes } = useStyles();
  const { t } = useTranslation('common');
  const isTablet = useMediaQuery(theme => theme.breakpoints.down('sm'));

  return (
    <div className={classes.root}>
      {!isTablet ? (
        <Fragment>
          <div className={classes.grid25}>
            <img src={imgAPI.movie[7]} alt="trending" />
            <ButtonBase className={classes.overlay}>
              <Typography variant="h5">
              Connect with Beauty Players IBC
              </Typography>
            </ButtonBase>
          </div>
          <div className={classes.grid50}>
            <img src={imgAPI.movie[8]} alt="trending" />
            <ButtonBase className={classes.overlay}>
              <Typography variant="h4"  style={{textAlign:'right',color:'white'}}>
               
                Sign and Submit <br /> 
                <span>Independent beauty <br /> cosultant agreement</span>
              </Typography>
            </ButtonBase>
          </div>
          <div className={classes.grid25}>
            <img src={imgAPI.movie[9]} alt="trending" />
            <ButtonBase className={classes.overlay}>
              <Typography variant="h5">
             Choose any skin care service that fit your life,to active account
              </Typography>
            </ButtonBase>
          </div>
        </Fragment>
      ) : (
        <Carousel {...settings}>
          <div>
            <div className={classes.grid25}>
              <img src={imgAPI.movie[7]} alt="trending" />
              <ButtonBase className={classes.overlay}>
                <Typography variant="h5">
                Connect with Beauty Players IBC
                </Typography>
              </ButtonBase>
            </div>
          </div>
          <div>
            <div className={classes.grid50}>
              <img src={imgAPI.movie[8]} alt="trending" />
              <ButtonBase className={classes.overlay}>
                <Typography variant="h3" style={{textAlign:'center',color:'white'}}>
                Sign and Submit <br /> 
                <span>Independent beauty <br /> cosultant agreement</span>
                </Typography>
              </ButtonBase>
            </div>
          </div>
          <div>
            <div className={classes.grid25}>
              <img src={imgAPI.movie[9]} alt="trending" />
              <ButtonBase className={classes.overlay}>
                <Typography variant="h5">
                Choose any skin care service that fit your life,to active account
                </Typography>
              </ButtonBase>
            </div>
          </div>
        </Carousel>
      )}
    </div>
  );
}

export default Trending;

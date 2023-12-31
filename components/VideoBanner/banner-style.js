import { makeStyles } from 'tss-react/mui';

const bannerStyles = makeStyles({ uniqId: 'banner' })((theme, _params, classes) => ({
  root: {
    display: 'block',
    background: theme.palette.common.black,
    height: 720,
    width: '200%',
    marginLeft: '-50%',
    borderRadius: '0 0 50% 50%',
    overflow: 'hidden',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      height: 640
    }
  },
  video: {
    height: '100%',
    width: '50%',
    left: '25%',
    position: 'absolute',
    '& img': {
      width: '100%',
      minHeight: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      [theme.breakpoints.down('lg')]: {
        objectFit: 'cover'
      }
    },
    '& iframe': {
      width: '100%',
      position: 'relative',
      top: '-20px !important'
    },
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: '-50%',
    background: theme.palette.common.black,
    opacity: 0.5,
    width: '200%',
    height: '100%',
    zIndex: 10,
    borderRadius: '0 0 50% 50%'
  },
  caption: {
    position: 'absolute',
    width: '100%',
    zIndex: 90,
    textAlign: 'left',
    color: theme.palette.common.white,
    top: '55%',
    [theme.breakpoints.down('sm')]: {
      top: '30%'
    },
    '&:hover': {
      [`& .${classes.btnPlay}`]: {
        opacity: 1
      }
    }
  },
  hidden: {},
  btnPlay: {
    overflow: 'visible !important',
    position: 'absolute',
    top: -120,
    left: '50%',
    transform: 'translate(-50%)',
    width: 80,
    height: 80,
    opacity: 0,
    transition: 'opacity 0.5s ease',
    border: '3px solid #fff',
    '& i': {
      color: theme.palette.common.white,
      fontSize: 64,
      width: 64,
      height: 64,
      position: 'relative',
      '&[class="ion-ios-play-outline"]': {
        left: 3
      }
    },
    '& span strong': {
      position: 'absolute',
      color: theme.palette.common.white,
      textTransform: 'uppercase',
      fontWeight: theme.typography.fontBold,
      fontSize: 24,
      top: 20,
      transition: 'all 0.3s ease',
      '&:first-of-type': {
        left: '-140%',
        '& + strong': {
          right: '-155%'
        }
      },
      [`&.${classes.hidden}`]: {
        opacity: 0,
        transform: 'scale(0.4)',
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default bannerStyles;

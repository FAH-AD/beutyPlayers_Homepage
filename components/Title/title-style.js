import { makeStyles } from 'tss-react/mui';

const titleStyles = makeStyles({ uniqId: 'title' })(theme => ({
  left: {
    textAlign: 'left',
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(5),
    }
  },
  right: {
    textAlign: 'right',
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(5),
    }
  },
  center: {
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(3),
    display: 'block',
    minWidth: 200,
    fontSize: 36,
    lineHeight: '56px',
    '& h4': {
      lineHeight: 1.2,
      [theme.breakpoints.down('lg')]: {
        fontSize: 32,
        lineHeight: '48px'
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 24,
        lineHeight: '36px',
      }
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  primary: {
    fontWeight: theme.typography.fontWeightBold,
  },
  secondary: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.mode === 'light' ? theme.palette.secondary.main : theme.palette.secondary.light,
  },
  titleSecondary: {
    display: 'block',
    position: 'relative',
    marginBottom: theme.spacing(12),
    textTransform: 'capitalize',
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(5)
    },
    '& h3': {
      color: theme.palette.text.primary,
      fontSize: 36,
      lineHeight: '56px',
      fontWeight: theme.typography.fontWeightBold,
      letterSpacing: 1,
      [theme.breakpoints.down('lg')]: {
        fontSize: 32,
        lineHeight: '48px'
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 28,
        lineHeight: '44px'
      }
    },
    '& strong': {
      color: theme.palette.text.primary,
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default titleStyles;

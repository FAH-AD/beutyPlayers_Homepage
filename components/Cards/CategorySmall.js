import React from 'react';
import PropTypes from 'prop-types';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { useText } from '~/theme/common';
import useStyles from './cards-style';

export default function CategoryFull(props) {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const {
    img,
    title,
    background,
    total,
  } = props;

  return (
    <ButtonBase
      className={cx(classes.category, classes.full)}
      style={{ backgroundColor: '#' + background }}
      classes={{
        root: classes.buttonBase
      }}
    >
      <img src={img} alt={title} />
      <span className={classes.property}>
        <Typography className={cx(classes.title, text.title2)} variant="h4" component="span">{title}</Typography>
        <Typography className={cx(classes.total, text.paragraph)} component="span">
          {total}
        
        </Typography>
      </span>
    </ButtonBase>
  );
}

CategoryFull.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
};

import React from 'react';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useText } from '~/theme/common';
import Title from '../Title';
import PricingCard from '../Cards/Pricing';
import useStyles from './pricing-plan-style';

const feature = {
  basic: [
    'People with any education or economic background',
    'can take up the buisness',
    'and succeed'
  ],
  best: [
    'Beauty Players',
    'Has the various Services',
    'Across Different Categories',
    'To meet Your',
    'Needs!'
  ],
  pro: [
    'Joining Beauty Players Buisness',
    'is very Simple',
    'There is no cost ',
    'to join',
    'Beauty Players'
  ],
  enterprise: [
    'Choose when you want to work,',
    ' How you want to work,',
    'and',
    'From Where you want to work',
  
  ],
};

export default function PricingPlan() {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <div className={classes.root}>
      <div className={classes.decoration}>
        <svg fill="#cccccc">
          <use xlinkHref="/images/movie/deco-med-bg.svg#main" />
        </svg>
      </div>
      <Container fixed={isDesktop}>
        <div className={text.alignCenter}>
          <Title align="center" primary="Benefits of Partnering" secondary="with Beauty Players" />
        </div>
        <div className={classes.pricingWrap}>
          <ScrollAnimation
            animateOnce
            animateIn="fadeInUpShort"
            offset={-200}
            delay={200}
            duration={0.4}
          >
            <div className={classes.item}>
              <PricingCard
                title="Equal opportunity"
                price="Buisness"
                featureList={feature.basic}
               
                type="basic"
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            className={classes.pop}
            animateOnce
            animateIn="fadeInUpShort"
            offset={-200}
            delay={400}
            duration={0.4}
          >
            <div className={classes.item}>
              <PricingCard
                title="Best Quality"
                price="Services"
                featureList={feature.best}
                desc=""
                type="value"
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce
            animateIn="fadeInUpShort"
            offset={-200}
            delay={600}
            duration={0.4}
          >
            <div className={classes.item}>
              <PricingCard
                title="Easy to"
                price="Join"
                featureList={feature.pro}
                desc=""
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce
            animateIn="fadeInUpShort"
            offset={-200}
            delay={800}
            duration={0.4}
          >
            <div className={classes.item}>
              <PricingCard
                title="Flexibility to"
                price="Work"
                featureList={feature.enterprise}
                desc=""
              />
            </div>
          </ScrollAnimation>
          
        </div>
      </Container>
    </div>
  );
}

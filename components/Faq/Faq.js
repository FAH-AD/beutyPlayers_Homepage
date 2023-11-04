import React, { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import illustration from '~/public/images/movie/faq.png';
import Title from '../Title';
import useStyles from './faq-style';

const faqData = [
  {
    q: ' Do i need to choose an Independent Beauty Consultant submit an Independent Beauty Consultant Agreement?',
    a: 'You must have an Independent Beauty Consultant to submit an Agreement. However, if you do not have one, we can help you connect with one. '
  },
  {
    q: 'I started the process of submitting my onine Independent Beauty Consultant Agreement, but I did not finish. How do i go bak to complete it ?',
    a: 'As long as you’ve completed the first step by providing your name, mailing address and email address, you will receive an email with a link that enables you to complete the process. If you did not complete the first step, you will need to start over. '
  },
 
  {
    q: 'I have been an Independent Beauty Consultant before. How do i sign up again ?',
    a: 'If you are a former Beauty Consultant, you can submit an Independent Beauty Consultant Agreement again using the same process. In order to complete your Agreement, you will need to provide your former Consultant number. If you do not remember your former Consultant number, you can contact the Customer Success Team at 8282829958 Monday–Friday, 9 a.m. – 6 p.m. Central time. '
  },
  {
    q: 'Are there options for how I start a Beauty Players business ?',
    a: ' Yes. How you start your Beauty Players business is flexible! Whether you decide to go all in with the Beauty Players Starter Kit* or start your business digitally with the Beauty Players eStart,* you can earn up to 30% profit** on the Salon Services you sell at suggested retail. You can also choose to include the optional Beauty Players New Beauty Consultant Sample Pack with either the Beauty Players eStart or Beauty Players Starter Kit. The sample pack is a one-time offer that is available only when you submit the Agreement. Review the startup options to choose the one that would work best for you.'
  },
  {
    q:'What is Beauty Players Opportunity?',
    a:'The Beauty Players opportunity is a direct sales opportunity where a Beauty Players Independent Beauty Consultant sells Beauty Players services directly to her customers. The foundation of a strong Beauty Players business is and always will be the sale of amazing Beauty Players products to customers! Active† Beauty Consultants can earn up to 30% profit** on products sold at suggested retail regardless of their career path status.'
  },
  {
    q:'How do I earn money with Beauty Players business?',
    a:' The earning opportunity associated with a Beauty Players business is individual and unique, so it is impossible to guarantee that a particular amount of income can be earned. How much money you make as a Beauty Players Independent Beauty Consultant will depend on many factors, such as your personal business goals, time invested, and business expenses. You can earn up to 30% profit** on everything you sell at the suggested retail price, and you can feel confident that you are selling services you can believe in. This flexible opportunity lets you choose how much or how little to work your Beauty Players business as you strive to meet your goals!'
  },
  {
    q:'What resources are offered to me to help me run my Beauty Players business?',
    a:'With a Beauty Players business, you are in business for yourself, but never by yourself! Beauty Players continually develops resources to help you along the way, including product education, marketing materials, promotions, team-building playbooks and fliers, and social media playbooks and tips. All are available through Beauty Players, a website exclusively for Beauty Players independent sales force members.'

    
  },
  {
    q:'What does it take tobe successful in a beauty Players business ?',
    a:'If you’ve just started your Beauty Players business, it is important to know that purchasing inventory is an individual decision. It’s certainly not a requirement for you to begin your Beauty Players business. We always recommend that you determine what activity level you intend to pursue in your Beauty Players business and then, if appropriate for your personal circumstances, invest in the amount of inventory that supports that activity.'
    
  },
  {
    q:'How do i known if direct selling is for me?',
    a:'A direct-selling opportunity is a flexible option for adults of all ages, genders and income levels. It is an especially good opportunity for those who want more flexibility and for those who want an opportunity that fits their lives. If you have an entrepreneurial spirit and enjoy working with people, this opportunity could be right for you.'
  }
];

function Faq() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const [expanded, setExpanded] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { t } = useTranslation('common');
  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className={classes.root}>
      <Container fixed>
        <Grid container spacing={6}>
          <Grid item md={6}>
            <Title align={isMobile ? 'center' : 'left'} primary="Frequently" secondary="Answered Questions" />
            <Typography className={cx(classes.text, text.subtitle2)} align={isMobile ? 'center' : 'left'} component="p">
              {t('movie-landing.faq_subtitle')}
            </Typography>
            {!isMobile && (
              <div className={classes.illustration}>
                <img src={illustration} alt="illustration" />
              </div>
            )}
          </Grid>
          <Grid item md={6}>
            <div className={classes.accordion}>
              {faqData.map((item, index) => (
                <div className={classes.item} key={index.toString()}>
                  <Accordion
                    classes={{
                      root: classes.paper
                    }}
                    expanded={expanded === index}
                    onChange={handleChange(index)}
                  >
                    <AccordionSummary
                      classes={{
                        content: classes.content,
                        expanded: classes.expanded,
                      }}
                    >
                      <Typography className={classes.heading}>{item.q}</Typography>
                      <ExpandMoreIcon className={classes.icon} />
                    </AccordionSummary>
                    <AccordionDetails
                      classes={{
                        root: classes.detail,
                      }}
                    >
                      <Typography>
                        {item.a}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Faq;

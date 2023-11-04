import React, { useRef } from 'react';
import Carousel from 'react-slick';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import BackIcon from '@mui/icons-material/ArrowBackSharp';
import NextIcon from '@mui/icons-material/ArrowForwardSharp';
import Title from '../Title';
import SimpleThumbCard from '../Cards/SimpleThumb';
import useStyles from './all-categories-style';
import Image from 'next/image';
import imgAPI from '../../public/images/imgAPI';

const dataProducts = [
  {
    image: imgAPI.icons[0],
    title: 'Courage'
  },
  {
    image: imgAPI.icons[2],
    title: 'Empowerment'
  },
  {
    image: imgAPI.icons[3],
    title: 'Integrity'
  },
  {
    image: imgAPI.icons[4],
    title: 'Partnership'
  },
  {
    image: imgAPI.icons[1],
    title: 'Diversity'
  },
  {
    image: imgAPI.icons[5],
    title: 'Accountability'
  },
  {
    image:imgAPI.icons[0],
    title: 'Courage'
  },
  {
    image: imgAPI.icons[2],
    title: 'Empowerment'
  },
  {
    image: imgAPI.icons[3],
    title: 'Integrity'
  },
  {
    image: imgAPI.icons[4],
    title: 'Partnership'
  },
  {
    image:imgAPI.icons[1],
    title: 'Diversity'
  },
  {
    image: imgAPI.icons[5],
    title: 'Accountability'
  }
];

const settings = {
  dots: false,
  speed: 500,
  slidesToShow: 6,
  arrows: false,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 7000,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 3,
      infinite: true
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};

export default function Feature() {
  const { classes, cx } = useStyles();
  const slider = useRef(null);
  const nextSlide = () => {
    slider.current.slickNext();
  };
  const prevSlide = () => {
    slider.current.slickPrev();
  };
  return (
    <div className={classes.root}>
      <Container className={classes.carouselContainer}>
        <Title align="center" primary="Success Driven By Strong Foundations" secondary="United By Our Values - we are one team with one mission,guided by clear,shared behaviour that help us stay aligned as we grow" />
        <div className={classes.carouselWrap}>
          <Button className={cx(classes.nav, classes.prev)} onClick={prevSlide}>
            <BackIcon />
          </Button>
          <Button className={cx(classes.nav, classes.next)} onClick={nextSlide}>
            <NextIcon />
          </Button>
          <Carousel ref={slider} {...settings}>
            {dataProducts.map((item, index) => (
              <div key={index.toString()} className={classes.item}>
                <SimpleThumbCard
                  title={item.title}
                  image={item.image}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </Container>
    </div>
  );
}

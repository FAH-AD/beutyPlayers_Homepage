import React, { useRef } from 'react';
import Carousel from 'react-slick';
import NewsCard from '../Cards/News';
import imgAPI from '~/public/images/imgAPI';
import useStyle from './news-event-style';

const newsContent = [
  {
    text: 'Starting Your Own Salon? Here’s Everything You Need To Know  There is something intrinsically special about the beauty business that attracts more independent entrepreneurs to the multi-billion dollar retail industry than ever before.',
   
    img: imgAPI.photo[0],
    type: 'From Our Blogs',
  },
  {
    text: 'Personal grooming is essential to enhance one’s overall appearance; particularly for men, one vital aspect is hair. Hair grooming is key as it is an instantly noticeable feature.   Regarding men and their appearance, no detail is too small. ',
 
    img: imgAPI.photo[1],
    type: 'From Our Blogs',
  },
  {
    text: 'Regarding men and their appearance, no detail is too small. Once, men were made fun of for taking care of their appearance, but times have changed!',
    img: imgAPI.photo[2],
    type: 'From Our Blogs',
  },
  {
    text: 'From lips, Eyes and Brows become the focus of the ’30s. Thin, plucked eyebrows were in fashion. The adventurous achieved dramatic arches and wings with painful plucking of eyebrows.',
    img: imgAPI.photo[3],
    type: 'From Our Blogs',
  },
  {
    text: 'This is a collection of stories about inspiring women from around the world. Entrepreneurs, Leaders, and women have challenged the status quo and made a difference in every walk of life.',
    img: imgAPI.photo[4],
    type: 'From Our Blogs',
  },
  {
    text: 'We are far past what dictated the concept that women could not be successful founders, co-founders, or managers. Women are now not just ruling the economic world but also emerging as a dominant force directing the startup environment.',
    img: imgAPI.photo[5],
    type: 'From Our Blogs',
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 700,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
};

function NewsEvent() {
  const slider = useRef(null);
  const { classes } = useStyle();
  return (
    <div className={classes.root}>
      <div className={classes.carousel}>
        <Carousel ref={slider} {...settings}>
          {newsContent.map((item, index) => (
            <div key={index.toString()}>
              <div className={classes.item}>
                <NewsCard
                  img={item.img}
                  text={item.text}
                  type={item.type}
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default NewsEvent;

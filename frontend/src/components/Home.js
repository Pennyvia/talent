import { useState, useEffect } from 'react';
import slide01 from '../static/slide1.jpg';
import slide02 from '../static/slide2.jpg';
import slide03 from '../static/slide3.jpg';
import slide04 from '../static/slide4.jpg';
import slide05 from '../static/slide5.jpg';

import Carousel from 'react-bootstrap/Carousel';

const slides = [
  slide01, slide02, slide03, slide04, slide05
];

const Home = () => {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index === slides.length - 1 ? 0 : index + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  return (
   <Carousel activeIndex={index} onSelect={() => {}}>
      {slides.map(slide => (
        <Carousel.Item>
          <img className="d-block w-100" src={slide} alt="slide" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Home;



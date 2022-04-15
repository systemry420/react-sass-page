import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft, faChevronRight, faCircle
} from '@fortawesome/free-solid-svg-icons'
import image1 from '../assets/images/Rectangle 10.png'
import image2 from '../assets/images/Rectangle 11.png'
import image3 from '../assets/images/Rectangle 12.png'
import "../styles/components/carousel.scss";

const Carousel = () => {
  const [index, setIndex] = React.useState(0)
  const [images, setImages] = React.useState([
    {
      url: image1,
      alt: 'image 1'
    },
    {
      url: image2,
      alt: 'image 2'
    },
    {
      url: image3,
      alt: 'image 3'
    }
  ])

  useEffect(() => {
    const lastIndex = images.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, images]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 4000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="carousel">
      <div className="section-center">
        {images.map((image, imageIndex) => {

          let position = 'nextSlide';
          if (imageIndex === index) {
            position = 'activeSlide';
          }
          if (
            imageIndex === index - 1 ||
            (index === 0 && imageIndex === images.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <article className={position} key={image.alt}>
              <img src={image.url} alt={image.alt} className="image-img" />
            </article>
          );
        })}
      </div>
      <div className='buttons'>
        <span className="prev" onClick={() => setIndex(index - 1)}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </span>
        {images.map((image, idx) => (
          <span onClick={() => setIndex(idx)} className={`circle ${index === idx ? 'active': ''}`}>
            <FontAwesomeIcon icon={faCircle} />
          </span>
        ))}
        <span className="next" onClick={() => setIndex(index + 1)}>
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
      </div>
    </section>
  );
}

export default Carousel
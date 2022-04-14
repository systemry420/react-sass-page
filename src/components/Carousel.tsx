import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft, faChevronRight
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
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
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
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  );
}

export default Carousel
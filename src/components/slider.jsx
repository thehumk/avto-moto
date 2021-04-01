import React from 'react';
import PropTypes from 'prop-types';
import slide1 from '../img/desktop_slide_1.jpg';
import slide2 from '../img/desktop_slide_2.jpg';
import slide3 from '../img/desktop_slide_3.jpg';
import {withSlider} from '../hocs/with-slider';

const Slides = {
  '1': slide1,
  '2': slide2,
  '3': slide3,
};

const Slider = ({slide, nextSlideHandler, previousSlideHandler}) => {
  return (
    <div className="car-card__slider slider">
      <div className="slider__wrapper">
        <span className="slider__new-model">New model</span>
        <img className="slider__slide" src={Slides[`${slide}`]} width="600" height="375" alt="slide"/>
      </div>

      <div className="slider__control-panel">
        <button className={`slider__button-control slider__button-control--back ${slide === 1 ? `` : `slider__button-control--active`}`} onClick={previousSlideHandler} disabled={slide === 1 ? `disabled` : ``}>
          <span className="visually-hidden">Предыдущий слайд</span>
        </button>
        <ul className="slider__slide-list">
          <li>
            <img src={slide1} alt="Слайд 1" width="128" height="80"/>
          </li>
          <li>
            <img src={slide2} alt="Слайд 2" width="128" height="80"/>
          </li>
          <li>
            <img src={slide3} alt="Слайд 3" width="128" height="80"/>
          </li>
        </ul>
        <button className={`slider__button-control slider__button-control--next ${slide === Object.keys(Slides).length ? `` : `slider__button-control--active`}`} onClick={nextSlideHandler} disabled={slide === Object.keys(Slides).length ? `disabled` : ``}>
          <span className="visually-hidden">Следующий слайд</span>
        </button>
      </div>
    </div>
  );
};

Slider.propTypes = {
  slide: PropTypes.number.isRequired,
  nextSlideHandler: PropTypes.func.isRequired,
  previousSlideHandler: PropTypes.func.isRequired,
};

export default withSlider(Slider);

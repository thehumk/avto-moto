import React from 'react';
import PropTypes from 'prop-types';
import {withSlider} from '../hocs/with-slider';
import {Slides} from '../mocks/slides';

const Slider = ({slide, onNextSlide, onPreviousSlide}) => {
  return (
    <div className="car-card__slider slider">
      <div className="slider__wrapper">
        <span className="slider__new-model">New model</span>
        <img className="slider__slide" src={Slides[`${slide}`]} width="600" height="375" alt="slide"/>
      </div>

      <div className="slider__control-panel">
        <button className={`slider__button-control slider__button-control--back ${slide === 1 ? `` : `slider__button-control--active`}`} onClick={onPreviousSlide} disabled={slide === 1 ? `disabled` : ``}>
          <span className="visually-hidden">Предыдущий слайд</span>
        </button>
        <ul className="slider__slide-list">
          <li>
            <img src={Slides[`1`]} alt="Слайд 1" width="128" height="80"/>
          </li>
          <li>
            <img src={Slides[`2`]} alt="Слайд 2" width="128" height="80"/>
          </li>
          <li>
            <img src={Slides[`3`]} alt="Слайд 3" width="128" height="80"/>
          </li>
        </ul>
        <button className={`slider__button-control slider__button-control--next ${slide === Object.keys(Slides).length ? `` : `slider__button-control--active`}`} onClick={onNextSlide} disabled={slide === Object.keys(Slides).length ? `disabled` : ``}>
          <span className="visually-hidden">Следующий слайд</span>
        </button>
      </div>
    </div>
  );
};

Slider.propTypes = {
  slide: PropTypes.number.isRequired,
  onNextSlide: PropTypes.func.isRequired,
  onPreviousSlide: PropTypes.func.isRequired,
};

export default withSlider(Slider);

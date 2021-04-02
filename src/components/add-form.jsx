import React from 'react';
import PropTypes from 'prop-types';
import {Repeat} from '../utils';

const AddForm = ({onAddFormClose, onValueChange, onSubmit, onBlurValidationCheck}) => {
  return (
    <div className="reviews__add-form add-form" onClick={onAddFormClose}>
      <form action="#" className="add-form__form" onSubmit={onSubmit} onClick={(evt) => evt.stopPropagation()}>
        <h3 className="add-form__title">Оставить отзыв</h3>
        <button type="button" className="add-form__close-btn" onClick={onAddFormClose}><span className="visually-hidden">Закрыть окно</span></button>

        <div className="add-form__wrapper">
          <div className="add-form__required-wrapper" onBlur={onBlurValidationCheck}>
            <label htmlFor="name">
              <span className="add-form__required-message add-form__required-message--name">Пожалуйста, заполните поле</span>
              <span className="add-form__required-star"></span>
            </label>
            <input
              className="add-form__input add-form__input--required add-form__input--name"
              type="text"
              name="name"
              id="name"
              placeholder="Имя"
              value={localStorage.getItem(`name`) !== null ? localStorage.getItem(`name`) : ``}
              onChange={onValueChange}
              autoFocus/>
          </div>

          <input
            className="add-form__input add-form__input--advantage"
            type="text"
            name="advantage"
            id="advantage"
            placeholder="Достоинства"
            value={localStorage.getItem(`advantage`) !== null ? localStorage.getItem(`advantage`) : ``}
            onChange={onValueChange}/>
          <input
            className="add-form__input"
            type="text"
            name="disadvantage"
            id="disadvantage"
            placeholder="Недостатки"
            value={localStorage.getItem(`disadvantage`) !== null ? localStorage.getItem(`disadvantage`) : ``}
            onChange={onValueChange}/>

          <div className="add-form__rating">
            <span className="add-form__rating-title">Оцените товар:</span>
            <div>
              <Repeat numTimes={5}>
                {(i) => (
                  <input
                    key={i}
                    className="add-form__radio"
                    type="radio"
                    id={`star-${i + 1}`}
                    name="rating"
                    value={i + 1}
                    onChange={onValueChange}
                    defaultChecked={localStorage.getItem(`rating`) === `${i + 1}` ? `defaultChecked` : ``}/>
                )}
              </Repeat>
              <Repeat numTimes={5}>
                {(i) => (
                  <label key={i} className="add-form__star" htmlFor={`star-${i + 1}`}></label>
                )}
              </Repeat>
            </div>
          </div>

          <div className="add-form__required-wrapper" onBlur={onBlurValidationCheck}>
            <label htmlFor="comment">
              <span className="add-form__required-message add-form__required-message--comment">Пожалуйста, заполните поле</span>
              <span className="add-form__required-star"></span>
            </label>
            <textarea
              className="add-form__input add-form__input--required add-form__input--comment"
              type="text"
              name="comment"
              id="comment"
              placeholder="Комментарий"
              value={localStorage.getItem(`comment`) !== null ? localStorage.getItem(`comment`) : ``}
              onChange={onValueChange}/>
          </div>
        </div>
        <button className="add-form__submit-btn" type="submit">Оставить отзыв</button>
      </form>
    </div>
  );
};

AddForm.propTypes = {
  onAddFormClose: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onBlurValidationCheck: PropTypes.func.isRequired,
};

export default AddForm;

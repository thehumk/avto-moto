import React from 'react';
import PropTypes from 'prop-types';

const AddForm = ({addFormCloseHandler, valueChangeHandler, submitHandler}) => {
  return (
    <div className="reviews__add-form add-form" onClick={addFormCloseHandler}>
      <form action="#" className="add-form__form" onSubmit={submitHandler} onClick={(evt) => evt.stopPropagation()}>
        <h3 className="add-form__title">Оставить отзыв</h3>
        <button type="button" className="add-form__close-btn" onClick={addFormCloseHandler}><span className="visually-hidden">Закрыть окно</span></button>

        <div className="add-form__wrapper">
          <div className="add-form__required-wrapper">
            <label htmlFor="name" className="add-form__required"></label>
            <input className="add-form__input add-form__input--name" type="text" name="name" id="name" placeholder="Имя" value={localStorage.getItem(`name`) !== null ? localStorage.getItem(`name`) : ``} onChange={valueChangeHandler} autoFocus required/>
          </div>

          <input className="add-form__input add-form__input--advantage" type="text" name="advantage" id="advantage" placeholder="Достоинства" value={localStorage.getItem(`advantage`) !== null ? localStorage.getItem(`advantage`) : ``} onChange={valueChangeHandler}/>
          <input className="add-form__input" type="text" name="disadvantage" id="disadvantage" placeholder="Недостатки" value={localStorage.getItem(`disadvantage`) !== null ? localStorage.getItem(`disadvantage`) : ``} onChange={valueChangeHandler}/>

          <div className="add-form__rating">
            <span className="add-form__rating-title">Оцените товар:</span>
            <div>
              <input className="add-form__radio" type="radio" id="star-1" name="rating" value="1" onChange={valueChangeHandler} defaultChecked={localStorage.getItem(`rating`) === `1` ? `defaultChecked` : ``}/>
              <input className="add-form__radio" type="radio" id="star-2" name="rating" value="2" onChange={valueChangeHandler} defaultChecked={localStorage.getItem(`rating`) === `2` ? `defaultChecked` : ``}/>
              <input className="add-form__radio" type="radio" id="star-3" name="rating" value="3" onChange={valueChangeHandler} defaultChecked={localStorage.getItem(`rating`) === `3` ? `defaultChecked` : ``}/>
              <input className="add-form__radio" type="radio" id="star-4" name="rating" value="4" onChange={valueChangeHandler} defaultChecked={localStorage.getItem(`rating`) === `4` ? `defaultChecked` : ``}/>
              <input className="add-form__radio" type="radio" id="star-5" name="rating" value="5" onChange={valueChangeHandler} defaultChecked={localStorage.getItem(`rating`) === `5` ? `defaultChecked` : ``}/>

              <label className="add-form__star" htmlFor="star-1"></label>
              <label className="add-form__star" htmlFor="star-2"></label>
              <label className="add-form__star" htmlFor="star-3"></label>
              <label className="add-form__star" htmlFor="star-4"></label>
              <label className="add-form__star" htmlFor="star-5"></label>
            </div>
          </div>

          <div className="add-form__required-wrapper">
            <label htmlFor="comment" className="add-form__required"></label>
            <textarea className="add-form__input add-form__input--comment" type="text" name="comment" id="comment" placeholder="Комментарий" value={localStorage.getItem(`comment`) !== null ? localStorage.getItem(`comment`) : ``} onChange={valueChangeHandler} required/>
          </div>
        </div>
        <button className="add-form__submit-btn" type="submit">Оставить отзыв</button>
      </form>
    </div>
  );
};

AddForm.propTypes = {
  addFormCloseHandler: PropTypes.func.isRequired,
  valueChangeHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired,
};

export default AddForm;

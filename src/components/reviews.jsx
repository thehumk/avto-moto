import React from 'react';
import PropTypes from 'prop-types';
import AddForm from "./add-form";
import {withReviews} from '../hocs/with-reviews';

const Reviews = ({reviews, isOpen, onAddFormOpen, onAddFormClose, onValueChange, onSubmit, onBlurValidationCheck}) => {
  return (
    <section className="description-car__reviews reviews">
      <button className="reviews__add-review" onClick={onAddFormOpen}>Оставить отзыв</button>
      {reviews.map((elem, i) => (
        <div className="reviews__review" key={i}>
          <h3 className="reviews__author">{elem.author}</h3>

          <ul className="reviews__list">
            <li className="reviews__item reviews__item--advantage">
              <h4 className="reviews__name">Достоинства</h4>
              <p className="reviews__value">{elem.advantage}</p>
            </li>
            <li className="reviews__item reviews__item--disadvantage">
              <h4 className="reviews__name">Недостатки</h4>
              <p className="reviews__value">{elem.disadvantage}</p>
            </li>
            <li className="reviews__item">
              <h4 className="reviews__name">Комментарий</h4>
              <p className="reviews__value">{elem.comment}</p>
            </li>
          </ul>

          <div className="reviews__rating">
            <div className="reviews__rating-wrapper">
              <span className={`reviews__star ${elem.rating >= 1 ? `reviews__star--active` : ``}`}></span>
              <span className={`reviews__star ${elem.rating >= 2 ? `reviews__star--active` : ``}`}></span>
              <span className={`reviews__star ${elem.rating >= 3 ? `reviews__star--active` : ``}`}></span>
              <span className={`reviews__star ${elem.rating >= 4 ? `reviews__star--active` : ``}`}></span>
              <span className={`reviews__star ${elem.rating >= 5 ? `reviews__star--active` : ``}`}></span>
            </div>
            <span className="reviews__reccomend">{elem.rating >= 3 ? `Советует` : `Не советует`}</span>
          </div>

          <div className="reviews__communication">
            <span className="reviews__time">{elem.date}</span>
            <button className="reviews__answer">Ответить</button>
          </div>
        </div>
      ))}
      {isOpen && (
        <AddForm
          onAddFormClose={onAddFormClose}
          onSubmit={onSubmit}
          onValueChange={onValueChange}
          onBlurValidationCheck={onBlurValidationCheck}
        />
      )}
    </section>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    advantage: PropTypes.string.isRequired,
    disadvantage: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onAddFormOpen: PropTypes.func.isRequired,
  onAddFormClose: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onBlurValidationCheck: PropTypes.func.isRequired,
};

export default withReviews(Reviews);

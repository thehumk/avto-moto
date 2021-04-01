import React from 'react';
import PropTypes from 'prop-types';
import {withCarCard} from '../hocs/with-car-card';
import Specifications from './specifications';
import Reviews from './reviews';
import Contacts from './contacts';
import Slider from './slider';
import {TypeTabs} from '../const';

const CarCard = (props) => {
  const {tab, tabsClickHandler} = props;
  return (
    <div>
      <section className="car-card">
        <Slider/>
        <div className="car-card__car-info car-info">
          <h2 className="car-info__title">Марпех 11</h2>

          <ul className="car-info__specification-list">
            <li className="car-info__specification-item car-info__specification-item--fuel">бензин</li>
            <li className="car-info__specification-item car-info__specification-item--transmission">механика</li>
            <li className="car-info__specification-item car-info__specification-item--hp">100 л.с.</li>
            <li className="car-info__specification-item car-info__specification-item--engine-volume">1.4 л</li>
          </ul>

          <div className="car-info__price-block">
            <p className="car-info__new-price">2 300 000 ₽</p>
            <p className="car-info__old-price">2&nbsp;&nbsp;400 000 ₽</p>
          </div>

          <div className="car-info__purchase__block">
            <a className="car-info__submit-application" href="#">Оставить заявку</a>
            <a className="car-info__credit" href="#">В кредит от 11 000 ₽</a>
          </div>
        </div>
      </section>

      <section className="description-car">
        <ul className="description-car__tab-list">
          <li className={`description-car__tab-item description-car__tab-item--specifications ${tab === TypeTabs.SPECIFICATIONS ? `description-car__tab-item--active` : ``}`} tabIndex="0" onClick={() => {
            tabsClickHandler(TypeTabs.SPECIFICATIONS);
          }}>Характеристики</li>
          <li className={`description-car__tab-item description-car__tab-item--reviews ${tab === TypeTabs.REVIEWS ? `description-car__tab-item--active` : ``}`} tabIndex="0" onClick={() => {
            tabsClickHandler(TypeTabs.REVIEWS);
          }}>Отзывы</li>
          <li className={`description-car__tab-item description-car__tab-item--contacts ${tab === TypeTabs.CONTACTS ? `description-car__tab-item--active` : ``}`} tabIndex="0" onClick={() => {
            tabsClickHandler(TypeTabs.CONTACTS);
          }}>Контакты</li>
        </ul>

        {tab === TypeTabs.SPECIFICATIONS && (
          <Specifications/>
        )}
        {tab === TypeTabs.REVIEWS && (
          <Reviews/>
        )}
        {tab === TypeTabs.CONTACTS && (
          <Contacts/>
        )}
      </section>
    </div>
  );
};

CarCard.propTypes = {
  tab: PropTypes.string.isRequired,
  tabsClickHandler: PropTypes.func.isRequired,
};

export default withCarCard(CarCard);

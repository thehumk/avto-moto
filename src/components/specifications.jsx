import React from 'react';

const Specifications = () => {
  return (
    <section className="description-car__specifications specifications">
      <ul className="specifications__list">
        <li className="specifications__item">
          <p className="specifications__name">Трансмиссия</p>
          <p className="specifications__value">Роботизированная</p>
        </li>
        <li className="specifications__item">
          <p className="specifications__name">Мощность двигателя, л.с.</p>
          <p className="specifications__value">249</p>
        </li>
        <li className="specifications__item">
          <p className="specifications__name">Тип двигателя</p>
          <p className="specifications__value">Бензиновый</p>
        </li>
        <li className="specifications__item">
          <p className="specifications__name">Привод</p>
          <p className="specifications__value">Полный</p>
        </li>
        <li className="specifications__item">
          <p className="specifications__name">Объем двигателя, л</p>
          <p className="specifications__value">2.4</p>
        </li>
        <li className="specifications__item">
          <p className="specifications__name">Макс. крутящий момент</p>
          <p className="specifications__value">370/4500</p>
        </li>
        <li className="specifications__item">
          <p className="specifications__name">Количество цилиндров</p>
          <p className="specifications__value">4</p>
        </li>
      </ul>
    </section>
  );
};

export default Specifications;

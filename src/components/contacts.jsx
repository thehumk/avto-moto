import React from 'react';

const Contacts = () => {
  return (
    <section className="description-car__contacts contacts">
      <ul className="contacts__list">
        <li className="contacts__item">
          <h3 className="contacts__name contacts__name--address">Адрес</h3>
          <p className="contacts__value">Санкт-Петербург,<br/>набережная реки Карповки, дом 5</p>
        </li>
        <li className="contacts__item">
          <h3 className="contacts__name">Режим работы</h3>
          <p className="contacts__value">Ежедневно, с 10:00 до 21:00</p>
        </li>
        <li className="contacts__item">
          <h3 className="contacts__name">Телефон</h3>
          <p className="contacts__value">8 (800) 333-55-99</p>
        </li>
        <li className="contacts__item">
          <h3 className="contacts__name">E-mail</h3>
          <p className="contacts__value">info@avto-moto.ru</p>
        </li>
      </ul>
      <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A742fbd30ff3f11d3443a760da1f6a8ae8a857a1183b635daf411e9c1e3e7495f&amp;source=constructor" width="431" height="271" style={{border: 0}}></iframe>
    </section>
  );
};

export default Contacts;

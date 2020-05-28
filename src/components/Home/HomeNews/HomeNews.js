import React, {Component} from 'react'

import img1 from '../../../assets/image/catt1.png'
import img2 from '../../../assets/image/catt2.png'
import img3 from '../../../assets/image/catt3.png'

class HomeNews extends Component {

  render() {

    return (
      <section className="catering">
        <div className="catering__title">
          SMART кейтеринг на все случаи жизни
        </div>
        <div className="catering__items">
          <div className="catering__item">
            <div className="catering__img">
              <img src={img1} alt="img"/>
            </div>
            <div className="catering__name">
              Catering
            </div>
            <div className="catering__caption">
              доставка 24 часа*
            </div>
            <div className="catering__btn">
              <a href="#" className="site-btn">Подробнее</a>
            </div>
          </div>
          <div className="catering__item">
            <div className="catering__img">
              <img src={img2} alt="img"/>
            </div>
            <div className="catering__name">
              Box
            </div>
            <div className="catering__caption">
              доставка 2-3 часа*
            </div>
            <div className="catering__btn">
              <a href="#" className="site-btn">Подробнее</a>
            </div>
          </div>
          <div className="catering__item">
            <div className="catering__img">
              <img src={img3} alt="img"/>
            </div>
            <div className="catering__name">
              Дополнительно
            </div>
            <div className="catering__caption">
              к боксам
            </div>
            <div className="catering__btn">
              <a href="#" className="site-btn">Подробнее</a>
            </div>
          </div>
        </div>
        <div className="catering__footnote">
          <div>
            *Точные сроки доставки зависят от объема заказа и необходимо уточнять у менеджера,
            принимающего заказ.
          </div>
        </div>
      </section>
    )
  }
}

export default HomeNews

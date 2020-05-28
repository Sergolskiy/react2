import React, {Component} from 'react'

import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'

import img1 from '../../../assets/image/slider.png'
import img2 from '../../../assets/image/slider2.png'
import img3 from '../../../assets/image/slider3.png'
import img4 from '../../../assets/image/slider4.png'

class TopSlider extends Component {

  render() {

    return (
      <section className="top-slider">
        <OwlCarousel items='1'>
          <div className="top-slider__item">
            <div className="top-slider__left">
              <div className="top-slider__banner">
                <div className="top-slider__red">
                  Впервые!
                </div>
                <div className="top-slider__title">
                  Smart кейтеринг в России
                </div>
                <div className="top-slider__caption">
                  Готовые закуски на все случаи жизни
                </div>
                <div className="top-slider__btn">
                  <a href="#" className="site-btn">В каталог</a>
                </div>
              </div>
              <div className="top-slider__images">
                <div className="top-slider__img">
                  <img src={img2} alt="img"/>
                </div>
                <div className="top-slider__img">
                  <img src={img3} alt="img"/>
                </div>
                <div className="top-slider__img">
                  <img src={img4} alt="img"/>
                </div>
              </div>
            </div>
            <div className="top-slider__right">
              <img src={img1} alt="img"/>
            </div>
          </div>
          <div className="top-slider__item">
            <div className="top-slider__left">
              <div className="top-slider__banner">
                <div className="top-slider__red">
                  Впервые!
                </div>
                <div className="top-slider__title">
                  Smart кейтеринг в России
                </div>
                <div className="top-slider__caption">
                  Готовые закуски на все случаи жизни
                </div>
                <div className="top-slider__btn">
                  <a href="#" className="site-btn">В каталог</a>
                </div>
              </div>
              <div className="top-slider__images">
                <div className="top-slider__img">
                  <img src={img2} alt="img"/>
                </div>
                <div className="top-slider__img">
                  <img src={img3} alt="img"/>
                </div>
                <div className="top-slider__img">
                  <img src={img4} alt="img"/>
                </div>
              </div>
            </div>
            <div className="top-slider__right">
              <img src={img1} alt="img"/>
            </div>
          </div>
          <div className="top-slider__item">
            <div className="top-slider__left">
              <div className="top-slider__banner">
                <div className="top-slider__red">
                  Впервые!
                </div>
                <div className="top-slider__title">
                  Smart кейтеринг в России
                </div>
                <div className="top-slider__caption">
                  Готовые закуски на все случаи жизни
                </div>
                <div className="top-slider__btn">
                  <a href="#" className="site-btn">В каталог</a>
                </div>
              </div>
              <div className="top-slider__images">
                <div className="top-slider__img">
                  <img src={img2} alt="img"/>
                </div>
                <div className="top-slider__img">
                  <img src={img3} alt="img"/>
                </div>
                <div className="top-slider__img">
                  <img src={img4} alt="img"/>
                </div>
              </div>
            </div>
            <div className="top-slider__right">
              <img src={img1} alt="img"/>
            </div>
          </div>
        </OwlCarousel>
      </section>
    )
  }
}

export default TopSlider

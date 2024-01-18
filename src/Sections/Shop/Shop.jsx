import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import "./Shop.css";
import data from '../../constants/swiper.json'
import { RiShoppingCartLine, RiStarFill, RiHeartLine, RiEyeLine } from 'react-icons/ri'
import { swiperSettings } from '../../constants';

const Shop = () => {
  return (
    <section id="shop">
      <div className="shop-container container">
        <div className="title">
          <h2>Nuevos productos!</h2>
        </div>
        <Swiper {...swiperSettings} >
          <SwiperButtons />
        {
          data.map((card, i) => (
            <SwiperSlide key={i} >
              <div className="item-card">
                <img src={card.imgURL} alt="" />
                <h4>{card.name}</h4>
                <p>{card.category}</p>
                <div className="rating">
                  <a href=""><RiStarFill/></a>
                  <a href=""><RiStarFill/></a>
                  <a href=""><RiStarFill/></a>
                  <a href=""><RiStarFill/></a>
                  <a href=""><RiStarFill/></a>
                </div>
                <div className="price">
                  <span>{card.price}</span>
                  <span>{card.old}</span>
                </div>
                {/* <div className="card-buttons">
                  <button className="btn">Ver detalles</button>
                  <button className="btn">Añadir al carrito</button>
                </div> */}
                <div className="card-icons">
                  <a href="https://chat.whatsapp.com/CFrnaGd5cgzJ9aFmHH3f1u"><RiHeartLine/></a>
                  <a href="https://chat.whatsapp.com/CFrnaGd5cgzJ9aFmHH3f1u"><RiEyeLine/></a>
                  <a href="https://chat.whatsapp.com/CFrnaGd5cgzJ9aFmHH3f1u"><RiShoppingCartLine/></a>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
        </Swiper>
      </div>
    </section>
  );
};

export default Shop;

const SwiperButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="swiper-buttons">
      <button className="btn" onClick={() => swiper.slidePrev()}>&lt;</button>
      <button className="btn" onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  )
}
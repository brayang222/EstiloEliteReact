import { useState } from "react";
import "./Hero.css";
import CountUp from "react-countup";
import { watchsData } from "../../constants";
import watch1 from "../../../public/relojes/watch1.webp";
import WatchCard from "../../components/watchCard";

const Hero = () => {
  const [watchImg, setwatchImg] = useState(watch1);
  return (
    <section id="hero">
      <div className="hero-container container">
        <div className="hero-left">
          <h1>Busca tu estilo perfecto</h1>
          <p>
            "El Estilo Élite para hombres es más que moda, es una declaración de
            poder y elegancia. Asume el control de tu vida, forjando una imagen
            que refleje tu presencia y autoestima."
          </p>
          <button
            className="btn"
            onClick={() =>
              window.open(
                "https://chat.whatsapp.com/CFrnaGd5cgzJ9aFmHH3f1u",
                "_blank"
              )
            }
          >
            Compra ahora
          </button>

          <div className="hero-stats">
            <div className="stat-box">
              <span>
                <CountUp start={1400} end={1500} duration={4} />
                <p>+</p>
              </span>
              <span>Brands</span>
            </div>
            <div className="stat-box">
              <span>
                <CountUp start={30} end={50} duration={4} />
                <p>+</p>
              </span>
              <span>Stock</span>
            </div>
            <div className="stat-box">
              <span>
                <CountUp start={98700} end={99000} duration={4} />
                <p>+</p>
              </span>
              <span>Customers</span>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <img src={watchImg} alt="" />
          <div className="hero-right-container">
            {watchsData.map((watch, i) => (
              <div key={i}>
                <WatchCard
                  imgURL={watch}
                  changeWatchImage={(watch) => setwatchImg(watch)}
                  watchImg={watchImg}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

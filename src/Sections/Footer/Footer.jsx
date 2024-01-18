import './Footer.css'
import { RiMapPinFill, RiMailFill, RiPhoneFill} from 'react-icons/ri'

const Footer = () => {
  return (
    <section id="contact">
      <div className="footer-container container">
        <div className="footer-box">
          <div className="footer-title"> Promo  </div>
            <img src="/camisareloj.webp" alt="" />
            <h4>Nuevo trend de estilo en 2024</h4>
            <p>Promocion</p>
        </div>
        <div className="footer-box">
        <div className="footer-title"> Links rapidos  </div>
          <div className="footer-row">
            <div className="col">
              <li><a href="">Vende enlinea</a></li>
              <li><a href="">Novedades</a></li>
              <li><a href="">Categorias</a></li>
              <li><a href="">Deals</a></li>
              <li><a href="">Ultimas tendencias</a></li>
            </div>
            <div className="col">
              <li><a href="">Marcas</a></li>
              <li><a href="">Devolver</a></li>
              <li><a href="">Politica de privacidad</a></li>
              <li><a href="">Deals</a></li>
              <li><a href="">Tendencias</a></li>
            </div>
            <div className="col">
              <li><a href="">Mejores ventas</a></li>
              <li><a href="">Nuevos productos</a></li>
              <li><a href="">Contacto</a></li>
              <li><a href="">Terminos y servicios</a></li>
              <li><a href="">Ultimas tendencias</a></li>
            </div>
          </div>
        </div>
        <div className="footer-box">
            <h5 className="footer-title">Contactanos</h5>
            <p> <span><RiMapPinFill /></span> Santuario - Medellin</p>
            <p> <span><RiPhoneFill /></span> 3126177800</p>
            <p> <span><RiMailFill /></span> estiloelite1812@gmail.com</p>
        </div>
      </div>
    </section>
  )
}

export default Footer
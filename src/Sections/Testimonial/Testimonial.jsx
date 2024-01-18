import './Testimonial.css'
import { RiDoubleQuotesL } from 'react-icons/ri';


const Testimonial = () => {
  return (
    <section id="testimonial">
          <div className="title">
            <h2>Creadores</h2>
          </div>
          <div className="testimonial-container container">
            <div className="testimonial-card">
              <img src="/varg1.webp" alt="" />
              <h4>Camilo Vargas</h4>
              <h5>CEO & fundador</h5>
              <div className="quotes">
                <RiDoubleQuotesL />
              </div>
              <p></p>
            </div>
            <div className="testimonial-card">
              <img src="/varg2.webp" alt="" />
              <h4>Brayan Vargas</h4>
              <h5>CEO & fundador</h5>
              <div className="quotes">
                <RiDoubleQuotesL />
              </div>
              <p></p>
            </div>
          </div>
    </section>
  )
}

export default Testimonial
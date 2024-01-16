import './Deal.css'

const Deal = () => {
  return (
    <section id="deal">
      <div className="deal-container container">
        <div className="deal-left">
          <img src="/watch1.png" alt="" />
        </div>
        <div className="deal-right">
          <h4>#Una coleccion maravillosa para estas fechas</h4>
          <h1>Aprovecha!</h1>
          <button className="btn">Compra ahora</button>
        </div>
      </div>
    </section>
  )
}

export default Deal
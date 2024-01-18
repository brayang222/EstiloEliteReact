import "./Deal.css";

const Deal = () => {
  return (
    <section id="deal">
      <div className="deal-container container">
        <div className="deal-left">
          <img src="../../../relojes/watch1.webp" alt="" />
        </div>
        <div className="deal-right">
          <h4>#Una coleccion maravillosa para estas fechas</h4>
          <h1>Aprovecha!</h1>
          <button
            className="btn"
            onClick={() =>
              (window.location.href =
                "https://chat.whatsapp.com/CFrnaGd5cgzJ9aFmHH3f1u")
            }
          >
            Compra ahora
          </button>
        </div>
      </div>
    </section>
  );
};

export default Deal;

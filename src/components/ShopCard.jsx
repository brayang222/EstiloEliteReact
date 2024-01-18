import React, { useState } from 'react';
import Modal from 'react-modal';
import './ShopCard.css'; // Agrega un archivo CSS separado para los estilos de ShopCard

const ShopCard = ({ imgURL, name, price, old, desc }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="shop-card">
      <img src={imgURL} alt={name} className="card-image" />
      <h4 className="card-title">{name}</h4>
      <div className="price-container">
        <p className="price">{price}</p>
        <p className="old">{old}</p>
      </div>
      <div className="card-buttons">
        <button className='btn' onClick={openModal}>Detalle</button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Detalles del Producto"
        className="modal-content" 
        overlayClassName="modal-overlay" 
      >
        <img src={imgURL} alt={name} className="modal-image" />
        <h2 className="modal-title">{name}</h2>
        <p className="modal-desc">{desc}</p>
        <div className="card-buttons">
          <button className='btn' onClick={closeModal}>Cerrar</button>
        </div>
      </Modal>
    </div>
  );
};

export default ShopCard;

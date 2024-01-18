// Compras.jsx
import React, { useState, useEffect } from 'react';
import data from '../constants/products.json';
import ShopCard from '../components/ShopCard';
import FilterByCategory from '../components/FilterByCategory';
import './Compras.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');
const Compras = () => {
  const [linesToShow, setLinesToShow] = useState(8);
  const [showLess, setShowLess] = useState(false);
  const [lazyLoad, setLazyLoad] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [...new Set(data.map((product) => product.category))];

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setLinesToShow(8); // Reinicia la cantidad de líneas mostradas al seleccionar una categoría
  };

  const handleVerMasClick = () => {
    setLinesToShow(data.length);
    setShowLess(true);
  };

  const handleVerMenosClick = () => {
    setLinesToShow(8);
    setShowLess(false);
  };

  useEffect(() => {
    const handleLazyLoad = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight &&
        lazyLoad &&
        isLoading
      ) {
        setTimeout(() => {
          setLinesToShow(linesToShow + 1);
          setIsLoading(false);
        }, 500);
      }
    };

    window.addEventListener('scroll', handleLazyLoad);

    return () => {
      window.removeEventListener('scroll', handleLazyLoad);
    };
  }, [linesToShow, lazyLoad, isLoading]);

  const filteredData = selectedCategory
    ? data.filter((product) => product.category === selectedCategory)
    : data;

  return (
    <section id="compras">
      <div className="title">
        <h2 className='our-products' > Nuestros productos</h2>
        <div className="parrafo-container">
          <p className="parrafo" style={{ maxWidth: '75ch' }}>
            Nuestros relojes combinan elegancia y funcionalidad para reflejar tu estilo único. Desde diseños clásicos hasta modelos innovadores, cada pieza es una declaración de excelencia, perfecta para destacar en cualquier ocasión.
          </p>
        </div>
      </div>
      <FilterByCategory categories={categories} onSelectCategory={handleSelectCategory} />

      <div className="shop-cards-container" >
        {filteredData.slice(0, linesToShow).map((shop, index) => (
          <ShopCard key={shop.name} {...shop} />
        ))}
      </div>
      {showLess && (
        <center>
          <button className="ver-mas-btn btn" onClick={handleVerMenosClick}>
            Ver menos
          </button>
        </center>
      )}
      {linesToShow < filteredData.length && !showLess && (
        <center>
          <button className="ver-mas-btn btn" onClick={handleVerMasClick}>
            Ver más
          </button>
        </center>
      )}
    </section>
  );
};

export default Compras;

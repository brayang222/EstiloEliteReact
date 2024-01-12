import { useState } from 'react'
import './Navbar.css'
import { RiCloseFill, RiHeartFill, RiMenu3Fill, RiSearchLine, RiShoppingCartFill, RiUserFill } from 'react-icons/ri'

const Navbar = () => {
  const [menuOpened, setmenuOpened] = useState(false);
  return (
    <header>
      <nav>
        {/* Para computador */}
        <div className="tn-container container">
          <a href="" className='logo'>Estilo Élite</a>
          <div className="search-box">
            <input type="search" name='search' id='' placeholder='Search for products'/>
            <div className="search-icon"><RiSearchLine/></div>
          </div>
          <div className="tn-icons">
            <a href=""><RiUserFill/></a>
            <a className='fav-icon' href=""><RiHeartFill/><span className='count'>0</span></a>
            <a className='cart-icon' href=""><RiShoppingCartFill/><span className='count'>0</span></a>
          </div>
        </div>
        <hr />
        <div className="bn-container container">
          <ul className="navlist">
          <li><a href="#home">Inicio</a></li>
            <li><a href="#categories">Categoria</a></li>
            <li><a href="#shop">Compra</a></li>
            <li><a href="#deal">deal</a></li>
            <li><a href="#tesimonial">Testimonios</a></li>
            <li><a href="#blog">blog</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>
        {/* Para celular */}
        <div className="nm-nav">
          <div className="nm-container container">
            <a href="" className="logo">Estilo Élite</a>
            <ul className="nav-menu" style={{ transform: menuOpened && "translate(0%)"}}>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#categories">Categoria</a></li>
            <li><a href="#shop">Compra</a></li>
            <li><a href="#deal">deal</a></li>
            <li><a href="#tesimonial">Testimonios</a></li>
            <li><a href="#blog">blog</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
          <div className="menu-btn">
            {!menuOpened ?
              <RiMenu3Fill size={30} onClick={() => setmenuOpened(true)} />
              : <RiCloseFill size={30} onClick={() => setmenuOpened(false)}/>
            }
          </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
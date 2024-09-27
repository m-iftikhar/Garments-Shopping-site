<<<<<<< HEAD
import React, { useContext } from 'react'
=======
import React, { useContext, useRef } from 'react'
>>>>>>> 4ed2e08 (add admin folder and backend folder)
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { VscNoNewline } from 'react-icons/vsc'
import { ShopContext } from '../Context/ShopContext'
<<<<<<< HEAD

const Navbar = () => {
  const [menu , setMenu] = React.useState("shop")
   const {getTotalCartItem}=useContext(ShopContext);

=======
import nav_dropdown from '../Assets/nav_dropdown.png'
const Navbar = () => {
  const [menu , setMenu] = React.useState("shop")
   const {getTotalCartItem}=useContext(ShopContext);
    const menuRef=useRef();
    const dropdowntoggle=(e)=>{
        menuRef.current.classList.toggle("nav-menu-visible");
        e.target.classList.toggle("open");
    }
>>>>>>> 4ed2e08 (add admin folder and backend folder)
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img  src={logo} alt=''/> 
        <p>SHOPPER</p>
        </div>
<<<<<<< HEAD

        <ul className='nav-menu'>
=======
          <img  className='nav_dropdown' onClick={dropdowntoggle} src={nav_dropdown} alt=''/>
        <ul ref={menuRef} className='nav-menu'>
>>>>>>> 4ed2e08 (add admin folder and backend folder)
          <li onClick={()=>{setMenu("shop")}} > <Link  style={{textDecoration: 'none'}} to='/'>Shop</Link>{ menu =="shop" ? <hr/>: <> </>}</li>
          <li onClick={()=>{setMenu("mens")}}> <Link style={{textDecoration: 'none'}} to='/mens'> Men</Link> { menu =="mens" ? <hr/>: <> </>}</li>
          <li onClick={()=>{setMenu("womens")}}> <Link style={{textDecoration: 'none'}} to='/womens'>Womens</Link> { menu =="womens" ? <hr/>: <> </>}</li>
          <li onClick={()=>{setMenu("kids")}}> <Link style={{textDecoration: 'none'}} to='/kids'> Kids</Link> { menu =="kids" ? <hr/>: <> </>}</li>
        </ul>
       
        <div className='nav-login-cart'>
<<<<<<< HEAD
          <Link to='/login'><button>
            login
          </button>
          </Link> 
=======
        {localStorage.getItem('auth-token') ? (
  <button onClick={() => {
    localStorage.removeItem('auth-token'); // Remove the auth token from localStorage
    window.location.replace('/');          // Redirect to the homepage
       }}> Logout </button>  ) : <Link to='/login'><button>  login </button>   </Link> }
      
     
   
       
    
       

          
>>>>>>> 4ed2e08 (add admin folder and backend folder)
          <Link to='/cart'>
          <img src={cart_icon} alt=''/> </Link>
          <div className='nav-cart-count'>
            {getTotalCartItem()}
             </div>
        </div> 
      
    </div>
  )
}

export default Navbar;


import React, { useContext } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../Context/ShopContext'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
const ProductDisplay = (props) => {
    const {all_product}=useContext(ShopContext);
    const {addToCart}=useContext(ShopContext);
    const {product}=props;
    

  return (
    <div className='productdisplay'>
        <div className='display-left'>
            <div className='image-lists'>
              <img src={product.image}/>
              <img src={product.image}/>
              <img src={product.image}/>
              <img src={product.image}/>
            </div>
            <div className='productdisplay-image'>
              <img className='main-image' src={product.image}/>
            </div>
        </div>

        <div className='display-right'>
            <h1>{product.name}</h1>
            <div className='star-images'>
                 <img src={star_icon}/>
                 <img src={star_icon}/>
                 <img src={star_icon}/>
                 <img src={star_icon}/>
                 <img src={star_dull_icon}/>
                 <p>122</p>
            </div>
            <div className='display-prices'>
                <div className='old-price'>{product.old_price}</div>
                <div className='new-price'>{product.new_price}</div>

            </div>
            <div className='right-description'>
            "Garments encompass a wide range of clothing items, including shirts, pants, dresses, and outerwear, designed for various purposes and occasions. From casual to formal, garments serve as essential elements of personal style and expression."
            </div>
            <div className='display-right-size'>
                <h1>Select Size</h1>
                <div className='right-sizetypes'>
                         <div>S</div>
                         <div>M</div>
                         <div>L</div>
                         <div>XL</div>
                         <div>XXL</div>
                </div>

            </div>
            <button onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
            <p className='displayright-category'><span>Category:</span>Women , T-shirt , Crop , Top </p>
            <p className='displayright-category'><span>Tags:</span>Modern , Latest</p>
        </div>
      
    </div>
  )
}

export default ProductDisplay

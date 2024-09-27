import React, { useState } from 'react'
import './addproduct.css'
import uploadimg from '../assets/upload_area.svg'

const Addproduct = () => {
    const [image, setImage] = useState(null);
    const [productDetails,setproductDetails]=useState({
        name:"",
        image:"",
        category:"women",
        new_price:"",
        old_price:""
    })
   
    
    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    }
    const changeHandler=(e)=>{
        setproductDetails({...productDetails,[e.target.name]: e.target.value})
    }
    const add_product = async () => {
        console.log(productDetails);
        let formdata = new FormData();
        formdata.append('product', image);
    
        try {
            const response = await fetch('http://localhost:4000/upload', {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                },
                body: formdata,
            });
    
            const data = await response.json();
    
            if (data.success) {
                const updatedProductDetails = {
                    ...productDetails,
                    image: data.image_url
                };
    
                // Add the product details
                const addResponse = await fetch('http://localhost:4000/addproduct', {
                    method: 'POST',
                    headers: {
                        accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(updatedProductDetails),
                });
    
                const addData = await addResponse.json();
                if (addData.success) {
                    alert("Product added");
                } else {
                    alert("Failed to add product");
                }
    
                console.log("Updated Product Details:", updatedProductDetails);
                setproductDetails(updatedProductDetails);
            } else {
                console.error("Upload failed:", data.message);
            }
        } catch (error) {
            console.error("Error during upload:", error);
        }
    };
    
    
    

    return (
        <div className='add-product'>
            <div className="addproduct-itemfield">
                <p>Product Title</p>
                <input value={productDetails.name}  onChange={changeHandler} type='text' name='name' placeholder='Type here' />
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input value={productDetails.old_price}  onChange={changeHandler} type='text' name='old_price' placeholder='Type here' />
                </div>
                <div className="addproduct-itemfield">
                    <p>Offer Price</p>
                    <input value={productDetails.new_price}  onChange={changeHandler} type='text' name='new_price' placeholder='Type here' />
                </div>
            </div>
            <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select value={productDetails.category}  onChange={changeHandler}  name='category' className='addproduct-selector'>
                    <option value='men'>Men</option>
                    <option value='women'>Women</option>
                    <option value='kid'>Kid</option>
                </select>
            </div>
            <div className="addproduct-itemfield">
                <label htmlFor="file-input">
                    <img  src={image ? URL.createObjectURL(image) : uploadimg} className='thumbnail-image' alt='Upload Preview' />
                </label>
                <input onChange={imageHandler} type='file' name='image' id='file-input' hidden />
            </div>
            <button onClick={()=>{add_product()}} className='addproduct-btn'>ADD</button>
        </div>
    )
}

export default Addproduct

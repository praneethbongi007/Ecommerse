
import React from 'react'
import "../styles/popularProducts.css"
import { addToCart,removeFromCart,deleteItem,deleteCart } from "../utils/cartMangement";
import { StarFilled } from '@ant-design/icons';
import { BsCart3 } from 'react-icons/bs';

export default function PopularProducts(x) {
    console.log(x);
    return (
        <div id='productArr'>


            {x.products.map(e => {

                return <div className='productCard'>
                    <img className='productThumb' src={e.thumbnail.main} />
                    <p className='brand'>{e.brand}</p>
                    <p className='name'>{e.name}</p>
                    <p className='rating' style={{color:"#ccd91a",marginLeft:"2rem"}}><StarFilled /><StarFilled /><StarFilled /><StarFilled /><StarFilled /></p>
                    <div className='priceContainer'>
                        <p className='price'>${e.price}</p>
                        <button onClick={()=>x.setCart(addToCart(e,x.cart))} className='cartButton'><BsCart3 />Add</button>
                        <button onClick={()=>x.setCart(removeFromCart(e,x.cart))} className='cartButton'><BsCart3 />Remove</button>
                        <button onClick={()=>x.setCart(deleteCart(e,x.cart))} className='cartButton'><BsCart3 />delete</button>


                    </div>




                </div>
            })}




        </div>
    )
}

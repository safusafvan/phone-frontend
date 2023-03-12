import React from 'react'
import { useCart } from 'react-use-cart';
import './Itemcard.css'
const Itemcard=(props)=> {
  const { addItem } = useCart();
  
  return (
    <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
           <div className="card p-0 overFlow-hidden h-100 shadow" alt="im">
        <center><div className=' img-size'>
        <img src={props.img} class="card-img-top img-fluid " alt={props.title} /></div></center>
        <div class="card-body">
          <h5 class="card-title"><center>{props.title}</center></h5>
          <h5 class="card-title"><center>{props.price}</center></h5>
          <p class="card-text"><center>{props.desc}</center></p>
          <center> <button className="btn btn-success" onClick={()=>addItem(props.item)}>Order</button></center>
        </div>

      </div>
    </div>
  )
}

export default Itemcard
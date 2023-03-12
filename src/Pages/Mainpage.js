import React, { useState } from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCol,
} from 'mdb-react-ui-kit';
import Itemcard from './Itemcard'
import Phonedata from '../Sidepage/Phonedata'
import './Mainpage.css'
import Phoneview from './Phoneview';
// import Footer from './Footer';







function Mainpage() {


  return (

<div>


   
    <div className='side-img'>  <MDBCarousel showControls fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://images.samsung.com/is/image/samsung/assets/in/offer/online/samsung-fest/b2c-1920x545-01112022.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://images.samsung.com/is/image/samsung/assets/in/offer/online/samsung-fest/a14-1920x545-25012023.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://images.samsung.com/is/image/samsung/assets/in/offer/online/samsung-fest/galaxy-tab-s6-lite-desktop-07022023.jpg'
        alt='...'
      />
    </MDBCarousel>



<div className='phone-view'>
    <Phoneview/>
    </div>


      <div className='cards'>
        <section className='py-4 container'>
          <div className='row justify-content-center'>
            {Phonedata.productData.map((item, index) => {
              return (
                <Itemcard img={item.img}
                 title={item.title} 
                 desc={item.desc} 
                 price={item.price} 
                 item={item} 
                 key={index}
                  />
              )
            })}

          </div>

        </section>
      </div>

      
    </div>
    
    </div>

  )
}



export default Mainpage
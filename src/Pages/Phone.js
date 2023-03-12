import React from 'react'
import Itemcard from './Itemcard'
import Phonedata from '../Sidepage/Phonedata'
function Phone() {
  return (
    <div>



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
  )
}

export default Phone
import React from 'react'
import Navbar from '../component/Navbar'
import Mainpage from './Mainpage'
import Orderpaje from './Cart'
import Cart from './Cart'
import Footer from './Footer'

// import Cart from './Cart'

function Landingpage() {
  return (
    <div>
 <Navbar/>
      <Mainpage/>
      {/* <Cart/> */}
     <Footer/>

    </div>
  )
}

export default Landingpage
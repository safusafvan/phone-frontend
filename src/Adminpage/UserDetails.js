import React, { useEffect, useState } from 'react'
import axios from "axios"
// import { MDBBtn } from 'mdb-react-ui-kit';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';


function UserDetails() {





const [product, setprodect] = useState([])





const api = async () => {
  const { data } = await axios.get('http://localhost:4000/api/customerdetails')
  setprodect(data)
}
console.log(product);
useEffect(() => {
  api()

},[])






return (
  <div>







<MDBTable>
      <MDBTableHead>
        <tr>
          <th scope='col'>FIRSTNAME</th>
          <th scope='col'>LASTNAME</th>
          <th scope='col'>CITY ADDRESS</th>
          <th scope='col'>ADDRESS</th>
          <th scope='col'>EMAIL</th>
          <th scope='col'>PHONE</th>
          <th scope='col'>PIN</th>
          {/* <th scope='col'>DISTRICT</th> */}
          
          
         
        </tr>
      </MDBTableHead>
      {product.map((m) => {
        return(
      <MDBTableBody>
      

        <tr>
         
          <td>{m.firstname}</td>
          <td>{m.lastname}</td>
          <td>{m.cityaddress}</td>
          <td>{m.address2}</td>
          <td>{m.email}</td>
          <td>{m.phone}</td>
          <td>{m.pin}</td>
          <td>{m.district}</td>
        </tr>
       
   
      </MDBTableBody>
        )
       })}
    </MDBTable>











<div>



</div>

  </div>
)
}

export default UserDetails
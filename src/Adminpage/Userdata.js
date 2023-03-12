import React, { useEffect, useState } from 'react'
import axios from "axios"
// import { MDBBtn } from 'mdb-react-ui-kit';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';


function Userdata() {





const [product, setprodect] = useState([])
const [email, setEmail] = useState()
const [_id, set_Id] = useState()


const api = async () => {
  const { data } = await axios.get('http://localhost:4000/api/alldata')
  setprodect(data)
}
console.log(product);
useEffect(() => {
  api()

},[])

// const deletes=(_id)=>{
//   console.log(_id);
//   axios.delete(`http://localhost:8000/api/delete/${_id}`).then((res)=>{
//     console.log(res.data);
//     alert("deleted")
//   })
// }





return (
  <div>







<MDBTable>
      <MDBTableHead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Email</th>
         
        </tr>
      </MDBTableHead>
      {product.map((m) => {
        return(
      <MDBTableBody>
      

        <tr>
         
          <td>{m.name}</td>
          <td>{m.email}</td>
        
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

export default Userdata
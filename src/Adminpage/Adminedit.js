import React, { useEffect, useState } from 'react'
import axios from "axios"
import Table from 'react-bootstrap/Table';


function Adminedit() {


    
const [product, setprodect] = useState([])
const [Price, setPrice] = useState()

const [_id, set_Id] = useState()


const api = async () => {
  const { data } = await axios.get('http://localhost:4000/api/phonename')
  setprodect(data)
}
console.log(product);
useEffect(() => {
  api()

},)

const submit=()=>{
    axios.put("http://localhost:4000/api/update",{Price,_id}).then((res)=>{
      
      alert("update")
    })
  
  }


  return (
    <div>



<Table striped bordered hover variant="dark">
      <thead>
        <tr>
         
          <th>PHONE NAME</th>
          <th>BRAND</th>
          <th>PRICE</th>
          <th>RAITING</th>
          
        </tr>
        <input onChange={(e)=>setPrice(e.target.value)}></input>
<button onClick={submit}>submit</button>
      </thead>
      {product.map((m) => {
        return(
      <tbody>
        <tr>
        <td>{m.Phonename}</td>
          <td>{m.Brand}</td>
          <td  onClick={()=>{
            set_Id(m._id)
            alert("clicked")
          }}>{m.Price}</td>
          
          <td>{m.Raiting}</td>
          {/* <td><button>buy</button></td> */}
        </tr>
      
        
      </tbody>
           )
        })}
    </Table>

   
   
    </div>
  )

}



export default Adminedit
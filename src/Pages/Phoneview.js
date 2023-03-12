import React, { useEffect, useState } from 'react'
import axios from "axios"
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Itemcard.css'
import Button from 'react-bootstrap/Button';
import { MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Search } from '@mui/icons-material';
function Phoneview() {


  // const [filteredData, setFilteredData] = useState("");
const [product, setprodect] = useState([])

const[currentPage,setcurrentPage]=useState(1)
const recodsPerpage = 5 ;
const lastIndex =currentPage * recodsPerpage;
const firstIndex =lastIndex - recodsPerpage ;
const record =product.slice(firstIndex ,lastIndex)
const npage =Math.ceil(product.length / recodsPerpage)
const numbers = [...Array(npage + 1).keys()].slice(1)
const api = async () => {
  const { data } = await axios.get('http://localhost:4000/api/phonename')
  setprodect(data)
}
// console.log(product);
useEffect(() => {
  api()

},[])

// const filt =product.filter((srch)=>
// srch.Phonename?.toLowerCase().includes(filteredData.toLowerCase()))
// const record =filt.slice(lastIndex,firstIndex)
// console.log(filt);

  return (
    <div>
<div>


</div>


<Table striped bordered hover variant="dark">
      <thead>
        <tr>
         
          <th>PHONE NAME</th>
          <th>BRAND</th>
          <th>PRICE</th>
          <th>RAITING</th>
          
        </tr>
      </thead>
      {record.map((m) => {
        return(
      <tbody>
        <tr>
        <td>{m.Phonename}</td>
          <td>{m.Brand}</td>
          <td>{m.Price}</td>
          <td>{m.Raiting}</td>
          <td> <Button variant="success" href='/details'>ORDER</Button></td>
        </tr>
      
        
      </tbody>
           )
        })}
    </Table>

    <nav className='pgtn'>
      <ul className='pagination'>
        <li className='page-item'>
          <a href='#' className='page-link' onClick={prePage}>prev</a>
        </li>
{
  numbers.map((n,i)=>(
    <li className={`page-item  ${currentPage === n ? 'active' : ''}`} key={i}>
      <a href='#' className='page-link' onClick={()=>changeCPage(n)}>{n}</a>
    </li>
  ))
}



<li className='page-item'>
          <a href='#' className='page-link' onClick={nextPage}>Next</a>
        </li>
      </ul>
    </nav>
   
    </div>
  )
  function prePage(){
    if(currentPage !==  1){
      setcurrentPage(currentPage - 1)
    }
  
  }
  
  function changeCPage(id){
    setcurrentPage(id)
  }
  
  function nextPage(){
    if (currentPage !== npage){
      setcurrentPage(currentPage + 1)
    }
  
  }
}



export default Phoneview
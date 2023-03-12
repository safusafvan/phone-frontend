import axios from "axios"

import React, { useEffect, useState } from 'react'
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
import '../Pages/Details.css'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useNavigate } from 'react-router-dom';
function Addphone() {

  useEffect(() => {


    const userinfo = JSON.parse(localStorage.getItem("addphone"))
    if (userinfo) {
      navigate(userinfo ? "/adminhome" : "/")
    }


  })

  const [Phonename, setPhonename] = useState()
  const [Brand, setBrand] = useState()
  const [Price, setPrice] = useState()
  const [Raiting, setRaiting] = useState()

  const navigate = useNavigate()


  const submit = () => {

   {
      // console.log(name, email, password);
      axios.post('http://localhost:4000/api/addphone', { Phonename,Brand,Price,Raiting}).then((res) => {




       {
          localStorage.setItem("addPhone", JSON.stringify(res.data))
          navigate("/adminhome")

        }

      })

    }



  }




  return (
    <div className='details'>
      <form>

    

        <MDBInput wrapperClass='mb-4' id='form6Example3' label='phonename' onChange={(e) => { setPhonename(e.target.value) }} />
        <MDBInput wrapperClass='mb-4' id='form6Example4' label='brend' onChange={(e) => { setBrand(e.target.value) }} />
        <MDBInput wrapperClass='mb-4' type='' id='form6Example5' label='price' onChange={(e) => { setPrice(e.target.value) }} />
        <MDBInput wrapperClass='mb-4' type='' id='form6Example6' label='raiting' onChange={(e) => { setRaiting(e.target.value) }} />

        <center>  <div className='btn-1'>
          <MDBBtn className='mb-4' type='submit' block onClick={submit}>
         Add
          </MDBBtn>
        </div></center>
      </form>
    </div>
  )
}

export default Addphone
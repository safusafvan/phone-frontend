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
function CoustomerDetail() {

  useEffect(() => {


    const userinfo = JSON.parse(localStorage.getItem("phone"))
    if (userinfo) {
      navigate(userinfo ? "/details" : "/")
    }


  })

  const [firstname, setfirstname] = useState()
  const [lastname, setlastname] = useState()
  const [cityaddress, setcityaddress] = useState()
  const [address2, setadress2] = useState()
  const [email, setemail] = useState()
  const [phone, setphone] = useState()
  const [pin, setpin] = useState()
  const [district, setdistrict] = useState()


  const navigate = useNavigate()


  const submit = () => {

   {
      // console.log(name, email, password);
      axios.post('http://localhost:4000/api/phonedetails', { firstname, lastname, cityaddress, address2, email, phone, pin, district }).then((res) => {




       {
          localStorage.setItem("Phone", JSON.stringify(res.data))
          navigate("/home")

        }

      })

    }



  }




  return (
    <div className='details'>
      <form>

        <MDBRow className='mb-4'>
          <MDBCol>
            <MDBInput id='form6Example1' label='First name' onChange={(e) => { setfirstname(e.target.value) }} />
          </MDBCol>
          <MDBCol>
            <MDBInput id='form6Example2' label='Last name' onChange={(e) => { setlastname(e.target.value) }} />
          </MDBCol>
        </MDBRow>

        <MDBInput wrapperClass='mb-4' id='form6Example3' label='Address city' onChange={(e) => { setcityaddress(e.target.value) }} />
        <MDBInput wrapperClass='mb-4' id='form6Example4' label='Address 2' onChange={(e) => { setadress2(e.target.value) }} />
        <MDBInput wrapperClass='mb-4' type='email' id='form6Example5' label='Email' onChange={(e) => { setemail(e.target.value) }} />
        <MDBInput wrapperClass='mb-4' type='tel' id='form6Example6' label='Phone' onChange={(e) => { setphone(e.target.value) }} />








        <MDBRow className='mb-4'>
          <MDBCol>
            <MDBInput wrapperClass='mb-4' type='pin' id='form6Example6' label='pin no' onChange={(e) => { setpin(e.target.value) }} />

          </MDBCol>
          <MDBCol>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" >District</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Age"
              // onChange={handleChange}
              >
                <MenuItem >Alappuzha</MenuItem>
                <MenuItem >Ernakulam</MenuItem>
                <MenuItem >Kozhikode</MenuItem>
                <MenuItem >Palakkad</MenuItem>
                <MenuItem >Kollam</MenuItem>
                <MenuItem >Kannur</MenuItem>
                <MenuItem >Kasaragod</MenuItem>
                <MenuItem >Idukki</MenuItem>
                <MenuItem >Kottayam</MenuItem>
                <MenuItem >Thrissur</MenuItem>
                <MenuItem >Pathanamthitta</MenuItem>
                <MenuItem >Malappuram</MenuItem>
                <MenuItem >Wayanad</MenuItem>
                <MenuItem >Thiruvananthapuram</MenuItem>

              </Select>
            </FormControl>
          </MDBCol>
        </MDBRow>




        <center>  <div className='btn-1'>
          <MDBBtn className='mb-4' type='submit' block onClick={submit}>
            Place order
          </MDBBtn>
        </div></center>
      </form>
    </div>
  )
}

export default CoustomerDetail
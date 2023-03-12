import axios from "axios"
import React, { useEffect, useState } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";
// import './component/Navbar.css'

function Signup() {


  useEffect(() => {
    const userinfo = JSON.parse(localStorage.getItem("user"))
    if (userinfo) {
      navigate(userinfo ? "/home" : "/")
    }


  })

  const [name, setname] = useState()
  const [email, setemail] = useState()
  const [password, setpassword] = useState()
  const navigate = useNavigate()


  const submit = () => {

    if (!name || !email || !password) {
      alert(" please enter all data")
    }
    else {
      console.log(name, email, password);
      axios.post('http://localhost:4000/api/sign', { name, email, password }).then((res) => {




        let error = res.data.isError
        if (error) {
          console.log("error");

        } else {
          localStorage.setItem("user", JSON.stringify(res.data))
          navigate("/home")

        }

      })

    }



  }

  return (
    <div> <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' onChange={(e) => {
            setname(e.target.value)
          }} />
          <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' onChange={(e) => {
            setemail(e.target.value)
          }} />
          <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' onChange={(e) => {
            setpassword(e.target.value)
          }} />
          <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='form4' type='password'
            onChange={(e) => {
              setpassword(e.target.value)
            }} />
          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div>

        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
      <center>
        <MDBBtn className='mb-4 w-30 gradient-custom-4 regi' size='lg' onClick={submit}>Register</MDBBtn>
      </center>
    </div>
  )
}

export default Signup
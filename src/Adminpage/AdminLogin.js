



import React, { useEffect, useState } from 'react'
import axios from "axios"
// import './Navbar.css'
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import { Navigate, useNavigate } from 'react-router-dom';
import '../Navpage/login.css'

function AdminLogin() {
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const navigate = useNavigate()

    const submit = () => {

        console.log(email, password);
        axios.post('http://localhost:4000/api/adminlog', { email, password }).then((res) => {
            console.log(res.data.isError);   
            let error = res.data.isError
            if (error) {
             alert("error")
             console.log("error")
            } else {
             localStorage.setItem("phone",JSON.stringify(res.data))   //in postman json,browser to show stringify used
              navigate("/adminhome")
            }
        })
      
    }
    useEffect(() => {
        const userinfo = JSON.parse(localStorage.getItem("phone"))
        if (userinfo) {
            navigate( userinfo ? "/adminhome":"/")}
      
      
        } )
    return (
        <div>
            <MDBContainer fluid className="p-3 my-5 log-1 ">

                <MDBRow className=' log'>

                    <MDBCol col='10' md='6'>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
                    </MDBCol>

                    <MDBCol col='4' md='6'>


                        <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" onChange={(e) => {
                            setemail(e.target.value)
                        }} />
                        <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"
                            onChange={(e) => {
                                setpassword(e.target.value)
                            }} />


                        <div className="d-flex justify-content-between mx-4 mb-4">
                            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                            <a href="!#">Forgot password?</a>
                        </div>

                        <MDBBtn className="mb-4 w-100" size="lg" onClick={submit}>Sign in</MDBBtn>

                        <div className="divider d-flex align-items-center my-4">
                            <p className="text-center fw-bold mx-3 mb-0">OR</p>
                        </div>

                        <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#3b5998' }}>
                            <MDBIcon fab icon="facebook-f" className="mx-2" />
                            Continue with facebook
                        </MDBBtn>

                        <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#55acee' }}>
                            <MDBIcon fab icon="twitter" className="mx-2" />
                            Continue with twitter
                        </MDBBtn>

                    </MDBCol>

                </MDBRow>

            </MDBContainer></div>
    )
}

export default AdminLogin
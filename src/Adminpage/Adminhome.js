
import Userdata from './Userdata'
import UserDetails from './UserDetails'
import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';
import './Admin.css'
import { useNavigate } from 'react-router-dom';
import Phoneview from '../Pages/Phoneview';

function Adminhome() {
  const navigate = useNavigate()


  const submit = () => {

       
           
            
    localStorage.removeItem('phone');

    navigate("/adminlogin")
}

  const [showNavColorSecond, setShowNavColorSecond] = useState(false);

  return (
    <div>




<MDBNavbar expand='lg' dark bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>ADMIN PAGE</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColorSecond(!showNavColorSecond)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
            
              <MDBNavbarItem className='adm-pg'>
              <MDBNavbarLink href='/addphone'>ADD ITEM</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
              <MDBNavbarLink href='/edit'>EDIT</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/logdetails'>LOGIN DETAILS</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/customerdetails'>CUSTOMER DETAILS</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#' onClick ={submit()}>LOGOT</MDBNavbarLink>
              </MDBNavbarItem>
              
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>














        
    </div>

     )
}

export default Adminhome
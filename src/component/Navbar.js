import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import './Navbar.css'


function Navbar() {

  const [showBasic, setShowBasic] = useState(false);
  
    // const submit = () => {

       
           
            
    //         localStorage.removeItem('user');
        

    // }
  return (
    <div className=''>

      <MDBNavbar expand='lg' light bgColor='dark'>
        <MDBContainer fluid>
          <div className='first'>
            <MDBNavbarBrand className='main-logo' href='#'>
              STEP PHONE</MDBNavbarBrand>

          </div>

          <MDBNavbarToggler
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 login-signup'>

              <MDBNavbarItem>
                <MDBNavbarLink href='/login' className='clr'>login</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/signup'  className='clr'>signup</MDBNavbarLink>
              </MDBNavbarItem>
              {/* <MDBNavbarItem>
                <MDBNavbarLink href='/logot'  className='clr' 
                // onClick ={submit()}
                >logout</MDBNavbarLink>
              </MDBNavbarItem> */}





            </MDBNavbarNav>


          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Navbar
import React, { useEffect } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import { Navigate, useNavigate } from 'react-router-dom';

function Logot() {
  const navigate = useNavigate()




    const submit = () => {

     
           
            
            localStorage.removeItem('user');
        
            navigate("/login")
    }


  return (
    <div>
        <center>
<MDBBtn onClick ={submit()}>logot</MDBBtn></center>

    </div>
  )
}

export default Logot
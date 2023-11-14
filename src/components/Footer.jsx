import React from 'react'
import Container from 'react-bootstrap/esm/Container'

function Footer() {
  return (
    <div>

        <div className="row bg-dark text-light" style={{marginTop:'40px'}}>
        <div className="col-lg-1"></div>
                <div className="col-lg-3">
                   
<h5 style={{marginTop:'30px',fontFamily:'Agbalumo',fontSize:'25px'}}>EliteCare Clinic</h5>
<p style={{fontSize:'14px',textAlign:'justify'}}>Every life is precious to us. You are important, and we care for you. We at EliteCare Clinic are there for you when you need us the most. Our hospital is where science, technology, and research merge to embrace good health. We are a community of physician</p>
                   
                </div>
      
                <div className="col-lg-4">

                              
                   <h5 style={{marginTop:'40px'}}>Address</h5>
                   <p style={{fontSize:'20px',textAlign:'justify'}}>EliteCare Clinic, Thrissur,Kerala, India - 680 586</p>
                   <a href="https://www.google.co.in/maps/@10.694829,76.3386232,20z?entry=ttu" target='_blank'><button style={{ width: '150px',  fontWeight: "bold" }} className='btn rounded-4 btn-light'><i class="fa-solid fa-location-dot"></i> Get Direction</button></a>
                </div>
                <div className="col-lg-3">
                             
                   <h5 style={{marginTop:'40px'}}>Office Contact</h5>
                   <p style={{fontSize:'15px',textAlign:'justify'}}>medicaladministration@eliteclinic.edu</p>
                   <h5 class="heading text-white">Open</h5> 
                   <p>Mon-Fri 5.00-17:00 <br></br>Sat 6.30-17:00 
                   <br></br>
            Sun 6.30-17:00
          </p>
 



                  
                </div>
   
                <div className="col-lg-1"></div>
        </div>
    </div>
  )
}

export default Footer
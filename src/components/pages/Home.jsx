import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Table from 'react-bootstrap/Table';
import { deleteAppointment, getAppointment, uploadAppointment } from '../../services/allAPI';


function Home() {
    const [deleteStatus, setDeleteStatus] = useState(false)
    const [allAppointment, setAllAppointment] = useState([])
    const [appointment, setAppointment] = useState({
        fname: '',
        lname: '',
        age: '',
        phone: '',
        address: '',
        gender: '',
        date: '',
        time: '',
        dept: '',
        emailid: '',
        pincode: ''

    })

    console.log(appointment);
    const handleuploaddept = async () => {


        const {fname,lname,phone,date,time,dept} = appointment
        if(!fname || !lname || !phone || !date || !time || !dept){
            toast.warning('Please fill the form')
        }
        else{
            const response = await uploadAppointment(appointment)
            console.log(response);
            if (response.status >= 200 && response.status < 300) {
            toast.success(`${response.data.fname} successfully uploaded`)
     
     
     
                 //making the state value none
                 setAppointment(
                     {
                         fname: '',
                         lname: '',
                         age: '',
                         phone: '',
                         address: '',
                         gender: '',
                         date: '',
                         time: '',
                         dept: '',
                         emailid: '',
                         pincode: ''
     
                     }
                 )
             }
             else {
             toast.error('Something went wrong try again later')
                 console.log(response)
             }
        }
 
       

    }
    const getAllAppointment = async () => {
        const response = await getAppointment()
        const { data } = response
        console.log(data);
        setAllAppointment(data)

    }

    const handleDelete = async (id) => {
        const response = await deleteAppointment(id);
        console.log(response);
        setDeleteStatus(true)
    }


    const time = new Date()
    let date = new Intl.DateTimeFormat('en-US', {

        year: 'numeric',
        month: '2-digit',
        day: '2-digit',

    }).format(time)
    console.log(date);

    useEffect(() => {
        getAllAppointment()
        setDeleteStatus(false)
    }, [deleteStatus])



    return (
        <div>
            <div style={{ backgroundImage: "url(https://img.freepik.com/free-photo/senior-woman-with-walking-frame-hospital-waiting-room-rehabilitation-treatment_482257-8586.jpg?w=996&t=st=1699776409~exp=1699777009~hmac=b2840da1dcd4242aa6814fbb844c92ef3471034879c822c9b111af53f01fd71c)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '580px' }}>
                <div style={{ height: '600px' }} className='d-flex  align-items-center '>
                    <Container>
                        <h1 style={{ fontWeight: 'bold', fontSize: '50px', color: 'rgb(60, 12, 57)' }}>The Health Care You<br></br> can Trust</h1>
                        <Link style={{ textDecoration: 'none' }} to={'/department'}><button style={{ backgroundColor: 'rgb(60, 12, 57)', color: 'white' }} className='btn rounded-4'>Our Doctors  <i class="fa-solid fa-arrow-right"></i></button></Link>

                    </Container>

                </div>


            </div>

            <section  >
                <Container>
                    <div>
                    <div className="row d-flex flex-wrap" style={{ height: '600px' }}>
                        <div className="col-lg-7  d-flex justify-content-center flex-column"  >
                            <h4>Why EliteCare Clinic?</h4>
                            <h1 style={{ color: ' rgb(54, 6, 98)', fontWeight: 'bold' }}>
                                Our team of experts provides top-notch medical treatment with empathy using the most advanced technology.     </h1>
                            <a href="https://www.google.co.in/maps/@10.694829,76.3386232,20z?entry=ttu" target='_blank'><button style={{ width: '130px', backgroundColor: 'rgb(60, 12, 57)', color: 'white', fontWeight: "bold" }} className='btn rounded-4 btm-sm'><i class="fa-solid fa-location-dot"></i> Locate Us</button></a>

                        </div>
                        <div className="col-lg-5 d-flex justify-content-center flex-column">
                            <p style={{ fontSize: '15px' }}>Your health is our priority. EliteCare Clinic ensures you and your family receive the best possible medical care and assistance. We strive to create a warm and safe healing environment for you and your family. Over the past decade, EliteCare has been unflinchingly devoted to improving healthcare and treatment. Medical specialists have been working diligently to conduct research and educate future generations of doctors and healthcare workers.
                                <br></br>   As our entire team works toward your speedy recovery, we utilize highly-trained doctors and cutting-edge technology in the field of medical sciences.</p>

                            <div className="d-flex flex-wrap">
                                <div style={{ padding: '10px' }}>
                                    <h3> 10k+</h3>
                                    <h6>Cured Patients</h6>
                                </div>
                                <div style={{ padding: '10px' }}>
                                    <h3> 18+</h3>
                                    <h6>Medical Apparatus</h6>
                                </div>
                            </div>
                        </div>
                      
                    </div>
                    <iframe width="1283" className='utube' height="510" src="https://www.youtube.com/embed/l5m-bzw6b2Q" title="Take a Tour of EliteCare 24-Hour Emergency Room - League City, Texas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                
                </Container>


            </section>
<br></br>
            <section className="  text-dark bg-dark "  >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <br></br>
                            <h4 style={{ fontWeight: 'bold' }} className="text-light display-4">Specialists in Family  Healthcare</h4>
                            <i> <h5 className="text-light mb-5 lead">Transforming Lives with Better HealthCare</h5>
                            </i>
                        </div>
                    </div>
                </div>
            </section>



            <section className="">
                <div className="container">
                    <div className="row no-gutters ">
                        <div className="col-md-6 pr-md-5 pr-0 pt-md-5 pt-0 pb-md-5 pb-0" >

                            <div className="time " style={{ marginTop: '100px', backgroundColor: 'rgb(54, 6, 98)' }}>
                                <br></br>
                                <h2 style={{ color: 'white', textAlign: 'center' }} >Opening Hour <span>Medical Clinic</span></h2>

                                <ul style={{ color: 'white', fontSize: 'large', margin: '60px' }} className="list-unstyled ">
                                    <li>Mon-Fri <span style={{ float: 'right' }}>5:00-17:00</span></li><hr></hr>
                                    <li>Sat <span style={{ float: 'right' }}>6:30-17:00</span></li><hr></hr>
                                    <li>Sun <span style={{ float: 'right' }}>6:30-17:00</span></li>
                                </ul>


                                <br></br>
                            </div>

                        </div>
                        <div className="col-md-6 p-md-5 p-3  " id="appointment" style={{ backgroundColor: 'rgb(60, 12, 57)' }}>
                            <h2 style={{ color: 'white' }}>Make an Appointment</h2>
                            <br></br>
                            <form>
                                <div className="row"  >
                                    <div className="col-lg-5" style={{ margin: '5px' }}>
                                        <label style={{color:"white"}} htmlFor='fn'>First Name</label>
                                        <input id='fn'placeholder='First Name' type='text' className='form-control' onChange={(e) => setAppointment({ ...appointment, fname: e.target.value })} />

                                    </div>
                                    <div className="col-lg-1"></div>
                                    <div className="col-lg-5 " style={{ margin: '5px' }}>
                                    <label style={{color:"white"}} htmlFor='ln'>Last Name</label>
                                        <input  id='ln'placeholder='Last Name' type='text' className='form-control'
                                            onChange={(e) => setAppointment({ ...appointment, lname: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="row"  >
                                    <div className="col-lg-5" style={{ margin: '5px' }}>
                                    <label style={{color:"white"}} htmlFor='age'>Age</label>
                                        <input id='age 'placeholder='Age' type='number' className='form-control'
                                            onChange={(e) => setAppointment({ ...appointment, age: e.target.value })}
                                        />
                                    </div>
                                    <div className="col-lg-1"></div>
                                    <div className="col-lg-5 " style={{ margin: '5px' }}>
                                    <label style={{color:"white"}} htmlFor='num'>Phone Number</label>
                                        <input id='num' placeholder='Phone Number' type='number' className='form-control'
                                            onChange={(e) => setAppointment({ ...appointment, phone: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="row"  >
                                    <div className="col-lg-5" style={{ margin: '5px' }}>
                                    <label style={{color:"white"}} htmlFor='add'>Address</label>
                                        <textarea id='add'className='form-control' placeholder='Address' style={{height:"130px"}}
                                            onChange={(e) => setAppointment({ ...appointment, address: e.target.value })}></textarea>

                                    </div>
                                    <div className="col-lg-1"></div>
                                    <div className="col-lg-5 " style={{ margin: '5px' }}>
                                    <label style={{color:"white"}} htmlFor='gen'>Gender</label>
                                        <select class="form-select" id='gen' aria-label="Default select example"
                                            onChange={(e) => setAppointment({ ...appointment, gender: e.target.value })}>
                                            <option selected>Gender</option>
                                            <option value="Male"
                                            >Male</option>
                                            <option value="Female"
                                            >Female</option>
                                            <option value="Others"
                                            >Others</option>
                                        </select>
                                        <br></br>
                                        <label style={{color:"white"}} htmlFor='date'>Choose Date</label>
                                        <input id='date'style={{ marginTop: '10px' }} placeholder='Date'
                                            onChange={(e) => setAppointment({ ...appointment, date: e.target.value })}
                                            type='date' className='form-control' />
                                    </div>
                                </div>
                                <div className="row"  >
                                    <div className="col-lg-5" style={{ margin: '5px' }}>
                                    <label style={{color:"white"}} htmlFor='time'>Time</label>
                                        <select id='time'class="form-select" aria-label="Default select example"
                                            onChange={(e) => setAppointment({ ...appointment, time: e.target.value })}>
                                            <option selected>Select Time</option>
                                            <option value="5.00-10.00">5.00-10.00</option>
                                            <option value="10.00-14.00">10.00-14.00</option>
                                            <option value="14.00-17.00">14.00-17.00</option>
                                        </select>

                                    </div>
                                    <div className="col-lg-1"></div>
                                    <div className="col-lg-5 " style={{ margin: '5px' }}>
                                    <label style={{color:"white"}} htmlFor='dept'>Department</label>
                                        <select id='dept' class="form-select" aria-label="Default select example"
                                            onChange={(e) => setAppointment({ ...appointment, dept: e.target.value })}
                                        >
                                            <option selected>Select Department</option>
                                            <option value="Dermatology">Dermatology</option>
                                            <option value="Hair Transplant">Hair Transplant</option>
                                            <option value="General Paediatrics">General Paediatrics</option>
                                            <option value="Gynecologic Oncology Division">Gynecologic Oncology Division</option>

                                            <option value="  Adult cardiology">  Adult cardiology</option>
                                        </select>

                                    </div>
                                </div>
                                <div className="row"  >
                                    <div className="col-lg-5" style={{ margin: '5px' }}>
                                    <label style={{color:"white"}} htmlFor='id'>Email Address</label>
                                        <input id='id' placeholder='Email ID' type='email'
                                            onChange={(e) => setAppointment({ ...appointment, emailid: e.target.value })}
                                            className='form-control' /
                                        >

                                    </div>
                                    <div className="col-lg-1"></div>
                                    <div className="col-lg-5 " style={{ margin: '5px' }}>
                                    <label style={{color:"white"}} htmlFor='pin'>Pin-Code</label>
                                        <input id='pin'placeholder='Pin-Code' type='number'
                                            onChange={(e) => setAppointment({ ...appointment, pincode: e.target.value })} className='form-control' />
                                    </div>
                                </div>
                                <br></br>
                                <button onClick={handleuploaddept} className='btn btn-lg btn-success'>Book</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <br>
            </br>
            <section>
                <Container>
                    <div className='d-flex'>
                        <h4 style={{ color: 'rgb(60, 12, 57)', fontWeight: 'bold' }}>All Appointments ({allAppointment.length})</h4>

                        <h6 style={{ marginLeft: '', fontWeight: 'bold' }}>Today Date:{date}</h6>
                    </div>

                    <br></br>
                    <Row>
                        <Col lg={12} sm={12}>
                            <Table striped bordered hover variant="light" style={{tableLayout:"fixed"}}>
                                <thead>
                                    <tr >
                                        <th style={{ backgroundColor: 'rgb(54, 6, 98)', color: 'white' }}>ID</th>
                                        <th style={{ backgroundColor: 'rgb(54, 6, 98)', color: 'white' }}>First Name</th>
                                        <th style={{ backgroundColor: 'rgb(54, 6, 98)', color: 'white' }}>Last Name</th>
                                        <th style={{ backgroundColor: 'rgb(54, 6, 98)', color: 'white' }}>Age</th>
                                        <th style={{ backgroundColor: 'rgb(54, 6, 98)', color: 'white' }}>Phone Number</th>
                                        <th style={{ backgroundColor: 'rgb(54, 6, 98)', color: 'white' }}>Department</th>
                                        <th style={{ backgroundColor: 'rgb(54, 6, 98)', color: 'white' }}>Appointment Date</th>
                                        <th style={{ backgroundColor: 'rgb(54, 6, 98)', color: 'white' }}>Session Time</th>
                                        <th style={{ backgroundColor: 'rgb(54, 6, 98)', color: 'white' }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allAppointment.length > 0 ?
                                            allAppointment.map((item) => (<tr>
                                                <td>{item.id}</td>
                                                <td>{item.fname}</td>
                                                <td>
                                                    {item.lname}
                                                </td>
                                                <td>{item.age}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.dept}</td>
                                                <td>{item.date}</td>
                                                <td>{item.time}</td>
                                                <td><button onClick={() => handleDelete(item?.id)}

                                                    className='btn' ><i style={{ color: 'red' }} class="fa-solid fa-trash"></i></button></td>
                                            </tr>
                                            )) : <p>Nothing to display</p>
                                    }


                                </tbody>
                            </Table>

                        </Col>
                    </Row>

                </Container>

                <ToastContainer position='top-center' theme='colored' autoClose={2000} />

            </section>
        </div>

    )
}

export default Home
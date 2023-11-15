import React from 'react'
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Col, Container, Row } from 'react-bootstrap';
import { TextField } from '@mui/material';
import { deleteDepartment, deleteDoctor, getADoctor, getDepartment, getDoctor, uploadDepartment, updateDepartment, uploadDoctor } from '../../services/allAPI';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Department() {
    const [deleteStatus, setDeleteStatus] = useState(false)
    const [deleteDoctorStatus, setDeleteDoctorStatus] = useState(false)
    const [show, setShow] = useState(false);

    const [doctor, setDoctor] = useState({
        name: "",
        dept: "",
        url: "",
        edu: ""
    })
    const [allDoctor, setAllDoctor] = useState([])

    const [allDepartment, setAllDepartment] = useState([])
    const [department, setDepartment] = useState({
        departmentname: "",
        description: "",
        contact: "",
        services: "",
        doctors: []
    })
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleAdd = async () => {
const{ departmentname,  description,contact, services, doctors} = department
if( !departmentname ||  !description  ||  !contact ||  ! services ||  ! doctors){
    toast.warning('Please Fill the Form Completely')
}
else{

    const response = await uploadDepartment(department)
    console.log(response);

    if (response.status >= 200 && response.status < 300) {
        toast.success(`${response.data.departmentname} successfully uploaded`)

        handleClose()

        //making the state value none
        setDepartment(
            {
                departmentname: "",
                description: "",
                contact: "",
                services: "",
                doctors: []

            }
        )
    }
    else {
        toast.error('Something went wrong try again later')
        console.log(response)
    }

}

    }
    const getAllDepartment = async () => {
        const response = await getDepartment()
        const { data } = response
        console.log(data);
        setAllDepartment(data)

    }
    /*    console.log(department);
       console.log(allDepartment); */

    const handleDelete = async (id) => {
        const response = await deleteDepartment(id);
        console.log(response);
        setDeleteStatus(true)
    }
    const handledoctor = async () => {


        const {name,dept,url,edu} = doctor
        if(!name || !dept || !url || !edu)
        {
            toast.warning('Please Fill the Form Completely')
        }
        else{
            const response = await uploadDoctor(doctor)
            console.log(response);
    
            if (response.status >= 200 && response.status < 300) {
                toast.success(`${response.data.name} successfully uploaded`)
    
    
    
    
                setDoctor(
                    {
                        name: "",
                        dept: "",
                        url: "",
                        edu: ""
    
                    }
                )
            }
            else {
                toast.warning('Something went wrong try again later')
                console.log(response)
            }
    
        }
      
    }
    const getAllDoctor = async () => {
        const response = await getDoctor()
        const { data } = response
        console.log(data);
        setAllDoctor(data)

    }
    const handleDeleteDoctor = async (id) => {
        const response = await deleteDoctor(id);
        console.log(response);
        setDeleteDoctorStatus(true)
    }

    const dragStarted = (e, id) => {
        console.log(`Doctor started dragging ${id}`);
        e.dataTransfer.setData("DoctorId", id)
    }
    const dragover = (e) => {
        e.preventDefault()  //this will prevent reload so that the data that we send from videocard.jsx wont be lost
        console.log('inside dragover');
    }

    const Doctordrop = async (e, id) => {
        console.log(`dropped inside the category id :${id}`);
        //to get the video id that is send from videocard component
        const Doctorid = e.dataTransfer.getData("DoctorId")
        console.log(Doctorid);

        //api to get the particular video that is dragged
        const { data } = await getADoctor(Doctorid)
        console.log(data);



        let selectCategory = allDepartment.find(item => item.id === id)
        console.log(selectCategory)

        selectCategory.doctors.push(data)
        console.log(selectCategory);

        await updateDepartment(id, selectCategory)
        getAllDepartment()
    }



    useEffect(() => {
        getAllDepartment()
        getAllDoctor()
        setDeleteStatus(false)
        setDeleteDoctorStatus(false)
    }, [allDepartment, deleteStatus, deleteDoctorStatus])



    return (
        <div>
            <div className='' style={{ height:'600px',overflowY:'hidden',backgroundImage: 'url(https://img.freepik.com/free-photo/confident-female-doctor-with-reports-clipboard-standing-against-male-patient-hospital_662251-3027.jpg?w=996&t=st=1699800582~exp=1699801182~hmac=f839ae1c3bbb01f4528783ae48cb0a2b3a42f72f4065c125c0dbf022a1e98500)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <Container>

              
                <Row className='container department' >
                    <Col lg={4} className='deptrow d-flex justify-content-center flex-column' style={{marginTop:'180px'}}>
                        <h6 style={{ letterSpacing: '1px' }}>DEPARTMENTS</h6>
                        <h1 style={{ fontWeight: 'bold', fontSize: '50px' }}>Our Departments</h1>
                        <p>To undertake specialized and holistic healthcare services of world standard and to provide them to all sections....</p>
                        <button style={{ backgroundColor: 'rgb(60, 12, 57)',width:'200px' }} className='btn rounded-4 text-light' onClick={handleShow}>
                            Add New Department
                        </button>

                        <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Department</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="text" placeholder="Enter Department Name" onChange={(e) => setDepartment({ ...department, departmentname: e.target.value })} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="text" placeholder="Enter Description" onChange={(e) => setDepartment({ ...department, description: e.target.value })} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="text" placeholder="Enter Contact Number" onChange={(e) => setDepartment({ ...department, contact: e.target.value })} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="text" placeholder="Enter Services Offered" onChange={(e) => setDepartment({ ...department, services: e.target.value })} />
                                </Form.Group>


                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleAdd}>Add</Button>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                    <Col lg={1}></Col>
                    <Col lg={7} className=' '>
                        <Row style={{height:'150px',marginTop:"160px"}}>
                            <Col lg={4} style={{fontSize:'21px',fontWeight:'bold'}} className='deptcol'>
                                <div className='d-flex justify-content-center align-items-center'>
                                <i class="fa-solid fa-stethoscope fa-2x"></i>
                                Pain and Palliative Medicine
                             <div className='vertical'>

                             </div>
                                </div>
                            <div className='horizontal'>

                            </div>
                           
                            </Col>
                            <Col lg={4} style={{fontSize:'21px',fontWeight:'bold'}} className='deptcol'>
                                <div className='d-flex justify-content-center align-items-center'>
                                <i class="fa-solid fa-house-medical-circle-check fa-2x"></i>
                               
                                Pediatric Urology
                             <div className='vertical'>

                             </div>
                                </div>
                            <div className='horizontal'>

                            </div>
                           
                            </Col>
                            <Col lg={4} style={{fontSize:'21px',fontWeight:'bold'}} className='deptcol'>
                                <div className='d-flex justify-content-center align-items-center'>
                                <i class="fa-solid fa-house-medical-circle-check fa-2x"></i>
                                Transfusion Medicine
                             <div className='vertical'>

                             </div>
                                </div>
                            <div className='horizontal'>

                            </div>
                           
                            </Col>
                        </Row>
                        <Row style={{height:'150px'}}>
                            <Col lg={4} style={{fontSize:'21px',fontWeight:'bold'}} className='deptcol'>
                                <div className='d-flex justify-content-center align-items-center'>
                                <i class="fa-solid fa-heart-pulse fa-2x"></i>
                                Cardiac Anaesthesiology
                             <div className='vertical'>

                             </div>
                                </div>
                            <div className='horizontal'>

                            </div>
                           
                            </Col>
                            <Col lg={4} style={{fontSize:'21px',fontWeight:'bold'}} className='deptcol'>
                                <div className='d-flex justify-content-center align-items-center'>
                                <i class="fa-solid fa-syringe fa-2x"></i>
                                Surgical Oncology
                             <div className='vertical'>

                             </div>
                                </div>
                            <div className='horizontal'>

                            </div>
                           
                            </Col>
                            <Col lg={4} style={{fontSize:'21px',fontWeight:'bold'}} className='deptcol'>
                                <div className='d-flex justify-content-center align-items-center'>
                                <i class="fa-solid fa-hospital fa-2x"></i>
                                Advanced Wellness and Rehabilitation  
                             <div className='vertical'>

                             </div>
                                </div>
                            <div className='horizontal'>

                            </div>
                           
                            </Col>
                        </Row>
                    </Col>
                </Row>  </Container>

            </div>

            <div className="container">
                <div className="row ">

                    <div className="col-lg-12 ">
                        <div className=" pt-5">
                            <h2 style={{ fontWeight: 'bold' }} className="h6">Departments</h2>
                            <hr></hr>
                            <ul className="list-unstyled  mb-4">


                                {
                                    allDepartment.length > 0 ?



                                        allDepartment?.map((item) => (

                                            <div className='row' style={{ margin: "20px" }} droppable onDragOver={(e) => dragover(e)}
                                                onDrop={(e) => Doctordrop(e, item?.id)}>
                                                <h4 style={{ color: 'white', fontWeight: "bold", backgroundColor: "rgb(60, 12, 57)" }}>  {item.departmentname}</h4>
                                                <br></br><br></br>


                                                <div className='col-lg-3' >


                                                    <br></br>
                                                    <div >
                                                        <h5>Services Offered</h5>
                                                        <p style={{ padding: '2px' }}>{item.services}</p>
                                                        <h5>Contact</h5>
                                                        <h4 style={{ color: ' rgb(54, 6, 98)' }}>{item.contact}</h4>


                                                    </div>
                                                </div>

                                                <div className='col-lg-9'>
                                                    <button style={{ float: 'right' }} className='btn btn-danger' onClick={() => handleDelete(item?.id)}>Delete</button>

                                                    <h5>Overview</h5>

                                                    <p>{item.description}</p>

                                                    <hr></hr>
                                                    <h5>Doctors</h5>
                                                    <Row>
                                                        {item.doctors?.length > 0 ?
                                                            item.doctors.map((dr) => (

                                                                <Col lg={4}>
                                                                    <img style={{ height: '250px' }} src={dr.url} class="img-fluid" />
                                                                    <h4>{dr.name}</h4>
                                                                    <p>{dr.edu}</p>
                                                                </Col>

                                                            ))
                                                            : null
                                                        }
                                                    </Row>

                                                </div>

                                            </div>



                                        ))




                                        : <p>Nothing to Display</p>

                                }


                            </ul>
                        </div>
                    </div>









                    <div>


                        <div className="row">

                            <div className="col-lg-9">

                                <h3 style={{ color: 'rgb(60, 12, 57)', fontWeight: 'bold' }}>Find a Doctor</h3>

                                <Row>


                                    {
                                        allDoctor.length > 0 ?
                                            allDoctor?.map((item) => (
                                                <Col lg={3} style={{ padding: "10px" }}>

                                                    <img className='imghover' src={item.url} style={{ height: "200px" }} class="img-fluid w-100" draggable onDragStart={(e) => dragStarted(e, item?.id)} />

                                                    <div className="d-flex flex-column " >
                                                        <h5>Dr.{item.name}</h5>
                                                        <h6 >{item.dept} </h6>
                                                        <br></br>
                                                        <p>{item.edu}</p>
                                                        <button style={{ marginLeft: "30px" }} className='btn btn-outline-danger w-75 rounded-5 ' onClick={() => handleDeleteDoctor(item?.id)}>Delete <i class="fa-solid fa-trash"></i></button>
                                                    </div>
                                                </Col>
                                            )) : <p>Nothing to Display</p>

                                    }



                                </Row>
                            </div>
                            <div className="col-lg-3">
                                <h5>Add Doctor Details</h5>
                                <TextField style={{ marginTop: '10px' }} className="w-100" id="outlined-basic" label=" Name" onChange={(e) => setDoctor({ ...doctor, name: e.target.value })} variant="outlined" />

                                <select  style={{ marginTop: '10px' }}  class="form-select" aria-label="Default select example"
                                           onChange={(e) => setDoctor({ ...doctor, dept: e.target.value })}
                                        >


                                            <option selected>Select Department</option>

                                            
                                            {
                                                allDepartment?.length>0?
                                                allDepartment.map((dept)=>(
                                                    
                                                                <option value={dept.departmentname}>{dept.departmentname}</option>
                                                           
                                                   
                                                    
                                              

                                                   
                                                )):null
                                            }
                                           
                                        </select>

                        
                              
                                <TextField style={{ marginTop: '10px' }} className="w-100" id="outlined-basic" onChange={(e) => setDoctor({ ...doctor, edu: e.target.value })} label="Qualitification " variant="outlined" />
                                <TextField style={{ marginTop: '10px' }} onChange={(e) => setDoctor({ ...doctor, url: e.target.value })} className="w-100" id="outlined-basic" label="Image URL " variant="outlined" />
                                <button onClick={handledoctor} style={{ marginTop: '10px' }} className='btn btn-success w-50  '>Add</button>
                            </div>
                        </div>

                        <br></br>




                    </div>



                </div>
            </div>
            <ToastContainer position='top-center' theme='colored' autoClose={2000} />

        </div>
    )
}

export default Department
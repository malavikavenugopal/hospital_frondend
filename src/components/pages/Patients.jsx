import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { deletePatient, getPatient, uploadPatient } from '../../services/allAPI';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Patients() {
  const [show, setShow] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [allPatient, setAllPatient] = useState([])
  const [patient, setPatient] = useState({
    fname: '',
    lname: '',
    dob: "",
    email: "",
    address: '',
    phone: '',
    state: "",
    pin: ""

  })
  const handleAddPatient = async () => {


    const { fname, lname, dob, email, address, phone, state, pin } = patient
    if (!fname || !lname || !dob || !email || !address || !phone || !state || !pin) {
      toast.warning('Please fill the form')

    }
    else {
      const response = await uploadPatient(patient)
      console.log(response);
      if (response.status >= 200 && response.status < 300) {
        toast.success(`${response.data.fname} successfully uploaded`)



        //making the state value none
        setPatient(
          {
            fname: '',
            lname: '',
            dob: "",
            email: "",
            address: '',
            phone: '',
            state: "",
            pin: ""

          }
        )
      }
      else {
        toast.warning('Something went wrong try again later')
        console.log(response)
      }
    }



  }
  const getAllPatients = async () => {
    const response = await getPatient()
    const { data } = response
    console.log(data);
    setAllPatient(data)

  }

  const handleDelete = async (id) => {
    const response = await deletePatient(id);
    console.log(response);
    setDeleteStatus(true)
  }


  useEffect(() => {
    getAllPatients()
    setDeleteStatus(false)
  }, [deleteStatus, allPatient])

  return (
    <>
      <div>
        <div className=' container '>
          <br></br>
          <h4>Add Patient Details</h4>
          <div style={{ margin: "10px" }} >

            <div className="row">
              <div className="col-lg-6">
                <div className="container">
                  <Form.Label htmlFor="inputPassword5">First Name</Form.Label>
                  <Form.Control
                    type="text"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock" onChange={(e) => setPatient({ ...patient, fname: e.target.value })}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="container">
                  <Form.Label htmlFor="inputPassword5">Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    id="inputPassword5"
                    onChange={(e) => setPatient({ ...patient, lname: e.target.value })}
                    aria-describedby="passwordHelpBlock"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="container">
                  <Form.Label htmlFor="inputPassword5">Date of Birth</Form.Label>
                  <Form.Control
                    type="date"
                    onChange={(e) => setPatient({ ...patient, dob: e.target.value })}
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="container">
                  <Form.Label htmlFor="inputPassword5">Email ID</Form.Label>
                  <Form.Control
                    type="email"
                    onChange={(e) => setPatient({ ...patient, email: e.target.value })}
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="container">
                  <Form.Label htmlFor="inputPassword5">Address</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => setPatient({ ...patient, address: e.target.value })}
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                  />
                </div>
              </div>

            </div>

            <div className="row">
              <div className="col-lg-4">
                <div className="container">
                  <Form.Label htmlFor="inputPassword5">Phone Number</Form.Label>
                  <Form.Control
                    type="number"
                    id="inputPassword5"
                    onChange={(e) => setPatient({ ...patient, phone: e.target.value })}
                    aria-describedby="passwordHelpBlock"
                  />
                </div>
              </div>

              <div className="col-lg-4">
                <div className="container">
                  <Form.Label htmlFor="inputPassword5">State</Form.Label>
                  <Form.Control
                    type="text"
                    id="inputPassword5"
                    onChange={(e) => setPatient({ ...patient, state: e.target.value })}
                    aria-describedby="passwordHelpBlock"
                  />
                </div>
              </div>

              <div className="col-lg-4">
                <div className="container">
                  <Form.Label htmlFor="inputPassword5">Pin-Code</Form.Label>
                  <Form.Control
                    type="number"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                    onChange={(e) => setPatient({ ...patient, pin: e.target.value })}
                  />
                </div>
              </div>

              <button className='btn btn-outline-success ' onClick={handleAddPatient} style={{ width: '70px', marginTop: '30px', marginLeft: "20px" }}>Add</button>

            </div>
          </div>
        </div>
      </div >
      <br></br>

      <div className="container">
        <h4>Patient Details</h4>
        <Row>
          <Col lg={12} sm={12}>
            <Table striped bordered hover variant="light" style={{ tableLayout: "fixed" }}>
              <thead>
                <tr style={{ textAlign: 'center' }} >
                  <th style={{ backgroundColor: 'rgb(54, 6, 98)', color: 'white' }}>ID</th>
                  <th style={{ backgroundColor: 'rgb(54, 6, 98)', color: 'white' }}>First Name</th>
                  <th style={{ backgroundColor: 'rgb(54, 6, 98)', color: 'white' }}>Last Name</th>

                  <th style={{ backgroundColor: 'rgb(54, 6, 98)', color: 'white' }}>Phone Number</th>
                  <th style={{ backgroundColor: 'rgb(54, 6, 98)', color: 'white' }}>Address</th>

                  <th style={{ backgroundColor: 'rgb(54, 6, 98)', color: 'white' }}>Action</th>
                </tr>
              </thead>
              <tbody>

                {
                  allPatient?.length > 0 ?
                    allPatient.map((item) => (
                      <>
                        <tr style={{ textAlign: 'center' }}>
                          <td>{item.id}</td>
                          <td>{item.fname}</td>
                          <td>
                            {item.lname}
                          </td>
                          <td>{item.phone}</td>
                          <td>{item.address}</td>

                          <td><button onClick={() => handleDelete(item?.id)} className='btn' ><i style={{ color: 'red' }} class="fa-solid fa-trash"></i></button></td>


                        </tr>
                      </>
                    )) : <p>Nothing to Display</p>
                }
              </tbody>
            </Table>

          </Col>
        </Row>
        <ToastContainer position='top-center' theme='colored' autoClose={2000} />

      </div>
    </>
  )
}

export default Patients
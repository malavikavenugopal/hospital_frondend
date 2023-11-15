/*  import {commonAPI} from './commonAPI'

//api to upload appointment details
 export const uploadAppointment = async (reqbody)=>{
    return await commonAPI('POST',`http://localhost:5001/appointment`,reqbody)
}

//api to get appointment details
 export const getAppointment = async ()=>{
    return await commonAPI('GET',`http://localhost:5001/appointment`,"")
}

//api to delete appointment
export const deleteAppointment = async (id)=>{
    return await commonAPI('DELETE',`http://localhost:5001/appointment/${id}`,{})
}



//api to upload department details
export const uploadDepartment = async (reqbody)=>{
    return await commonAPI('POST',`http://localhost:5001/department`,reqbody)
}

//api to get department details
export const getDepartment = async ()=>{
    return await commonAPI('GET',`http://localhost:5001/department`,"")
}

//api to delete department
export const deleteDepartment = async (id)=>{
    return await commonAPI('DELETE',`http://localhost:5001/department/${id}`,{})
}


//api to upload doctors details
export const uploadDoctor = async (reqbody)=>{
    return await commonAPI('POST',`http://localhost:5001/doctors`,reqbody)
}

//api to get doctors details
export const getDoctor = async ()=>{
    return await commonAPI('GET',`http://localhost:5001/doctors`,"")
}

//api to delete doctors
export const deleteDoctor = async (id)=>{
    return await commonAPI('DELETE',`http://localhost:5001/doctors/${id}`,{})
}





//api to get a video which is dragged and dropped

export const getADoctor= async (id)=>{
    return await commonAPI('GET',`http://localhost:5001/doctors/${id}`,"")
 }
 
 //api call to update the category when a video is dropped
 //body=>videodetails
 //id=>category id 
 export const updateDepartment = async (id,body)=>{
    return await commonAPI('PUT',`http://localhost:5001/department/${id}`,body)
 }


//api to upload patient details

export const uploadPatient = async(reqbody)=>{
    return await commonAPI('POST',`http://localhost:5001/patients`,reqbody)
}

//api to get patients details
export const getPatient = async ()=>{
    return await commonAPI('GET',`http://localhost:5001/patients`,"")
}

//api to delete patients
export const deletePatient = async (id)=>{
    return await commonAPI('DELETE',`http://localhost:5001/patients/${id}`,{})
} 
 */
 import {commonAPI} from './commonAPI'

//api to upload appointment details
 export const uploadAppointment = async (reqbody)=>{
    return await commonAPI('POST',`https://hospitalbackend-c2ku.onrender.com/appointment`,reqbody)
}

//api to get appointment details
 export const getAppointment = async ()=>{
    return await commonAPI('GET',`https://hospitalbackend-c2ku.onrender.com/appointment`,"")
}

//api to delete appointment
export const deleteAppointment = async (id)=>{
    return await commonAPI('DELETE',`https://hospitalbackend-c2ku.onrender.com/appointment/${id}`,{})
}



//api to upload department details
export const uploadDepartment = async (reqbody)=>{
    return await commonAPI('POST',`https://hospitalbackend-c2ku.onrender.com/department`,reqbody)
}

//api to get department details
export const getDepartment = async ()=>{
    return await commonAPI('GET',`https://hospitalbackend-c2ku.onrender.com/department`,"")
}

//api to delete department
export const deleteDepartment = async (id)=>{
    return await commonAPI('DELETE',`https://hospitalbackend-c2ku.onrender.com/department/${id}`,{})
}


//api to upload doctors details
export const uploadDoctor = async (reqbody)=>{
    return await commonAPI('POST',`https://hospitalbackend-c2ku.onrender.com/doctors`,reqbody)
}

//api to get doctors details
export const getDoctor = async ()=>{
    return await commonAPI('GET',`https://hospitalbackend-c2ku.onrender.com/doctors`,"")
}

//api to delete doctors
export const deleteDoctor = async (id)=>{
    return await commonAPI('DELETE',`https://hospitalbackend-c2ku.onrender.com/doctors/${id}`,{})
}





//api to get a video which is dragged and dropped

export const getADoctor= async (id)=>{
    return await commonAPI('GET',`https://hospitalbackend-c2ku.onrender.com/doctors/${id}`,"")
 }
 
 //api call to update the category when a video is dropped
 //body=>videodetails
 //id=>category id 
 export const updateDepartment = async (id,body)=>{
    return await commonAPI('PUT',`https://hospitalbackend-c2ku.onrender.com/department/${id}`,body)
 }


//api to upload patient details

export const uploadPatient = async(reqbody)=>{
    return await commonAPI('POST',`https://hospitalbackend-c2ku.onrender.com/patients`,reqbody)
}

//api to get patients details
export const getPatient = async ()=>{
    return await commonAPI('GET',`https://hospitalbackend-c2ku.onrender.com/patients`,"")
}

//api to delete patients
export const deletePatient = async (id)=>{
    return await commonAPI('DELETE',`https://hospitalbackend-c2ku.onrender.com/patients/${id}`,{})
} 
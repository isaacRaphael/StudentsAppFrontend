import React, { useState } from 'react'
import loader from '../../assets/load.gif'
import "react-toastify/dist/ReactToastify.css";
import 'process/browser';
import { MyComponentProps } from '../../interfaces';

const TeacherReg : React.FC<MyComponentProps> = ({ baseUrl } ) => {
    const [loading, setLoading] = useState(false)
    const [teacherState, setTeacherState] = useState({
        nationalId: "",
        name: "",
        title: "Mr",
        surname: "",
        dateOfBirth: "",
        teacherNumber: "",
        salary : 0
      })
    
    const clearInputs = () => {
      setTeacherState({
        nationalId: "",
        name: "",
        title: "Mr",
        surname: "",
        dateOfBirth: "",
        teacherNumber: "",
        salary : 0
      })
    }
    const handleStateChange = (key : string, value : any) => {
        setTeacherState(prev => { 
           return {...prev, [key] : value}
        }
        )
    }

    const handleSubmit = () => {
        setLoading(true)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(teacherState);
        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        };

        console.log(raw)
        fetch(`${baseUrl}api/Teacher/AddTeacher`, requestOptions)
        .then(response => {
          if(response.status == 400){
          alert("One or More Validation errors !");
            setLoading(false)
          }
          return response.json()})
        .then((result : any) =>{
          console.log(result)
            if(result.success){
              alert("Added Successfully !");
              clearInputs()
              setLoading(false)
            }
            else {
                alert("An Error Occurred !");
                setLoading(false)
            }
        })
        .catch(error => console.log('error', error));
}
    

  return (
    <div>
    <div className="mt-8 w-[300px] mx-auto">
      <div className="flex flex-col w-full gap-4">
        <label className="block w-full">
          <span className="text-gray-700">Teacher Name</span>
          <input
            value={teacherState.name}
            onChange={(e) => handleStateChange("name", e.target.value)}
            type="text"
            className="w-full mt-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-3"
            placeholder="Enter name"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Teacher Surname</span>
          <input
            type="text"
            value={teacherState.surname}
            onChange={(e) => handleStateChange("surname", e.target.value)}
            className="p-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter Surname"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Date Of Birth</span>
          <input
          value={teacherState.dateOfBirth}
          onChange={(e) => handleStateChange("dateOfBirth", e.target.value)}
            type="date"
            className="p-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Title</span>
          <select 
          value={teacherState.title}
          onChange={(e) => handleStateChange("title", e.target.value)}
          className="p-3 block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Dr">Dr</option>
            <option value="Prof">Prof</option>
          </select>
        </label>
        <label className="block">
          <span className="text-gray-700">National Id</span>
          <input
          value={teacherState.nationalId}
          onChange={(e) => handleStateChange("nationalId", e.target.value)}
            type="text"
            className="p-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter NID"
          />
        </label>

        <label className="block">
          <span className="text-gray-700"> Teacher Number</span>
          <input
            value={teacherState.teacherNumber}
            onChange={(e) => handleStateChange("teacherNumber", e.target.value)}
            type="text"
            className="p-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter Teacher Number"
          />
        </label>

        <label className="block">
          <span className="text-gray-700"> Teacher Salary</span>
          <input
          value={teacherState.salary}
          onChange={(e) => handleStateChange("salary", e.target.value)}
            type="number"
            className="p-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter Teacher Number"
          />
        </label>
        <div className="block">
          
              <label className="w-full items-center ">
                <button 
                onClick={() => handleSubmit()}
                className='mb-5 rounded-4xl cursor-pointer py-4 px-8 bg-green-600 w-full text-white flex justify-center'>{loading ? <img className='w-[25px]' src={loader}/> : "Submit"}</button>
              </label>
            
        </div>
      </div>
    </div>
  </div>
  )
}

export default TeacherReg

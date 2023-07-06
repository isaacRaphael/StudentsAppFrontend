import { useState } from 'react'
import { MyComponentProps } from '../../interfaces'
import loader from '../../assets/load.gif'

const StudentReg : React.FC<MyComponentProps> = ({ baseUrl } ) => {

    const [studentState, setStudentState] = useState(
        {
            nationalId: "",
            name: "",
            surname: "",
            dateOfBirth: "",
            studentNumber: ""
          }
    )
    const [loading, setLoading] = useState(false)
    
    const handleStateChange = (key : string, value : any) => {
        setStudentState(prev => { 
           return {...prev, [key] : value}
        }
        )
    } 

    const clearInputs = () => {
      setStudentState({
        nationalId: "",
        name: "",
        surname: "",
        dateOfBirth: "",
        studentNumber: ""
      })
    }

    const handleSubmit = () => {
      setLoading(true)
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify(studentState);
      var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      };

      console.log(raw)
      fetch(`${baseUrl}api/Student/AddStudent`, requestOptions)
      .then(response => {
        if(response.status == 400){
        alert("One or More Validation errors!");
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
      .catch(error => {
        console.log('error', error)
        setLoading(false)
       } );
    }
  return (
    <div>
    <div className="mt-8 w-[300px] mx-auto">
      <div className="flex flex-col w-full gap-4">
        <label className="block w-full">
          <span className="text-gray-700">Student Name</span>
          <input
            value= {studentState.name}
            onChange={(e) => handleStateChange("name", e.target.value)}
            type="text"
            className="w-full mt-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-3"
            placeholder="Enter name"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Student Surname</span>
          <input
          value= {studentState.surname}
          onChange={(e) => handleStateChange("surname", e.target.value)}
            type="text"
            className="p-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter Surname"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Date Of Birth</span>
          <input
          value= {studentState.dateOfBirth}
          onChange={(e) => handleStateChange("dateOfBirth", e.target.value)}
            type="date"
            className="p-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">National Id</span>
          <input
            value= {studentState.nationalId}
            onChange={(e) => handleStateChange("nationalId", e.target.value)}
            type="text"
            className="p-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter NID"
          />
        </label>

        <label className="block">
          <span className="text-gray-700"> Student Number</span>
          <input
            value= {studentState.studentNumber}
            onChange={(e) => handleStateChange("studentNumber", e.target.value)}
            type="text"
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

export default StudentReg

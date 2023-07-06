import {useState} from 'react'
import TeacherReg from './Components/TeacherReg'
import StudentReg from './Components/StudentReg'
import { MyComponentProps } from '../interfaces'

const Registration : React.FC<MyComponentProps>= ({ baseUrl } ) : JSX.Element => {
const [regState, setRegState] = useState({
    currentReg : "teacher"
})

const handleStateChange = (key : string, value : any) => {
    setRegState(prev => { 
       return {...prev, [key] : value}
    }
    )
}

return(
  <div className="flex justify-center items-center flex-col">
    

   <div className="flex gap-4 mt-5  bg-white">
    <div 
    onClick={() => handleStateChange("currentReg","teacher")}
    className={regState.currentReg == "teacher" ? "px-4 border-b-2 py-4 cursor-pointer" : "px-4 py-4 cursor-pointer" }>
        <h2>Teacher Registration</h2>
    </div>
    <div 
    onClick={() => handleStateChange("currentReg", "student")}
    className={regState.currentReg == "student" ? "px-4 border-b-2 py-4 cursor-pointer" : "px-4 py-4 cursor-pointer" }>
        <h2>Student Registration</h2>
    </div>
   </div>


  { regState.currentReg == "teacher" && 
    <TeacherReg baseUrl={baseUrl}/>
  }

  { regState.currentReg == "student" && 
    <StudentReg baseUrl={baseUrl}/>
  }
  </div>
)
}

export default Registration

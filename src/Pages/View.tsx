import { useState } from "react"
import { MyComponentProps } from "../interfaces"
import StudentView from "./Components/StudentView"
import TeacherView from "./Components/TeacherView"

const View : React.FC<MyComponentProps>  = ({ baseUrl}) => {
    const [regState, setRegState] = useState({
        currentReg : "teacher"
    })
    
    const handleStateChange = (key : string, value : any) => {
        setRegState(prev => { 
           return {...prev, [key] : value}
        }
        )
    }
  return (
    <div>
      <div className="flex gap-4 mt-5 bg-white">
            <div 
            onClick={() => handleStateChange("currentReg","teacher")}
            className={regState.currentReg == "teacher" ? "px-4 border-b-2 py-4 cursor-pointer" : "px-4 py-4 cursor-pointer" }>
                <h2>Teacher View</h2>
            </div>
            <div 
            onClick={() => handleStateChange("currentReg", "student")}
            className={regState.currentReg == "student" ? "px-4 border-b-2 py-4 cursor-pointer" : "px-4 py-4 cursor-pointer" }>
                <h2>Student View</h2>
            </div>
         </div>

         {
            regState.currentReg == "teacher" && <TeacherView baseUrl={baseUrl} />
         }
         {
            regState.currentReg == "student" && <StudentView baseUrl={baseUrl} />
         }
    </div>
  )
}

export default View

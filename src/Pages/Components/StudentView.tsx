import { useState, useEffect } from "react"
import { MyComponentProps } from "../../interfaces"
const StudentView : React.FC<MyComponentProps> = ({ baseUrl }) => {
    const [students, setStudents] = useState([])

    useEffect(() => {
        fetch(`${baseUrl}api/Student/GetStudents`)
        .then(response => {
          return response.json()})
        .then((result : any) =>{
          console.log(result)
            if(result.success){
                setStudents(result.data)
            }
        })
        .catch((error : Error) => alert(error.message));
    }, [])
  return (
    <div className="px-8 mt-4">
      {
        students.length > 0 ? <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Naame
                </th>
                <th scope="col" className="px-6 py-3">
                    Surname
                </th>
                <th scope="col" className="px-6 py-3">
                    NationalId
                </th>
                <th scope="col" className="px-6 py-3">
                    Student Number
                </th>
            </tr>
        </thead>
        <tbody>
            {students.map((s : any) => <tr key={s.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {s.name}
                </th>
                <td className="px-6 py-4">
                    {s.surname}
                </td>
                <td className="px-6 py-4">
                    {s.nationalId}
                </td>
                <td className="px-6 py-4">
                    {s.studentNumber}
                </td>
            </tr>)}
            
        </tbody>
    </table> : <div><h2>List is currently empty...</h2></div>
      }
    </div>
  )
}

export default StudentView

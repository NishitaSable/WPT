// import { useEffect, useState } from "react"
// import type { IEmployee } from "./models/IEmployee"
// import { useNavigate, useParams } from "react-router-dom";
// import { getEmployee,deleteEmployee } from "./services/employeeService";

// const EmployeeDel : React.FC = () => {
//     const [employee,setEmployee] = useState<IEmployee | null>(null);
//     const { id } = useParams<{ id:string }>()
//     const navigate = useNavigate()

//     useEffect(()=> {
//         const fetchEmployee = async() => {
//             try{
//                 if(id){
//                     const data = await getEmployee(Number(id))
//                     setEmployee(data)
//                 }
//             }catch(error){
//                 console.error("Error fetching employee",error)
//             }
//         }
//         fetchEmployee()
//     },[id])
//     const handleDelete = async(event:React.FormEvent<HTMLFormElement>)=>{
//         event.preventDefault()
//         try{
//             if(id){
//                 await deleteEmployee(Number(id))
//                 console.log("Employee deleted successfully")
//                 navigate("/Listemployee")
//             }
//         }catch(error){
//             console.error("Error deleting Employee",error)
//         }
//     }
//     return (
//     <div>
//       <h1 style={{ color: "red" }}>Are you sure?</h1>
//       {employee && (
//         <>
//           <label>Id:</label> {employee.id}
//           <br />
//           <label>Name:</label> {employee.name}
//           <br />
//           <label>Salary:</label> {employee.salary}
//           <br />
//           <label>Gender:</label> {employee.gender}
//           <form onSubmit={handleDelete}>
//             <input type="submit" value="Confirm Delete" />
//           </form>
//         </>
//       )}
//     </div>
//   );
// };
// export default EmployeeDel



import { useEffect, useState } from "react";
import type { IEmployee } from "./models/IEmployee";
import { useNavigate, useParams } from "react-router-dom";
import { getEmployee, deleteEmployee } from "./services/employeeService";

const EmployeeDel: React.FC = () => {
  const [employee, setEmployee] = useState<IEmployee | null>(null);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        if (id) {
          const data = await getEmployee(Number(id));
          setEmployee(data);
        }
      } catch (error) {
        console.error("Error fetching employee:", error);
      }
    };

    fetchEmployee();
  }, [id]);

  const handleDelete = async () => {
    try {
      if (id) {
        await deleteEmployee(Number(id));
        alert("Employee deleted successfully!");
        navigate("/Listemployee");
      }
    } catch (error) {
      console.error("Error deleting employee:", error);
      alert("Failed to delete employee.");
    }
  };

  return (
    <div>
      <h2 style={{ color: "red" }}>Are you sure you want to delete?</h2>

      {employee && (
        <>
          <p>Id: {employee.id}</p>
          <p>Name: {employee.name}</p>
          <p>Gender: {employee.gender}</p>
          <p>Salary: {employee.salary}</p>

          <button onClick={handleDelete}>
            Confirm
          </button>
            { '|' }
          <button onClick={() => navigate("/Listemployee")}>
            Cancel
          </button>
        </>
      )}
    </div>
  );
};

export default EmployeeDel;
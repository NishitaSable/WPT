import React, { useEffect, useState } from "react"
import type { IEmployee } from "./models/IEmployee";
import { useParams } from "react-router-dom"
import { getEmployee } from "./services/employeeService"

const EmployeeId: React.FC = () => {
    const [employee,setEmployee] = useState<IEmployee | null>(null)
    const {id} = useParams<{id:string}>()
    console.log(id)

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
  return(
    <div>
        {employee?(
            <>
            <label>Id:</label>{employee.id}
            <br />
            <label>Name:</label>{employee.name}
            <br />
            <label>Salary:</label>{employee.salary}
            <br />
            <label>Gender:</label>{employee.gender}
            </>
        ):(
            <p>Loading employee data....</p>
        )}
    </div>
  );
};
export default EmployeeId
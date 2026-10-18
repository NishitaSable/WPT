import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import type { IEmployee } from "./models/IEmployee";
import { getEmployees } from "./services/employeeService";

const ListEmployee: React.FC = () => {
  const [employee, setEmployee] = useState<IEmployee[]>([]);

 useEffect(() => {
   let isMounted = true; 
    const controller = new AbortController();
    const fetchEmployees = async () => {
      try {
        const data = await getEmployees();
         if (isMounted) 
        setEmployee(data);
      } catch (error) {
        if (isMounted) 
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
    return () => {
      isMounted = false; 
      controller.abort();
    };
  }, []);

  return (
    <div> <h4>
        <Link to="/create">Create</Link>
      </h4><h2>Employees Data...</h2>
      <table><thead>
          <tr><th>Id</th><th>Name</th><th>Email</th><th>Department</th>
          </tr>
        </thead>
        <tbody>
                    {employee.map(emp => (
                        <tr key={emp._id}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.gender}</td>
                            <td>{emp.salary}</td>

                            <td>
                                <Link to={"/employee/" + emp.id}>
                                    Display
                                </Link>{" "}

                                <Link to={"/empup/" + emp._id}>Edit</Link>{" "}

                                <Link to={"/empdel/" + emp.id}>
                                    Delete
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
      </table>
    </div>
  );
};

export default ListEmployee;

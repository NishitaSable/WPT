import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Listperson() {
    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8081/employee")
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setEmployee(result);
            })
            .catch(error => {
                console.log("Error:", error);
            });
    }, []);

    return (
        <div>
            {/* <h4>
                <Link to="/create">Create</Link>
            </h4> */}

            <h2>Employee Data.......</h2>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Salary</th>
                        <th>Action</th>
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

                                <Link to={"/empup/" + emp.id}>
                                    Edit
                                </Link>{" "}

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
}

export default Listperson;
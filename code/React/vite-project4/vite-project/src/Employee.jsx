import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Employee() {

    // Get id from URL
    // Example: /emp/1
    // id = "1"
    const { id } = useParams();

    const [employee, setEmployee] = useState(null);

    useEffect(() => {

        // Fetch employee using id
        fetch("http://localhost:8081/employee/" + id)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setEmployee(result);
            })
            .catch(error => {
                console.log("Error:", error);
            });

    }, [id]);

    // While data is loading
    if (!employee) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <h2>Employee Details</h2>
            <p>
                <b>ID:</b> {employee.id}
            </p>
            <p>
                <b>Name:</b> {employee.name}
            </p>
            <p>
                <b>Gender:</b> {employee.gender}
            </p>
            <p>
                <b>Salary:</b> {employee.salary}
            </p>
        </div>
    );
}

export default Employee;
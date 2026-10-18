import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export function EmployeeDel() {

    const [employee, setEmployee] = useState(null);

    const { id } = useParams();
    const navigate = useNavigate();

    // Get employee data
    useEffect(() => {

        fetch("http://localhost:8081/employee/" + id)

            .then((res) => {
                return res.json();       // IMPORTANT: return
            })

            .then((result) => {
                console.log(result);
                setEmployee(result);
            })

            .catch((error) => {
                console.log(error);
            });

    }, [id]);


    // Delete employee
    const handeldel = (event) => {

        event.preventDefault();

        fetch("http://localhost:8081/empdel/" + id, {
            method: "DELETE"
        })

        .then((res) => res.text())

        .then((result) => {
            console.log(result);

            // Go back to employee list
            navigate("/ListEmployee");
        })

        .catch((error) => {
            console.log(error);
        });
    };


    // While API data is loading
    if (!employee) {
        return <h2>Loading...</h2>;
    }


    return (
        <div>

            <h1 style={{ color: "red" }}>
                Are you sure?
            </h1>

            <label>Id:</label>
            {employee.id}
            <br />

            <label>Name:</label>
            {employee.name}
            <br />

            <label>Gender:</label>
            {employee.gender}
            <br />

            <label>Salary:</label>
            {employee.salary}
            <br />

            <form onSubmit={handeldel}>
                <input type="submit" value="Delete" />
            </form>

        </div>
    );
}

export default EmployeeDel;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Create() {
    // Store employee form data
    const [employee, setEmployee] = useState({
        id: "",
        name: "",
        gender: "",
        salary: ""
    });

    const navigate = useNavigate();

    // Update data when user types
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        // Keep old values and update the current field
        setEmployee(values => ({
            ...values,
            [name]: value
        }));
    };

    // Send data to the backend
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(
                "http://localhost:8081/employee",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    // Convert form data into JSON
                    body: JSON.stringify({
                        ...employee,
                        id: Number(employee.id),
                        salary: Number(employee.salary)
                    })
                }
            );

            // Check whether the request succeeded
            if (!response.ok) {
                const error = await response.text();
                throw new Error(error);
            }

            const result = await response.json();
            console.log("Employee added:", result);

            // Navigate only after successful insertion
            navigate("/");
        } catch (error) {
            console.error("POST failed:", error);
            alert("Employee could not be added. Check the console.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>ID:</label>
            <input
                type="number"
                name="id"
                value={employee.id}
                onChange={handleChange}
                required
            />
            <br />

            <label>Name:</label>
            <input
                type="text"
                name="name"
                value={employee.name}
                onChange={handleChange}
                required
            />
            <br />

            <label>Gender:</label>
            <input
                type="text"
                name="gender"
                value={employee.gender}
                onChange={handleChange}
                required
            />
            <br />

            <label>Salary:</label>
            <input
                type="number"
                name="salary"
                value={employee.salary}
                onChange={handleChange}
                required
            />
            <br />

            <input type="submit" value="Add Employee" />
        </form>
    );
}

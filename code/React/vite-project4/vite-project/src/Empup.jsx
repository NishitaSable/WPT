
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Empup() {
    const [employee, setEmployee] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    // Fetch employee details
    useEffect(() => {
        fetch("http://localhost:8081/employee/" + id)
            .then(res => {
                if (!res.ok) {
                    throw new Error("Employee not found");
                }
                return res.json();
            })
            .then(result => setEmployee(result))
            .catch(error => console.log(error));
    }, [id]);

    // Update form values
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setEmployee(values => ({
            ...values,
            [name]: value
        }));
    };

    // Submit updated employee
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("http://localhost:8081/empup/" + id,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        ...employee,
                        id: Number(employee.id),
                        salary: Number(employee.salary)
                    })
                }
            );

            if (!response.ok) {
                throw new Error(await response.text());
            }

            const result = await response.json();
            console.log("Updated employee:", result);

            navigate("/");
        } catch (error) {
            console.log("Update failed:", error);
            alert("Employee update failed");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Employee ID:</label>
            <input
                type="number"
                name="id"
                value={employee?.id ?? ""}
                onChange={handleChange}
                required
            />
            <br />

            <label>Name:</label>
            <input
                type="text"
                name="name"
                value={employee?.name ?? ""}
                onChange={handleChange}
                required
            />
            <br />

            <label>Gender:</label>
            <input
                type="text"
                name="gender"
                value={employee?.gender ?? ""}
                onChange={handleChange}
                required
            />
            <br />

            <label>Salary:</label>
            <input
                type="number"
                name="salary"
                value={employee?.salary ?? ""}
                onChange={handleChange}
                required
            />
            <br />

            <input type="submit" value="Update Employee" />
        </form>
    );
}

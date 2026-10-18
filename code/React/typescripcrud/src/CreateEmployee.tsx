import { useState } from "react";
import type { IEmployee } from "./models/IEmployee";
import { useNavigate } from "react-router-dom";
import { addEmployee } from "./services/employeeService";

const CreateEmployee: React.FC = () => {
  const [employee, setEmployee] = useState<
    Omit<IEmployee, "_id" | "id"> & { id: number | "" }
  >({
    id: "",
    name: "",
    gender: "",
    salary: 0,
  });

  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    setEmployee((values) => ({
      ...values,
      [name]: ["id", "salary"].includes(name)
        ? value === ""
          ? ""
          : Number(value)
        : value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const newEmployee = await addEmployee(employee);
      console.log("Employee created:", newEmployee);
      navigate("/Listemployee");
    } catch (error) {
      console.error("Error creating employee:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <label>Id:</label>
      <input
        type="number"
        name="id"
        value={employee.id}
        onChange={handleChange}
        required
        min="1"
      />
      <br /> */}
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
        min="0"
      />
      <br />

      <input type="submit" value="Create Employee" />
    </form>
  );
};

export default CreateEmployee;

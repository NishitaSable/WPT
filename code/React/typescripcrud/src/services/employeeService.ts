// import type { IEmployee } from "../models/IEmployee";

// const API_URL = "http://localhost:8081/employee";

// export async function getEmployees(): Promise<IEmployee[]> {
//   const response = await fetch(API_URL);

//   if (!response.ok) {
//     throw new Error("Failed to fetch employees");
//   }

//   return response.json();
// }

// export async function getEmployee(id: number): Promise<IEmployee> {
//   const response = await fetch(`${API_URL}/${id}`);

//   if (!response.ok) {
//     throw new Error("Employee not found");
//   }

//   return response.json();
// }

// export async function addEmployee(
//   employee: Omit<IEmployee, "_id">
// ): Promise<IEmployee> {
//   const response = await fetch(API_URL, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(employee),
//   });

//   if (!response.ok) {
//     throw new Error("Failed to add employee");
//   }

//   return response.json();
// }

// // export async function deleteEmployee(id: number): Promise<void> {
// //   await fetch(`${API_URL}/${id}`, { method: "DELETE" });
// // }


// export async function deleteEmployee(id: number): Promise<void> {
//   const response = await fetch(`http://localhost:8081/empdel/${id}`, {
//     method: "DELETE",
//   });

//   if (!response.ok) {
//     const message = await response.text();
//     throw new Error(message || "Failed to delete employee");
//   }
// }



import type { IEmployee } from "../models/IEmployee";

const API_URL = "http://localhost:8081/employee";
const DELETE_URL = API_URL.replace("/employee", "/empdel");

export async function getEmployees(): Promise<IEmployee[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch employees");
  }

  return response.json();
}

export async function getEmployee(id: number): Promise<IEmployee> {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Employee not found");
  }

  return response.json();
}

export async function addEmployee(
  employee: Omit<IEmployee, "_id">
): Promise<IEmployee> {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  });

  if (!response.ok) {
    throw new Error("Failed to add employee");
  }

  return response.json();
}

export async function deleteEmployee(id: number): Promise<void> {
  const response = await fetch(`${DELETE_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Failed to delete employee");
  }
}


export async function updateEmployee(id: number, employee: IEmployee): Promise<IEmployee|null> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  });
   // If no content, return null
  if (response.status === 204) {
    return null;
  }
  return response.json();
}
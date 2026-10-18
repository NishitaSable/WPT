function go() {
    // Create an employee object with empty values
    data = {
        employee: {
            code: '',
            name: ''
        }
    };

    // Get the name of the input field
    const name = event.target.name;

    // Print the input element
    console.log(event.target);

    // Get the value entered by the user
    const value = event.target.value;

    // Print the input element again
    console.log(event.target);

    // Update the employee object
    data = {
        employee: {
            ...data.employee, // Copy existing properties(obj cloning)
            [name]: value     // Update the matching property
        }
    };

    // Print the updated employee object
    console.log(data.employee);
}
// Create an AbortController object
let controller = new AbortController();

// Get the AbortSignal from the controller
// The signal is used to monitor whether the operation is aborted
let signal = controller.signal;

console.log(controller);
console.log(signal);


// Add an event listener for the "abort" event
// This function will run when controller.abort() is called
signal.addEventListener("abort", () => {
    alert("abort!");
});


// Abort the operation
// This changes signal.aborted from false to true
// It also triggers the "abort" event above
controller.abort();


// Check whether the signal has been aborted
// Output will be: true
alert(signal.aborted);
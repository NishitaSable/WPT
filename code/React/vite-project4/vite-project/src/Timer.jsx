import { useEffect, useState } from "react";
// import ReactDOM from "react-dom/client";

export default function Timer() {

    // count = current state value
    // setCount = function used to update count
    // Initial value of count is 0
    const [count, setCount] = useState(0);


    // useEffect runs after the component is rendered
    useEffect(() => {

        // setTimeout waits for 1 second (1000 milliseconds)
        setTimeout(() => {

            // setCount updates the count
            //
            // count => count + 1 means:
            // Take the latest count value
            // and add 1 to it
            //
            // Example:
            // count = 0 → 0 + 1 = 1
            setCount((count) => count + 1);

        }, 1000);

    }, []); // [] means this useEffect runs only once after initial render


    // Display the current count on the screen
    return <h1>I've rendered {count} times!</h1>;
}
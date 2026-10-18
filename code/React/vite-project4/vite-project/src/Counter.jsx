import { useEffect, useState } from "react";
//useEffect has two parameter callback and dependency
// data coming in future s sideeffect so we use closure
// e-event

export default function Counter() {

    // count = current count value
    // setCount = function used to change count
    // Initial value of count is 0
    const [count, setCount] = useState(0);

    // calculation = current calculation value
    // setCalculation = function used to change calculation
    // Initial value is 0
    const [calculation, setCalculation] = useState(0);


    // useEffect runs after the component renders
    useEffect(() => {

        // count * 2 is calculated
        // setCalculation() updates the calculation state
        //
        // Example:
        // count = 0 → calculation = 0
        // count = 1 → calculation = 2
        // count = 2 → calculation = 4
        setCalculation(() => count * 2);

    });


    return (
        <>
            {/* Display the current count */}
            <p>Count: {count}</p>


            {/* 
                When the button is clicked:
                setCount() updates count

                c represents the previous count value.

                Example:
                c = 0 → c + 1 = 1
                c = 1 → c + 1 = 2
                c = 2 → c + 1 = 3
            */}
            <button onClick={() => setCount((c) => c + 1)}>
                +====
            </button>


            {/* Display the calculated value */}
            <p>Calculation: {calculation}</p>
        </>
    );
}
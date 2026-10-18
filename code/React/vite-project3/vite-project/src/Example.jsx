import React, { useState } from "react";
//useState return type is array
//it uses closure to maintain the state

function Example() {
    const [count, setCount] = useState(0);//useState return type is array (array destructuring)
    //setCount is updating the count which is pointing to anonymous function


    // let count=0
    // function getCount(){
    //     count=count+1
    //     alert(count)
    // }
    // return(
    //     <div>
    //         <p>You clicked {count} times</p>
    //         <button onClick={getCount}>Click me</button>
    //         {/* {count} */}
    //     </div>
    // )


    return (
        <div>
            <p>You Clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click Me
            </button>
            {/* {count} */}
        </div>
    )
}
export default Example
// import { useState } from "react";
// function MyButton() {
//  const [count, setCount] = useState(0);

//  function handleClick() {
//   setCount(count + 1);
//  }
// //  return (
// //   <button onClick={handleClick}>
// //    Clicked {count} times
// //   </button>
// //  );


//  return(
//     <button></button>
//  )

//  //state is local to the function 
// //  every button has its own count
// }
// //uplift the state up in parent function so parent will modify value and pass to child
// export default MyButton


export default function Button({ count, onClick }) {
    return (
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    )
}
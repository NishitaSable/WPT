// import { useState } from "react";
// export default function App() {
//     const gender = ["Dance", "Music", "Sports"];
//     const [inputsrd, setInputsrd] = useState([]);
//     const handleChange = (event) => {
//         setInputsrd((t) => [...t, event.target.value]);
//     }
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         alert([inputsrd]);
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//             <label>Enter Hobbies:</label>
//             {gender.map((g, i) => {
//                 return <div key={i}>
//                     <label>{g}</label>
//                     <input type="checkbox" name={"nm" + i} value={g} onClick={handleChange} />
//                 </div>
//             })
//             }

//             <input type="submit" />
//         </form>
//     )
// }


// import React from "react";
// const Checkboxmulti = () => {
//  const [allchecked, setAllChecked] = React.useState([]);
//  function handleChange(e) {
//    if (e.target.checked) {
//     setAllChecked([...allchecked, e.target.value]);
//    } else {
//     setAllChecked(allchecked.filter((item) => item !== e.target.value));
//    }
//  }
//  return (<div>      <div>
//       <input value = "One" type = "checkbox" onChange = {handleChange} />  <span> One </span>
//     </div>
//     <div>
//       <input value = "Two" type = "checkbox" onChange = {handleChange} />   <span> Two </span>
//     </div>
//     <div>
//       <input value = "Three" type = "checkbox" onChange = {handleChange} /> <span> Three </span>
//     </div>
//     <div>
//       <input value = "Four" type = "checkbox" onChange = {handleChange} />   <span> Four </span>
//     </div>
//     <div>
//       <input value = "Five" type = "checkbox" onChange = {handleChange} />   <span> Five </span>
//     </div>
//     <div>The all checked values are {allchecked.join(" , ")}</div>  
//     </div>
//  )
// }
// export default Checkboxmulti; 




import React from "react";

const Checkboxmulti = () => {
    const items = ["One", "Two", "Three", "Four", "Five"];

    const [allchecked, setAllChecked] = React.useState([]);

    function handleChange(e) {
        if (e.target.checked) {
            setAllChecked([...allchecked, e.target.value]);
        } else {
            setAllChecked(
                allchecked.filter((item) => item !== e.target.value)
            );
        }
    }

    return (
        <div>
            {items.map((item, i) => {
                return (
                    <div key={i}>
                        <input
                            type="checkbox"
                            value={item}
                            onChange={handleChange}
                        />
                        <span>{item}</span>
                    </div>
                );
            })}

            <div>
                The all checked values are: {allchecked.join(", ")}
            </div>
        </div>
    );
};

export default Checkboxmulti;
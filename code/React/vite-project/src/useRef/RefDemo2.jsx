import { useRef } from "react";


function RefDemo2(){
    const paraRef = useRef()
    const changeColor = () => {
        paraRef.current.style.color = "blue"
    }
    return(
        <>
        <p ref={paraRef}>This is paragraph</p>
        <button onClick={changeColor}>Change Color</button>
        </>
    )
}
export default RefDemo2
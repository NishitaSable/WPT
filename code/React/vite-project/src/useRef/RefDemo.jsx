import { useRef } from "react"
//useRef return current
function RefDemo(){
    const inputElement = useRef()
    const focusInput = () => {
        inputElement.current.focus()
    }
    return (
        <>
        <input type="text" ref={inputElement} />
        <button onClick={focusInput}>Focus Input</button>
        </>
    )
}
export default RefDemo
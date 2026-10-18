import { useState } from "react"

export default function DynamicRdio() {
    const gender = ["Male", "Female"]
    const [inputsrd, setInputsrd] = useState(null)

    const handleChange = (event) => {
        setInputsrd(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        alert(inputsrd)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Enter Gender:</label>
            {
                gender.map((g, i) => {
                    return <div key={i}>
                        <label>{g}
                        <input type="radio" name="nm" value={g} onClick={handleChange} />
                        </label>
                    </div>
                })
            }
            <input type="submit" />
        </form>
    )
}
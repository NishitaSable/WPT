import { useState } from "react"

function FormAdd() {
    const [no1, setno1] = useState(0)
    const [no2, setno2] = useState(0)
    const [no3, setno3] = useState(0)
    const [rd, setrd] = useState(null)

    // const add = () => setno3(+no1 + +no2) //convert string to number
    const add = () => {
        let result = ""
        if (rd == '+')
            result = (Number(no1) + Number(no2));
        else if (rd == '*')
            result = (Number(no1) * Number(no2));
        else if (rd == '/')
            result = Number(no1) / Number(no2);
        setno3(result);
    }
    return (
        <>
            <input type="no1" value={no1} onChange={(e) => setno1(e.target.value)} />
            <input type="no2" value={no2} onChange={(e) => setno2(e.target.value)} />
            <button type="button" onClick={add}>result</button>
            <input type="no3" value={no3} disabled={true} />

            <input type="radio" name="rd" value="+" checked={rd === '+'} onChange={(e) => setrd(e.target.value)} />+
            <input type="radio" name="rd" value="*" checked={rd === '*'} onChange={(e) => setrd(e.target.value)} />*
            <input type="radio" name="rd" value="/" checked={rd === '/'} onChange={(e) => setrd(e.target.value)} />/



        </>
    )

}
export default FormAdd
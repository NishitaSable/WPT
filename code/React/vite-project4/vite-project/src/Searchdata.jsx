export function Searchdata({onQuery}){
    function handleInput(e){
        onQuery(e.target.value)
    }
    return(
        <div>
            <input type="text" onChange={handleInput} />
        </div>
    )
}
import { useState } from "react"
import { Container } from './Container'
import { Searchdata } from './Searchdata'

function Search() {
  
    const [query,setquery]=useState("")
    function setdata(data){
        setquery(data)
    }
    return(
    <div className="Search">
        <Searchdata onQuery={setdata}/>
        <Container query={query}/>
    </div>
  )
}

export default Search
import { useEffect,useState } from "react"

export function Container ({query}){
  const [list,setlist] = useState([])
  useEffect(()=>{
    fetch("ejson.json").then(res=>res.json())
    .then(data => setlist(data))
  },[])
  const arr = list.filter((data) => data.gender === query)
  const ar = arr.length === 0 ? list : arr
  console.log(arr)
  console.log(query)
  return(
    <ul>
      data
      {ar.map((listItem) => (
        <li key={listItem.code}>{listItem.code}</li>
      ))}
    </ul>
  )
}
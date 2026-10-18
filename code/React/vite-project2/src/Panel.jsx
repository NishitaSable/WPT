const Panel=()=>{
   

    let isLoggedin = false;


    return(
       <>
       <div>
        {isLoggedin?(
            <AdminPanel />):(
                <LogginForm/>
            )
            }
       </div>
       </>
    )
}

export default Panel

export function AdminPanel(){
    return(
        <>
        <h1>Admin</h1>
        </>        
    )
}

export function LogginForm(){
    return(
        <>
        <h1>Logged in</h1>
        </>
    )
}
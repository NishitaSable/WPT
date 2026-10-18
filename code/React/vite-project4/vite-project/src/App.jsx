import './App.css'
import Header from "./Header";
import { Outlet, Link} from "react-router-dom"
import Footer from "./Footer";
import { useState } from 'react';
// import Listperson from "./Listperson";

function App() {
  const[isSignedIn,setIsSignedIn] = useState(false)
  const signin = () => setIsSignedIn(true)
  const signout = () => setIsSignedIn(false)
 return (
  <div>
    <Header />
   <nav>
    <ul>
     <li><Link to="/Home">Home</Link> </li>
     <li><Link to="/Contactus">Contactus</Link> </li>
     <li><Link to="/Listperson">ListPerson</Link> </li>
     <h4><Link to="/create">Create</Link></h4>
    </ul>
   </nav>
   {isSignedIn ? (
    <button onClick={signout}>Sign out</button>
   ):(
    <button onClick={signin}>Sign in</button>
   )}
   <Outlet context={{ isSignedIn }} />
    <Footer />
  </div>
 );
}
// nested route - everything should come on same page
//if no nested route it will to next page
export default App;
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Routes,Route, BrowserRouter} from "react-router-dom"
import Home from './Home.jsx'
import Contactus from './Contactus.jsx'
import Listperson from './Listperson.jsx'
import Employee from './Employee.jsx'
import Notfound from './Notfound.jsx'
import EmployeeDel from './EmployeeDel.jsx'
import Create from './Create.jsx'
import Empup from './Empup.jsx'
import Search from './Search.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'

createRoot(document.getElementById('root')).render(  
 <BrowserRouter>
  <Routes> 
   <Route path="/" element={<App />} >  
    <Route path="Home" element={<Home />} />
    <Route path="Contactus" element={<Contactus />} />
    <Route path="Listperson" element={ 
					 <ProtectedRoute>
   					   <Listperson/>
					</ProtectedRoute>
				 } />
    <Route path="employee/:id" element={<Employee />} />
    <Route path="empdel/:id" element={<EmployeeDel />} /> 
    <Route path="empup/:id" element={<Empup />} />
    <Route path="Create" element={<Create/>} /> 
    <Route path="Search" element={<Search />} />
    <Route path="*" element={<Notfound />} />
   </Route>
  </Routes>
 </BrowserRouter>
)

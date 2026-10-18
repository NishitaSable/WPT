import { Navigate, useOutletContext } from "react-router-dom";

function ProtectedRoute({ children }) {
 const { isSignedIn } = useOutletContext();
 if (!isSignedIn){
  alert("You must be signed in to view this page.");
  return <Navigate to="/home" replace />;
 }
 return children;
}

export default ProtectedRoute;
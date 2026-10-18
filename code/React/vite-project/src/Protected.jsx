import React from 'react'
import { useNavigate } from 'react-router-dom'
function Protected({ isSignedIn, children }) {
    const navigate = useNavigate();
    if (!isSignedIn) {
        return navigate("/");

    }
    return children
}
export default Protected
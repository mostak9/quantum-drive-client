import { useContext } from "react";
import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvder/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    console.log('loading ',loading);
    console.log(user);

    if(loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        )
    }

    if(!user) {
        return <Navigate to={'/login'}></Navigate>
    }

    return children;
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
}

export default PrivateRoute;
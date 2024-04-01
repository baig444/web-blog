/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import PostContext from '../context/PostContext';

function ProtectedRoute({ element, ...rest }) {
    const {isAuth} = useContext(PostContext)
    return (
        isAuth ? (
            <Route {...rest} element={element} />
        ) : (
            <Navigate to="/login" replace />
        )
    );
}

export default ProtectedRoute
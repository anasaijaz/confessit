import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({children, restricted, ...rest}) => {
    return (restricted ?<Navigate to="/" /> : children
    );
};

export default PublicRoute;
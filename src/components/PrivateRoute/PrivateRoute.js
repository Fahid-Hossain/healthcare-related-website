import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from "../../hooks/useAuth"

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return (
            <div>
                 <div class=" flex justify-center items-center">
                
                <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
            </div>
                <p className="text-lg font-bold mt-5 text-gray-400">Loading...</p>
            </div>
            
            )

    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/signin",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
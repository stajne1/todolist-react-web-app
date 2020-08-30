import React, { useContext } from 'react';
import Dashboard from './Dashboard';
import SignIn from './SignIn';
import { userContext } from '../userProvider'

const AppContainer = () => {
    const user = useContext(userContext);
    return (
        <div className="app">
            {user ? <Dashboard /> : <SignIn />}
        </div>
    );
}

export default AppContainer;
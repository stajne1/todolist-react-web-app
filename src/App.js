import React from 'react';
import AppContainer from './containers/AppContainer'
import UserProvider from './userProvider';
import './App.scss';

function App(props) {
    return (
        <UserProvider>
            <AppContainer />
        </UserProvider>
    );
}

export default App;

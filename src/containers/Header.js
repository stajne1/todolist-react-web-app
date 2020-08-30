import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { auth } from '../firebase';
import { userContext } from '../userProvider';

const Header = () => {
    const user = useContext(userContext);
    const signOut = () => {
        auth.signOut();
    }
    
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{flexGrow: '1'}}>
                    TODOS
                </Typography>
                {user && <Button color="inherit" onClick={signOut}>Sign Out</Button>}
            </Toolbar>

        </AppBar>
    );
}

export default Header;
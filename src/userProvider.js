import React, { createContext, Component } from 'react';
import { auth } from './firebase';

export const userContext = createContext({ user: null });

class UserProvider extends Component {
    state = {
        user: null
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            this.setState({
                user
            });
        })
    }

    render() {
        return(
            <userContext.Provider value={this.state.user}>
                {this.props.children}
            </userContext.Provider>
        )
    }
}

export default UserProvider;
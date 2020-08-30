import React, { Fragment } from 'react';
import Header from './Header';
import GoogleButton from 'react-google-button'
import { signInWithGoogle } from '../firebase';

const SignIn = props => {
    return (
        <Fragment>
            <Header />
            <div className='signInContainer'>
                <GoogleButton onClick={signInWithGoogle} />
            </div>
        </Fragment>
    )
}

export default SignIn;
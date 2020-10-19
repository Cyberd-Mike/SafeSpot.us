import React, {Fragment, useEffect, useState} from 'react';
import {navigate} from '@reach/router';
import {Button} from '@material-ui/core';
import {Auth} from 'aws-amplify';

export function AuthButtons(props){
    const [authState, setAuthState] = useState();

    useEffect(() => {
        console.log('Running effect in button_auth')
        async function getAuthState(){
            await Auth.currentAuthenticatedUser()
            .then(() => setAuthState(true))
            .catch((err) => {
                console.log('AuthState error', err)
                setAuthState(false)
            })    
        }
        
        if (authState === undefined){getAuthState();}
    },[])

    const ButtonAuthenticated = (
        <Fragment>
            <Button size="medium" variant="outlined" className="Btn_Auth Btn_AuthTrue"
            onClick = { async () => {
                navigate('/dashboard');
            }}>
                Store Portal
            </Button>
            
            <Button size="medium" variant="outlined" className="Btn_Auth Btn_Signout" 
            onClick={ async () => {
                await Auth.signOut()
                .then(() => navigate('/') )
                .catch((err) => console.log(err))
            }}> Sign Out </Button>
        </Fragment>
    );

    const ButtonUnauthenticated = (
        <Button size="medium" variant="outlined" className="Btn_Auth Btn_AuthFalse" onClick = {() => navigate('/dashboard')} >
            Store Login
        </Button>
    );

    return( authState === true ? ButtonAuthenticated : ButtonUnauthenticated );
}

export default AuthButtons;
import React, {Fragment, useState} from 'react';
import {Grid, Button, TextField} from '@material-ui/core';
import {ReactComponent as Logo} from '../../img/Logo-sm.svg';
export function Login(){
    const [password, setPassword] = useState();
    const [username, setUsername] = useState();

    return(
        <Fragment>
            <Grid container>
            <Grid item xs={6}>
                <Logo id="Logo"/>
            </Grid>
            <Grid item xs={6} style={{textAlign: "center"}}>
                <h1 style={{color: "white"}}>Login</h1>
                <p style={{color: "white"}}>Please enter your username and password below</p>
                <Grid item xs={6} id="credentialsBox">
                    <TextField id="username" id="usernameBox" label="Username" value={username} onChange={(e) => setUsername(e.value)} variant="outlined" />
                    <TextField id="password" id="passwordBox" label="Password" type="password" value={password} onChange={(e) => setPassword(e.value)} variant="outlined" />
                    <Grid container>
                        <Grid item xs={12}>
                            <Button id="btn_login" onClick={() => console.log('Authenticate function')} label="LogIn" variant="outlined"> Sign In</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container id="action_box">
                <Grid item xs={6}>
                    <p>Forgot your password?</p>
                    <Button id="btn_forgot" onClick={() => console.log('Clicked Forgot')} >Forgot Password</Button>
                </Grid>
                <Grid item xs={6}>
                    <p>Sign Up</p>
                    <Button id="btn_signUp" onClick={() => console.log('Navigate to signup page')} >Register Here</Button>
                </Grid>
                </Grid>
            </Grid>
            </Grid>
        </Fragment>
    );
}

export default Login;
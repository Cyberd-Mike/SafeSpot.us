import React, { Fragment, useState } from 'react';
import { Auth } from 'aws-amplify';
import { Paper, Grid, Container, Button } from '@material-ui/core';
// import Square from '../../img/square';
import { Login } from './Login';


export function Authenticator(){
    const [page, setPage] = useState('Login');

    return (   
        <Fragment>
        <Paper id="AuthPaper" elevation={5}>
            <h1>Authentication</h1>
            {/* if Coonditions */}
            <Login />
        </Paper>
        </Fragment> 
    );

}

export default Authenticator;
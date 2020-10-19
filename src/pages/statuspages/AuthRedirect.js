import React, {Fragment} from 'react';
import {CircularProgress} from '@material-ui/core';
export function AuthRedirect(){
    return(
        <Fragment>
            <h1>Redirecting</h1>
            <CircularProgress />
        </Fragment>
    );
}

export default AuthRedirect;
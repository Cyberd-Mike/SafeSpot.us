import React, {Fragment} from 'react';
import {CircularProgress} from '@material-ui/core';
export function Loading(){
    return(
        <Fragment>
            <h1>Loading...</h1>
            <CircularProgress />
        </Fragment>
    );
}

export default Loading;
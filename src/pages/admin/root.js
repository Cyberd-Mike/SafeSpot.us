import React from 'react';
import {withAuthenticator} from '@aws-amplify/ui-react';
export function Root(){
    return(
        <h1>Admin root</h1>
    );
}

export default withAuthenticator(Root);
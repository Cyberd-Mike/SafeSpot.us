import React, {Fragment, useState, useEffect} from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../../graphql/queries';
import * as mutations from '../../../graphql/mutations';

export default function(){

    return(
        <Fragment>
            <h1>Manage Settings</h1>
            {/* Tabbed interface with Hours, billing, photos */}
        </Fragment>
    );
}
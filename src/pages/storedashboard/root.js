import React, { Fragment, useState, useEffect } from 'react';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { navigate } from '@reach/router';
// import SetupRoot from './setup/_setupRoot';

export function Root(props){
    useEffect(() => {
        console.log('Running effect in store dashboard root')
        let url;
        async function navDashHome(){
            const user = await Auth.currentAuthenticatedUser();
            const attributes = await Auth.userAttributes(user);
            const data = attributes.filter(function(attrib) {
                return attrib.Name === "custom:spotid"
            });
            console.log('Data is ', data)
            if (data.length > 0){
                const purl = JSON.parse(data);
                url = purl.Value;
                console.log('URL is', url)
                await navigate(`/dashboard/${url}`)
            }else{
                await navigate('/dashboard/setup');
            }
        }

        navDashHome();
    },[])

    
    return(
        <Fragment>
            {props.children}
        </Fragment>
    );
}

export default Root;
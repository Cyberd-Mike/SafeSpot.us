import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';

export default function(props){
    const businessID = props.businessID;
    const [ data, setData ] = useState();

    useEffect(() => {
        async function getData(){
            const query = await API.graphql(graphqlOperation(queries.getBusiness, {id: businessID}))
            if (query !== null && query !== undefined){
                return query;
            } else {
                return 'Error: No business'
            }
        }
                    
        getData()
        .then((result) => setData(result))
        .catch((err) => console.log(err))

    }, [])

    console.log('Data from the API is ', data);

    return(
        <h1>Individual store page</h1>
    );
}
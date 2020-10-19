import React, { useState, useEffect, Fragment } from 'react';
import {TextField, Grid, Button} from '@material-ui/core';
import { Cache, API, graphqlOperation } from 'aws-amplify';
import update from 'immutability-helper';
import * as queries from '../../../graphql/queries';
import { useSnackbar } from 'notistack';

export function Customize(props){
    const [customizations, setCustomizations] = useState({
        about: '',
        instructions: '',
        url: ''
    });
    const [ enableNext, setEnableNext ] = useState(false);
    
    useEffect(() => {
        const cachedData = Cache.getItem('customizations')
        if ((cachedData) && (cachedData !== customizations)){
            setCustomizations(cachedData);
        }
    }, []);

    const nextPage = async () => {
        Cache.setItem('customizations', customizations)

        const verification = await API.graphql(graphqlOperation(queries.businessbyUrl, {customURL: customizations.url}));
        console.log('Verification returned', verification)
        console.log('Verification data', verification.data.BusinessbyURL.items.length)
        if (verification.data.BusinessbyURL.items.length === 0){
            props.next();
        } else {
            props.enqueueSnackbar('Custom URL already taken', {
                variant: 'error',
            });
        }
    }

    const prevPage = async () => {
        Cache.setItem('customizations', customizations)
        props.prev();
    }

    const handleChange = (e) => {
        const {target: {name, value}} = e;
        let newState = update(customizations, {
            [name]: { $set: value }
        });
        setCustomizations(newState);
    }

    return(
        <Fragment>
            <Grid container>
                <Grid item xs={12}>
                    <h1 className="setup-FormHeader">Page Customizations</h1>
                    <h3 className="setup-FormSubheader">Add instructions and some branding.</h3>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <h3 className="setup-FormCategory">Store Customizations</h3>
                </Grid>
                <Grid container>
                <Grid item xs={12}>
                    <TextField label="Custom URL" variant="outlined" name="url" value={customizations.url} onChange={(e) => handleChange(e) } />
                </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                        <TextField label="About Your Business" variant="outlined" name="about" value={customizations.about} onChange={(e) => handleChange(e)} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Instructions" variant="outlined" name="instructions" value={customizations.instructions} onChange={(e) => handleChange(e)} />
                    </Grid>
                </Grid>     
                <Grid item xs={12}>
                    <Button className="Btn-Previous" variant="contained" color="primary" onClick={() => prevPage()}>Previous</Button> <Button className="Btn-Next" variant="contained" color="primary" onClick={() => nextPage()}>Continue</Button>
                </Grid>
             </Grid>
        </Fragment>
    );
}

export default Customize;
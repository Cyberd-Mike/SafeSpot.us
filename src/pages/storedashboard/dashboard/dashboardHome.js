import React, {useState, Fragment} from 'react';
import { navigate, Redirect } from '@reach/router';
import { Auth } from 'aws-amplify';
import Loadable from 'react-loadable';
import Loading from '../../../pages/statuspages/loading';
import { Tabs, Tab, Box, Grid, Paper, CircularProgress } from '@material-ui/core';

import TabPanel from '../../../components/tabpanel';


export default function(props){
    const [userData, setUserData] = useState();  
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    function a11yProps(index){
        return {
            id: `tab-${index}`,
            'aria-controls': `tabpanel-${index}`
        };
    }

    const ViewQueue = Loadable({
        loader: () => import('./viewQueue'),
        loading: Loading
    });

    const ManageSettings = Loadable({
        loader: () => import('./manageSettings'),
        loading: Loading
    });

    const ManualEntry = Loadable({
        loader: () => import('./manualEntry'),
        loading: Loading
    })

    return(
        <Grid container>
            <Grid item xs={12}>
                <h1>Welcome</h1>
            </Grid>
            <Grid item xs={12}>
                <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="Business menu navigation">
                    <Tab label="View Queue" {...a11yProps(0)}/>
                    <Tab label="Manual Customer Entry" {...a11yProps(1)}/>
                    <Tab label="Settings" {...a11yProps(2)}/>
                </Tabs>
                <TabPanel value={value} index={0}>
                    <ViewQueue />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ManualEntry />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <ManageSettings />
                </TabPanel>
            </Grid>
        </Grid>
    );
}
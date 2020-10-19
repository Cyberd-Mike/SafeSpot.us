import React, { useState, useEffect, Fragment } from 'react';
import { Cache } from 'aws-amplify';
import update from 'immutability-helper';
import {
    Button, 
    TextField, 
    Paper,
    Grid
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { 
    KeyboardTimePicker,
    MuiPickersUtilsProvider
} from '@material-ui/pickers';

export function StoreInfo(props){
    const [StoreInfo, setStoreInfo] = useState({
        name: '',
        guestLimit: ''
    });
    
    const [StoreHours, setStoreHours] = useState({
        MondayOpen: null,
        MondayClose: null,
        TuesdayOpen: null,
        TuesdayClose: null,
        WednesdayOpen: null,
        WednesdayClose: null,
        ThursdayOpen: null,
        ThursdayClose: null,
        FridayOpen: null,
        FridayClose: null,
        SaturdayOpen: null,
        SaturdayClose: null,
        SundayOpen: null,
        SundayClose: null
    });
    useEffect(() => {
        const cachedData = Cache.getItem('StoreInfo');
        if (cachedData) {
            setStoreInfo(cachedData)
        }
        const cacheHours = Cache.getItem('StoreHours');
        if(cacheHours){
            setStoreHours(cacheHours);
        }
    }, [])

    
    const handleChange = (e) => {
        const {target: {name, value}} = e;
        let newState = update(StoreInfo, {
            [name]: { $set: value }
        });
        setStoreInfo(newState);
    }

    const handleHours = (e, field) => {
        let newState = update(StoreHours, {
            [field]: {$set: e}
        });
        setStoreHours(newState);
    }

    const nextPage = () => {
        Cache.setItem('StoreInfo', StoreInfo);
        Cache.setItem('StoreHours', StoreHours);
        props.next();
    }

    return (
        <Fragment>
        <Grid container className="setup_headersRoot">
            <Grid item xs={12}>
                <h1 className="setup_FormHeader">Store Setup</h1>
                <h3 className="setup_FormSubheader">Lets start with the basics.</h3>
            </Grid>
            <Grid container className="setup_FormCategory">
                <h3 className="setup_FormCategory">Business Information</h3>
                <Grid item xs={12}>
                    <TextField label="Business Name" variant="outlined" name="name" value={StoreInfo.name} onChange={(e) => handleChange(e)} />
                </Grid>
                <Grid item xs={12}>
                        <TextField label="Guest Limit" variant="outlined" name="guestLimit" value={StoreInfo.guestLimit} type="number" onChange={(e) => handleChange(e)} />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <div className="setup_sectionHeader">
                        <h2 className="setup_FormSubheader">Business Hours</h2>
                        <p className="setup_Explaination">We will limit your store queue based on these hours. If you want to stop accepting customers in your queue 30 minutes before your normal closing time, please account for that here.</p>
                    </div>
            </Grid>
            <Grid container className="table_headers">
                <Grid item xs={4}><h3>Day of Week</h3></Grid><Grid item xs={4}><h3>Time Open</h3></Grid><Grid item xs={4}><h3>Close</h3></Grid>
                <Grid item xs={12}><hr /></Grid>
            </Grid>
            <Grid container className="table_hours">
                    <Grid item xs={4}>
                        <p className="setup-FormLabel">Monday</p>
                    </Grid>
                    <Grid item xs={4}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardTimePicker clearable placeholder="__:__ _M" mask="__:__ _M" inputVariant="outlined" value={StoreHours.MondayOpen} name="MondayOpen" onChange={(e) => handleHours(e, 'MondayOpen')} />
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={4}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardTimePicker clearable placeholder="__:__ _M" mask="__:__ _M" inputVariant="outlined" value={StoreHours.MondayClose} name="MondayClose" onChange={(e) => handleHours(e, 'MondayClose')} />
                        </MuiPickersUtilsProvider>
                    </Grid>
            </Grid>
            <Grid container className="table_hours">
                    <Grid item xs={4}>
                        <p className="setup-FormLabel">Tuesday</p>
                    </Grid>
                    <Grid item xs={4}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardTimePicker clearable placeholder="__:__ _M" mask="__:__ _M" inputVariant="outlined" value={StoreHours.TuesdayOpen} name="TuesdayOpen" onChange={(e) => handleHours(e, 'TuesdayOpen')} />
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={4}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardTimePicker clearable placeholder="__:__ _M" mask="__:__ _M" inputVariant="outlined" value={StoreHours.TuesdayClose} name="TuesdayClose" onChange={(e) => handleHours(e, 'TuesdayClose')} />
                        </MuiPickersUtilsProvider>
                    </Grid>
                </Grid>
                <Grid container className="table_hours">
                    <Grid item xs={4}>
                        <p className="setup-FormLabel">Wednesday</p>
                    </Grid>
                    <Grid item xs={4}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardTimePicker clearable placeholder="__:__ _M" mask="__:__ _M" inputVariant="outlined" value={StoreHours.WednesdayOpen} name="WednesdayOpen" onChange={(e) => handleHours(e, 'WednesdayOpen')} />
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={4}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardTimePicker clearable placeholder="__:__ _M" mask="__:__ _M" inputVariant="outlined" value={StoreHours.WednesdayClose} name="WednesdayClose" onChange={(e) => handleHours(e, 'WednesdayClose')} />
                        </MuiPickersUtilsProvider>
                    </Grid>
                </Grid>
                <Grid container className="table_hours">
                    <Grid item xs={4}>
                        <p className="setup-FormLabel">Thursday</p>
                    </Grid>
                    <Grid item xs={4}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardTimePicker clearable placeholder="__:__ _M" mask="__:__ _M" inputVariant="outlined" value={StoreHours.ThursdayOpen} name="ThursdayOpen" onChange={(e) => handleHours(e, 'ThursdayOpen')} />
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={4}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardTimePicker clearable placeholder="__:__ _M" mask="__:__ _M" inputVariant="outlined" value={StoreHours.ThursdayClose} name="ThursdayClose" onChange={(e) => handleHours(e, 'ThursdayClose')} />
                        </MuiPickersUtilsProvider>
                    </Grid>
                </Grid>
                <Grid container className="table_hours">
                    <Grid item xs={4}>
                        <p className="setup-FormLabel">Friday</p>
                    </Grid>
                    <Grid item xs={4}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardTimePicker clearable placeholder="__:__ _M" mask="__:__ _M" inputVariant="outlined" value={StoreHours.FridayOpen} name="FridayOpen" onChange={(e) => handleHours(e, 'FridayOpen')} />
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={4}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardTimePicker clearable placeholder="__:__ _M" mask="__:__ _M" inputVariant="outlined" value={StoreHours.FridayClose} name="FridayClose" onChange={(e) => handleHours(e, 'FridayClose')} />
                        </MuiPickersUtilsProvider>
                    </Grid>
                </Grid>
                <Grid container className="table_hours">
                    <Grid item xs={4}>
                        <p className="setup-FormLabel">Saturday</p>
                    </Grid>
                    <Grid item xs={4}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardTimePicker clearable placeholder="__:__ _M" mask="__:__ _M" inputVariant="outlined" value={StoreHours.SaturdayOpen} name="SaturdayOpen" onChange={(e) => handleHours(e, 'SaturdayOpen')} />
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={4}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardTimePicker clearable placeholder="__:__ _M" mask="__:__ _M" inputVariant="outlined" value={StoreHours.SaturdayClose} name="SaturdayClose" onChange={(e) => handleHours(e, 'SaturdayClose')} />
                        </MuiPickersUtilsProvider>
                    </Grid>
                </Grid>
                <Grid container className="table_hours">
                    <Grid item xs={4}>
                        <p className="setup-FormLabel">Sunday</p>
                    </Grid>
                    <Grid item xs={4}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardTimePicker clearable placeholder="__:__ _M" mask="__:__ _M" inputVariant="outlined" value={StoreHours.SundayOpen} name="SundayOpen" onChange={(e) => handleHours(e, 'SundayOpen')} />
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={4}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardTimePicker clearable placeholder="__:__ _M" mask="__:__ _M" inputVariant="outlined" value={StoreHours.SundayClose} name="SundayClose" onChange={(e) => handleHours(e, 'SundayClose')} />
                        </MuiPickersUtilsProvider>
                    </Grid>
                </Grid>
                </Grid>
                <Grid container className="setup_navButtons">
                    <Grid item xs={12}>
                        <Button label="Next Page" className="Btn_Next" variant="contained" color="primary" onClick={() => nextPage()}>Next</Button>
                    </Grid>
                </Grid>
            </Grid>
    </Fragment>
    );
}

export default StoreInfo;
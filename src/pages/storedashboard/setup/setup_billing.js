import React, { useState, useEffect } from 'react';
import { Grid, Button, TextField } from '@material-ui/core';
import { Cache } from 'aws-amplify';
import { Elements } from '@stripe/react-stripe-js';
import CardForm from '../../../components/cardform';
import {loadStripe} from '@stripe/stripe-js';
import update from 'immutability-helper';

const stripePromise = loadStripe('pk_test_1VkwE7p34JygHA4guSexnFom00gGyWXHyO');
// CARD INFO HERE

export function Billing(props){
    const [cardInfo, setCardInfo] = useState();
    const [billing, setBilling] = useState({
        cardholderName: '',
        addressOne: '',
        addressTwo: '',
        city: '',
        state: '',
        country: '',
        postalCode: '',
    });

    useEffect(() => {
        const cachedData = Cache.getItem('Billing');
        console.log('Cached data', cachedData)
        if ((cachedData) && (cachedData !== billing)){
            setBilling(cachedData);
        }
    }, [])


    const handleChange = (event) => {
        const {target: {name, value}} = event;
        let newState = update(billing, {
            [name]: {$set: value}
        });
        setBilling(newState)
    }

    const nextPage = () => {
        Cache.setItem('CardInfo', cardInfo);
        Cache.setItem('Billing', billing);

        props.next();
    }

    const prevPage = () => {
        Cache.setItem('CardInfo', cardInfo);
        Cache.setItem('Billing', billing);
        
        props.prev();
    }

    return(
        <Grid container>
            <Grid item xs={12}>
                <h3 className="setup-FormSubheader">Card Information</h3>
                <Elements stripe={stripePromise}>
                    <CardForm onChange={(e) => setCardInfo(e)} />
                </Elements>
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <h3 className="setup-FormSubheader">Billing Address</h3>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Cardholder Name" disabled={ cardInfo === undefined ? true : false } variant="outlined" name="cardholderName" value={billing.cardholderName} onChange={(e) => handleChange(e)} /> 
                </Grid>
                <Grid container>
                    <Grid item xs={6}>
                        <TextField label="Address" disabled={ cardInfo === undefined ? true : false } variant="outlined" name="addressOne" value={billing.addressOne} onChange={(e) => handleChange(e)} /> 
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label="Address (cont)" disabled={ cardInfo === undefined ? true : false } variant="outlined" name="addressTwo" value={billing.addressTwo} onChange={(e) => handleChange(e)} /> 
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={4}>
                        <TextField label="City" disabled={ cardInfo === undefined ? true : false } variant="outlined" name="city" value={billing.city} onChange={(e) => handleChange(e)} /> 
                    </Grid>
                    <Grid item xs={4}>
                        <TextField label="State" disabled={ cardInfo === undefined ? true : false } variant="outlined" name="state" value={billing.state} onChange={(e) => handleChange(e)} /> 
                    </Grid>
                    <Grid item xs={4}>
                        <TextField label="Postal Code"  disabled={ cardInfo === undefined ? true : false }  variant="outlined" name="postalCode" value={billing.postalCode} onChange={(e) => handleChange(e)} /> 
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Button className="Btn-Previous" variant="contained" color="primary" onClick={() => prevPage()}>Previous</Button> <Button className="Btn-Next"  variant="contained" color="primary" onClick={() => nextPage()}>Finish</Button>
            </Grid>
        </Grid>
    )
}

export default Billing;
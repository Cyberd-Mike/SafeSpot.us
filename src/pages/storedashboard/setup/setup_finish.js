import React, { useState, useEffect } from 'react';
import { API, Auth, Cache, graphqlOperation } from 'aws-amplify';
import { navigate } from '@reach/router';
import * as mutations from '../../../graphql/mutations';
import { LinearProgress } from '@material-ui/core';

export function Finish(){
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        async function finalize(){
            var scid;
            //Create stripe customer
            const stripeCustomerData = await createStripeCustomer();
            console.log('StripeCustomerResult is', stripeCustomerData);
            scid = stripeCustomerData.success.id;
            console.log('Internal SCID is ', scid);
            setProgress(20);
            if (stripeCustomerData.err === null && scid !== undefined){
                try{ 
                    var subscription = await createSubscription(scid);
                    setProgress(40);
                } catch (err){
                    console.log('An error occoured creating subscription', err);
                }
            }
            //Create manager in Dynamo DB
            try{
                var dbManager = await dbEnterManager(scid);
                setProgress(60);
            } catch (err){
                console.log('An error occoured adding the manager to the SafeSpot DB', err);
            }
    
            if (dbManager !== undefined && dbManager !== null){
                try{
                    const mgr = dbManager.data.createManager.id;
                    setProgress(80);
                    const dbStore = await dbEnterStore(mgr);
                    setProgress(100);
                } catch (err){
                    console.log('An error occoured adding the store to the safespot DB');
                }
            }


        }
        finalize()
        .then(() => console.log('Force Nav to store dashboard'))
        .catch((err) => console.log('Error was', err))
    }, []);

    async function createStripeCustomer(){
        const apiName = 'Stripe';
        const path = '/customer';
        var user = await Auth.currentAuthenticatedUser();
        var currentUser = await Auth.currentUserInfo();
        const { addressOne, addressTwo, city, state, cardholderName, postalCode } = await Cache.getItem('Billing');
        const init = {
            body: {
                name: cardholderName,
                email: currentUser.attributes.email,
                address: {
                    line1: addressOne,
                    line2: addressTwo,
                    city: city,
                    state: state,
                    postal_code: postalCode,
                    country: 'US',
                },
                metadata: {
                    "CustomerUsername": user.username,
                }
            }
        }
        const result = await API.post(apiName, path, init);
        return result;
    }

    async function createSubscription(scid){
        const { card } = await Cache.getItem('Card');
        const apiName = 'Transactions';
        const path = '/subscription/create';
        const init = {
            body: {
                customer: scid,
                cardInfo: card.id,
            }
        }
        const result = await API.post(apiName, path, init);
        return result;
    }
    
    async function dbEnterManager(scid){
        var user = await Auth.currentAuthenticatedUser();
        console.log('email is ' + user.attributes.email + " and phone number is " + user.attributes.phone_number)
        const values = {
            phoneNumber: user.attributes.phone_number, 
            emailAddress: user.attributes.email, 
            stripeID: scid, 
            cognitoID: user.username,
        }

        const manager = await API.graphql(graphqlOperation(mutations.createManager, { input: values } ));
        return manager;
    }

    async function generateQRCode(){
        const { url } = await Cache.getItem('customizations');
        console.log('Custom url is ', url)
        const apiName = 'QRCodeManagement';
        const path = '/create';
        const init = {
            body: {
                customURL: url
            }
        };

        return API.post(apiName, path, init);
    }

    async function dbEnterStore(manager){             
        if (manager === undefined){ return "Error: Manager not defined."}
        const { name, guestLimit } = await Cache.getItem('StoreInfo');
        var StoreHours = (Cache.getItem('StoreHours'));
        const { about, instructions, url } = await Cache.getItem('customizations');
        const qrCodeImage = await generateQRCode();
        console.log('QR Code Image key is', qrCodeImage);
        const values = {
            name: name, 
            about: about,
            customURL: url,
            instructions: instructions,
            hours: StoreHours, 
            guestLimit: guestLimit, 
            managerID: manager
        }
        const store = await API.graphql(graphqlOperation(mutations.createBusiness, { input: values }));
        return store;
    }
    
    return(
        <div>
            <h1>Finishing Setup</h1>
            <LinearProgress variant="determinate" value={progress} />
        </div>
    );

 }
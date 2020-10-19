import React, { useState, useEffect } from 'react';
import { Router } from '@reach/router';
import Loadable from 'react-loadable';
import Amplify from 'aws-amplify';
import Loading from '../pages/statuspages/loading';
import Home from '../pages/home';
import {Root as StoreDashboard} from '../pages/storedashboard/root';
// import {Root as AdminDashboard} from '../pages/admin/root';

import { SetupRoot as SetupStore } from '../pages/storedashboard/setup/_setupRoot';
import  DashboardHome from '../pages/storedashboard/dashboard/dashboardHome';
import BusinessPage from '../pages/viewBusiness/Business';

import PageNotFound from '../pages/statuspages/404';

import awsconfig from '../aws-exports';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';

import { DefaultLayout } from '../Layouts/default';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
Amplify.configure(awsconfig);



export function Routes(){
    const [ authState, setAuthState ] = useState();

      useEffect(() => {
          const getUserData = () => {
            return onAuthUIStateChange((nextAuthState) => {
                setAuthState(nextAuthState);
              });
          }
          getUserData();
      }, []);
    
    const PrivateRoute = ({ as: Component, ...rest }) => {
        if (authState === AuthState.SignedIn){
            return (
                <DefaultLayout>
                    <Component {...rest} />
                </DefaultLayout>
            );
        } else {
            return (
              <AmplifyAuthenticator />
            );
        }
    }
    const Route = ({ as: Component, ...rest }) => {
        return (
            <DefaultLayout>
                <Component {...rest } />
            </DefaultLayout> 
        );
    }

    return(
                <Router>
                    <Route as={ Home } path="/" />
                    <PrivateRoute as={ StoreDashboard } path="dashboard" >
                        <SetupStore path="setup" />
                        <DashboardHome path=":businessID" >
                            
                        </DashboardHome>
                    </PrivateRoute>
                    {/* <Route as={ BusinessPage } path="/:businessID" /> */}
                    <Route as={ PageNotFound } default />
                </Router>
    );
}

export default Routes;
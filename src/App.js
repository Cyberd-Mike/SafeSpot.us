import React from 'react';
import Amplify from 'aws-amplify';
import Routes from './Router/routes';
import "./Theme/defaults/default.scss";
import awsconfig from './aws-exports';
import { SnackbarProvider } from 'notistack';
Amplify.configure(awsconfig);

function App() {
return (
    <SnackbarProvider>
      <Routes />
    </SnackbarProvider>
  );
}

export default App;
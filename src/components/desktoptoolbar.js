import React from 'react';
import { Toolbar, Grid } from '@material-ui/core';
import { AuthButtons } from './button_auth';
// import { ReactComponent as LogoLg } from '../img/Logo-lg.svg';
import LogoLarge from '../img/LogoLarge';
import "../Theme/components/HeaderToolbar.scss";

export function DesktopToolbar(){

    return(
        <Toolbar className="Toolbar_Desktop">
            <Grid item xs={4} className="Container_Logo">
                <LogoLarge fill="#0060A5" stroke="none" /> 
            </Grid>
            <Grid item xs={8} className="Container-ActionButtons">
                <AuthButtons />
            </Grid>
        </Toolbar>
    );
}

export default DesktopToolbar;
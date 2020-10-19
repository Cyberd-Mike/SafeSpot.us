import React from 'react';
import {Grid, Container} from '@material-ui/core';
// import {isBrowser, isMobile} from 'react-device-detect';
import { DesktopToolbar } from '../components/desktoptoolbar';

export function DefaultLayout({ children }){
    return(
        <Container>
            <Grid item xs={12}>
                <DesktopToolbar />
            </Grid>
            <Grid item xs={12}>
                {children}
            </Grid>
            <Grid item xs={12}>
                <h3>Footer</h3>
            </Grid>
        </Container>
    );
}

export default DefaultLayout;
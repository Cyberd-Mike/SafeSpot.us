import React, {useState, Fragment} from 'react';
import {Grid} from '@material-ui/core';
import {Banner} from '../components/headerbanner';


export function Home(){
    const [headerImage, setHeaderImage] = useState('https://cyberdstockimages.s3-us-west-2.amazonaws.com/artem-gavrysh-F6-U5fGAOik-unsplash.jpg');

    return(
        <Fragment>
            <Banner image={headerImage}>
                <Grid container>
                    <div className={"Header-Bluebar"}>
                        <Grid item xs={12}>
                            <h1 className="Header-TitlePrimary">Reopen safely and responsibly.</h1>
                        </Grid>
                    </div>
                </Grid>
            </Banner>
            <Grid container>
                <Grid item xs={12}>
                    <h1>How it works</h1>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Home;
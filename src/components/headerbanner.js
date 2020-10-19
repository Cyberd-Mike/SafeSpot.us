import React from 'react';
import { Grid } from '@material-ui/core';
import "../Theme/components/ImageHeader.scss"

export function Banner(props){

    const style = {
        backgroundImage: `url(${props.image})`,
        height: "80vh",
        width: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
    }

    return(
        <Grid container>
            <div className="HeaderBGImage" style={style}>
                <Grid item xs={12}>
                    {props.children}
                </Grid>
            </div>
        </Grid> 
    );
}

export default Banner;
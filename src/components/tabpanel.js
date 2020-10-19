import React from 'react';
import { Box, Typography } from '@material-ui/core';

export default function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return(
        <div
            role="tabpanel"
            hidden={value !== index} 
            id={`tabpanel-${index}`}
            aria-labelledby={`tabpanel-${index}`}
            {...other}
        >
            {value === index && (
                <Typography>{children}</Typography>    
            )}
        </div>
    );
}
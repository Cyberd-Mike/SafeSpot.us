import React, { Fragment } from 'react';
// import {isBrowser, isMobile} from 'react-device-detect';
import svg from '../img/bluesquare.svg';
import '../Theme/components/Authentication.scss'
export default function({ children }){
    return(
        <Fragment>
            <div className="Background" style={{backgroundImage: `url(${svg})`}}></div>
                {children}
        </Fragment>
    )
}
import React from 'react';

export function Square(props){
    const { fill, stroke, name } = props;
    return (
        <React.Fragment>
            <svg className={name} position="absolute" z-index="-1" version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="1011.000000pt" height="1024.000000pt" viewBox="0 0 1011.000000 1024.000000"
            preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)"
            fill={fill} stroke={stroke} >
            <path d="M0 5120 l0 -5120 5055 0 5055 0 0 5120 0 5120 -5055 0 -5055 0 0
            -5120z"/>
            </g>
            </svg>
        </React.Fragment>
    );
}

export default Square;
import React, { useEffect, useState } from 'react';

export default function borderStyle(a) {
    if(a == 'box'){
        return{
            outline: '3px solid white',
            scale: '1.09',
            transition: 'all 0.3s ease-in-out'
        }
    }else if(a == 'video'){
        return{
            display: 'block',
            scale: '1.01',
            transition: 'all 0.3s ease-in-out'
        }
    }
}
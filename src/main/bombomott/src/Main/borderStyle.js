import React, { useEffect, useState } from 'react';

//박스 마우스 올리면 테두리 생기는 기능
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
import React, { useEffect, useState } from 'react';

//inputType 변경, input 아이콘 변경
export default function PasswordView(inputView) {
    const [inputIcon, setInputIcon] = useState('visibility_off'); //input창 아이콘
    const [inputType, setInputType] = useState('');

    useEffect(()=>{
        if(inputView){
            setInputIcon('visibility')
            setInputType('text')
        }else{
            setInputIcon('visibility_off')
            setInputType('password')
        }
    },[inputView])

    return{
        inputIcon,
        inputType
    }
}
import React, { useEffect, useState } from 'react';

//패스워드 안전단계 판별
export default function PasswordSafeLevel(inputValue) {
    const [safeLevel, setSafeLevel] = useState(0); // 패스워드 안전단계
    const [progressText, setProgressText] = useState('약함');
    const [progressColor, setProgressColor] = useState('red');

    useEffect(() => {
        let newSafeLevel = 0;

        if (inputValue.length > 13 && /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[@#$%]).*$/.test(inputValue)) {
            newSafeLevel = 6;
        } else if (inputValue.length > 10 && /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[@#$%]).*$/.test(inputValue)) {
            newSafeLevel = 5;
        } else if (inputValue.length > 10 && /^(?=.*[0-9])(?=.*[a-zA-Z]).*$/.test(inputValue)) {
            newSafeLevel = 4;
        } else if (inputValue.length >= 8) {
            newSafeLevel = 3;
        }else if (inputValue.length < 8 && inputValue.length >= 5) {
            newSafeLevel = 2;
        } else if (inputValue.length < 5 && inputValue.length > 0) {
            newSafeLevel = 1;
        } else if (inputValue.length == 0){
            newSafeLevel = 0;
        }
        setSafeLevel(newSafeLevel);
    }, [inputValue]);

    useEffect(()=>{
        if(safeLevel >= 4){
            setProgressColor('green')
            setProgressText('강함')
        }else if(safeLevel == 3){
            setProgressColor('yellow')
            setProgressText('중간')
        }else if(safeLevel < 3){
            setProgressColor('red')
            setProgressText('약함')
        }
    },[safeLevel])

    return{
        safeLevel,
        progressText,
        progressColor
    }
}
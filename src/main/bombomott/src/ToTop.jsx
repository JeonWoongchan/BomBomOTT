import React from 'react';
import useScroll from './useScroll';
import './footer.css'

export default function ToTop() {
    const scroll = useScroll();  

    const MoveToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <button className='toTop' onClick={MoveToTop} style={scroll >= 500 ? {display:'block'} : {display:'none'}}>⬆</button>
    );
}

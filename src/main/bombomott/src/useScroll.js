import { useState, useEffect } from 'react';

//스크롤 위치 가져오는 함수
function useScroll() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        setScroll(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scroll;
}

export default useScroll;
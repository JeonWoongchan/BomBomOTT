import React from 'react';
import InterestContent from './InterestContent';

import { useParams } from 'react-router-dom';

export default function InterestBox(props) {
    const {mediaType} = useParams()

    return (
        <div className="category-box">
            <div className="category-title">
                <h1>관심콘텐츠</h1>
            </div>
            <InterestContent/>
        </div>
    );
}


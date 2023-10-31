import React from 'react';
import CategorySelector from './CategorySelector'
import CategoryContent from './CategoryContent';

import { useParams } from 'react-router-dom';

export default function CategoryBox(props) {
    const {mediaType} = useParams()

    return (
        <div className="category-box">
            <div className="category-title">
                {mediaType == 'movie' ? <h1>영화</h1> : <h1>시리즈</h1>}
                <CategorySelector/>
            </div>
            <CategoryContent/>
        </div>
    );
}


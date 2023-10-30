import React from 'react';
import './css/secondContent.css'
import cardImageList from './cardImage.json'

import {useEffect, useState} from "react";
import {Navbar, Nav, Container, NavDropdown, Button} from 'react-bootstrap'

export default function SecondContent(props) {
    const [Select, setSelect] = useState(0);

    const cardStyle = (e) => {
        if(e == 0 && props.scroll > 1870){
            return{
                opacity :  (-1/600) * props.scroll + 247/60,
                transform : `scale(${(-1/6000) * props.scroll + (787/600)})`
            }
        }else if(e == 1 && props.scroll > 2470){
            return{
                opacity :  (-1/500) * props.scroll + 297/50,
                transform : `scale(${(-1/5000) * props.scroll + (747/500)})`
            }
        }else if(e == 9  && props.scroll > 2800){
            return{
                top :  -1 * props.scroll + 2900,
            } 
        }
    }
    
    return (
        <div className='imageCard-section'>
            <div className="section-title" style={cardStyle(9)}>
                <h1>봄봄+ 오리지널</h1>
                <p>다른 어디에서도 볼 수 없는 봄봄+ 오리지널을 만나보세요.</p>
            </div>
            <div className="card-background">
                {
                    cardImageList.images.map((a,i)=>{ 
                        return(
                            <div className={`card-box`} style={cardStyle(i)} key={i}>
                                <img src={cardImageList.images[i].url}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

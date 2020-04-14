import React, { useState, useEffect } from 'react';
import { ILegendProps } from '../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { setClasses } from '../redux/actions/setClassesAction';
import { RootState } from '../redux/store/store';
import Loading from './Loading';

const Legend = (props: ILegendProps) => {

    const classes = useSelector((state: RootState) => state.currentClassesState.classes);
    
    const [colors, setColors] = useState([
        'rgba(180,180,180,0.75)',
        'rgba(254,240,217,0.75)',
        'rgba(253,212,158,0.75)',
        'rgba(253,187,132,0.75)',
        'rgba(252,141,89,0.75)',
        'rgba(227,74,51,0.75)',
        'rgba(179,0,0,0.75)',
    ])

    function renderSvg() {
        return colors.map((child: any, index: number) => (
            <div key={index}>
                <svg width='30' height='30' >
                    <rect
                        width='25'
                        height='25'
                        fill={child}
                        strokeWidth='0.75'
                        stroke={child}
                        fillOpacity='0.75'
                        strokeOpacity='1'
                    />
                </svg>
                <span>{' > ' + classes[index]}
                </span>

            </div>
        ));
    }

    const { title } = props
    return (
        <>
            {
                
                    <div>
                        <p>{title}</p>
                        {renderSvg()}
                    </div>
            }


        </>
    )
}

export default Legend;

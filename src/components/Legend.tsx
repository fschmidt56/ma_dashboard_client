import React, { useState, useEffect } from 'react';
import { ILegendProps } from '../types/types';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';
import { greenColors } from '../utils/MapStyles';

const Legend = (props: ILegendProps) => {

    const classes = useSelector((state: RootState) => state.currentClassesState.classes);
    
    const [colors, setColors] = useState(greenColors)

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

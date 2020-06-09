import React from 'react';
import { IOverlayProps } from '../types/types';

const Overlay = (props: IOverlayProps) => {

    const {
        overlayContent
    } =  props

    return (
        <>
            <div className='overlay' >
               {overlayContent}
            </div>
        </>
    )
}

export default Overlay;
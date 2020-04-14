import React from 'react';
import { IOverlayProps } from '../types/types';
import Legend from './Legend';

const Overlay = (props: IOverlayProps) => {

    return (
        <>
            <div className='overlay' >
                <Legend
                    title='Legende'
                />
            </div>
        </>
    )
}

export default Overlay;
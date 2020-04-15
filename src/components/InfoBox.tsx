import React, { useState } from 'react';
import { IInfoBoxProps } from '../types/types';
import Overlay from './Overlay';

const InfoBox = (props: IInfoBoxProps) => {

    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    }

    const {
        faIcon,
        overlayContent
    } = props


    return (
        <>
            < button
                className='infobox'
                onClick={toggleOverlay}
            >
                <i className={faIcon}></i>

            </button>
            {
                visible ?
                    <Overlay
                        overlayContent={
                            overlayContent
                        }
                    />
                    :
                    null
            }
        </>
    )
}

export default InfoBox;


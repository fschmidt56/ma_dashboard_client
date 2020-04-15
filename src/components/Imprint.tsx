import React from 'react';
import { IImprintProps } from '../types/types';
import Image from './Image';
import logo from '../img/rub_logo.png';

const Imprint = (props: IImprintProps) => {

    return (
        <>
            <div>
                <h5>Ein Projekt der: </h5>
                <Image
                    altText='Ruhr-Universität Bochum'
                    img={logo}
                    link='https://www.geographie.ruhr-uni-bochum.de/forschung/geomatik/home-news/'
                />
                <b>Geographisches Institut | AG Geomatik</b><br></br>
                <b>Kontakt</b><br></br>
                <a href='mailto:fabian.schmidt-c8t@rub.de'>Mail</a>
            </div>
        </>
    )
}

export default Imprint;


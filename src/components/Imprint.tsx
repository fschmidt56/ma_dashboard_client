import React from 'react';
import { IImprintProps } from '../types/types';
import Image from './Image';
import logo from '../img/rub_logo.png';
import cc from '../img/cc.png';

const Imprint = (props: IImprintProps) => {

    return (
        <>
            <div>
                <p>Ein Projekt der: </p>
                <Image
                    altText='Ruhr-Universität Bochum'
                    img={logo}
                    link='https://www.geographie.ruhr-uni-bochum.de/forschung/geomatik/home-news/'
                />
                <a href='http://www.geographie.ruhr-uni-bochum.de/news/'>Geographisches Institut | AG Geomatik</a><br></br>
                <b>Kontakt:</b><br></br>
                <a href='mailto:fabian.schmidt-c8t@rub.de'>Mail</a>
                <hr></hr>
                <Image
                    altText='Namensnennung - Nicht kommerziell - Keine Bearbeitungen 4.0 International (CC BY-NC-ND 4.0)'
                    img={cc}
                    link='https://creativecommons.org/licenses/by-nc-nd/4.0/deed.de'
                />
            </div>
        </>
    )
}

export default Imprint;


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
                
            </div>
        </>
    )
}

export default Imprint;


import React from 'react';
import { IImprintProps } from '../types/types';
import Image from './Image';
import logo from '../img/rub_logo.png';

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
                <p className='imprinttext'>
                        Die Ruhr-Universität ist eine Körperschaft des Öffentlichen Rechts. Sie wird durch ihren Rektor Herrn Prof. Dr. Axel Schölmerich gesetzlich vertreten.
                        Zuständige Aufsichtsbehörde ist:
                        Ministerium für Innovation, Wissenschaft und Forschung des Landes Nordrhein-Westfalen
                        Völklinger Straße 49
                        40221 Düsseldorf<br></br>
                        Soweit nicht anders gekennzeichnet ist das Geographische Institut der Ruhr-Universität Bochum ist Urheber aller Texte, des Layouts und der Fotos auf allen Internetseiten, die auf dieses Impressum verweisen. Die Inhalte sind urheberrechtlich geschützt. Für alle anderen Inhalte auf www-Servern der Ruhr-Universität Bochum sind die jeweiligen Bereiche redaktionell verantwortlich.
                        Das Geographische Institut der Ruhr-Universität Bochum übernimmt keine Gewähr für die Richtigkeit und Vollständigkeit der auf seinen Internetseiten befindlichen Informationen. Das gleiche gilt für die Inhalte verlinkter Seiten.
                        Anfragen per Mail an: <a className='imprinttext' href='mailto:fabian.schmidt-c8t@rub.de'>Fabian Schmidt</a><br></br>
                        Sämtliche Daten dienen ausschließlich dem wissenschaftlichen Erkenntnisinteresse dieser Arbeit und dürfen nicht weiter verwendet werden. Im Anschluss an das Projekt werden alle Daten gelöscht.
                    </p>                    
            </div>
        </>
    )
}

export default Imprint;


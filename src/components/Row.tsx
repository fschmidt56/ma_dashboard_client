import React from 'react';
import { IRowProps } from '../types/types';
import Column from './Column';
import Basemap from './Map';
import { proxyUrls } from '../utils/MapConfig';
import Table from './Table';
import TwitterFeed from './TwitterFeed';
import TabContent from './TabContent';
import TabsComp from './TabsComp';
import Infobox from './InfoBox'

const Row = (props: IRowProps) => {

    const {
        color,
        height,
        padding
    } = props

    return (
        <>
            <div className="row">
                <Column style={{
                    backgroundColor: color[0],
                    height: height,
                    padding: padding,
                    position: 'relative',
                }}
                    content={
                        <>
                            <Basemap
                                id='map'
                                mapContainer='map'
                                proxyUrl={proxyUrls[1]}
                            />
                            <Infobox faIcon='fa fa-info' />
                        </>
                    }
                />
                <Column style={{
                    backgroundColor: color[1],
                    height: height,
                    padding: padding,
                }}
                    content={
                        <>
                            <TabsComp>
                                <TabContent label='Hoch +'>
                                    <Table
                                        key='hoch'
                                        title='Stadtteile mit hoher Anzahl betroffener Gebäude'
                                        urlToFetch={proxyUrls[6]}
                                        result={[]}
                                    />
                                </TabContent>
                                <TabContent label={`Gering -`}>
                                    <Table
                                        key='gering'
                                        title='Stadtteile mit geringer Anzahl betroffener Gebäude'
                                        urlToFetch={proxyUrls[7]}
                                        result={[]}
                                    />
                                </TabContent>
                            </TabsComp>
                        </>
                    }
                />
                <Column style={{
                    backgroundColor: color[2],
                    height: height,
                    padding: padding,
                }}
                    content={
                        <TwitterFeed
                            profileUrl='https://www.twitter.com/rki_de'
                        />
                    }
                />
            </div>
        </>
    )
}

export default Row;
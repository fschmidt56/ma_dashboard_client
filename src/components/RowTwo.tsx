import React, { useEffect } from 'react';
import { IRowProps } from '../types/types';
import Column from './Column';
import DistrictInfo from './DistrictInfo';
import { proxyUrls } from '../utils/MapConfig';
import Chart from './Chart';
import TabsComp from './TabsComp';
import TabContent from './TabContent';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';
import Infobox from './InfoBox';

const RowTwo = (props: IRowProps) => {
    const district = useSelector((state: RootState) => state.currentDistrictState.district);

    let {
        color,
        height,
        padding,
    } = props

    useEffect(() => {

    },[district])

    return (
        <>
            <div className="row">
                <Column style={{
                    backgroundColor: color[0],
                    height: height,
                    padding: padding,
                }}
                    content={
                        <DistrictInfo
                            title='Wähle einen Stadtteil aus.'
                            defaultText='Kein Stadtteil gewählt'
                            fetchUrl={proxyUrls[3]}
                        />
                    }
                />
                <Column style={{
                    backgroundColor: color[1],
                    height: height,
                    padding: padding,
                }}
                            
                    content={
                        <>
                        <Infobox faIcon='fa fa-cogs' />
                        'Extending Volunteered Geographic Information (VGI) with Geospatial Software as a Service: Participatory Asset Mapping Infrastructures for Urban Health, geoserver credetials, postgres user, Diagramm Legende Karte, selected Features dynamischer,  sql injection, loading while fetching, Tabs diagramm switch gesamt stadtteil' 
                        </>
                        }
               
                />
                <Column style={{
                    backgroundColor: color[2],
                    height: height,
                    padding: padding,
                }}
                    content={
                        <>
                            <p>Anteil besuchter | unbesuchter Gebäude (%)</p>
                            <TabsComp>
                                <TabContent label='Gesamtes Stadtgebiet'>
                                    <Chart
                                        id='0'
                                        key='stadtgebiet'
                                        chartHeading='Köln'
                                        colors={['rgba(179,0,0,0.75)', 'rgba(40,150,0,0.5)']}
                                        hoverColors={['rgba(179,0,0,1)', 'rgba(40,150,0,1)']}
                                        urlToFetch={proxyUrls[5]}
                                    />
                                </TabContent>
                                <TabContent label='Gewählter Stadtteil'>
                                    <Chart
                                        id='1'
                                        key='stadtteil'
                                        chartHeading={district}
                                        colors={['rgba(234,160,91,0.75)', 'rgba(91,171,234,0.5)']}
                                        hoverColors={['rgba(234,160,91,1)', 'rgba(91,171,234,1)']}
                                        //@ts-ignore
                                        urlToFetch={`${proxyUrls[8]+district}`}
                                    />
                                </TabContent>
                            </TabsComp>


                        </>
                    }
                />
            </div>
        </>
    )
}

export default RowTwo;
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
import UserInfo from './UserInfo';
import Imprint from './Imprint';
import { blueColors, greenColors } from '../utils/MapStyles';
import { AppLayout } from '../utils/Config';

const RowTwo = (props: IRowProps) => {
    const district = useSelector((state: RootState) => state.currentDistrictState.district);

    let {
        color,
        height,
        padding,
    } = props

    useEffect(() => {

    }, [district])

    return (
        <>
            <div className="row">
                <Column style={{
                    backgroundColor: color[0],
                    height: height,
                    padding: padding,
                    borderBottom: AppLayout.border,
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
                    backgroundColor: color[2],
                    height: height,
                    padding: padding,
                    borderBottom: AppLayout.border,
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
                                        colors={[greenColors[5], blueColors[5]]}
                                        hoverColors={[greenColors[6], blueColors[6]]}
                                        urlToFetch={proxyUrls[5]}
                                    />
                                </TabContent>
                                <TabContent label='Gewählter Stadtteil'>
                                    <Chart
                                        id='1'
                                        key='stadtteil'
                                        chartHeading={district}
                                        colors={[greenColors[5], blueColors[5]]}
                                        hoverColors={[greenColors[6], blueColors[6]]}
                                        //@ts-ignore
                                        urlToFetch={`${proxyUrls[8] + district}`}
                                    />
                                </TabContent>
                            </TabsComp>
                        </>
                    }
                />
                <Column style={{
                    backgroundColor: color[1],
                    height: height,
                    padding: padding,
                    borderBottom: AppLayout.border,
                }}

                    content={
                        <>
                            <Infobox
                                faIcon='fa fa-info'
                                overlayContent={
                                    <Imprint />
                                }
                            />
                            {/* 'Extending Volunteered Geographic Information (VGI) with Geospatial Software as a Service: Participatory Asset Mapping Infrastructures for Urban Health, postgres user ' */}
                            <UserInfo
                                heading='Projektinfo'
                            />
                        </>

                    }

                />
            </div>
        </>
    )
}

export default RowTwo;
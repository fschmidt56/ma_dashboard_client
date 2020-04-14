
import React, { useEffect } from 'react';
import 'ol/ol.css';
import { IMapProps } from '../types/types';
import { MapUtils } from '../utils/MapUtils';
import { useDispatch, useSelector } from 'react-redux';
import { setMap } from '../redux/actions/setMapAction';
import { setClasses } from '../redux/actions/setClassesAction';
import { setFetch } from '../redux/actions/setFetchingAction';
import { RootState } from '../redux/store/store';
import Loading from './Loading';
import { FeatureLike } from 'ol/Feature';
import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import { fillOpacity } from '../utils/MapStyles';


const Basemap = (props: IMapProps) => {

    const map = useSelector((state: RootState) => state.currentMapState.map)
    const fetching = useSelector((state: RootState) => state.currentFetchState.fetching)
    const classes = useSelector((state: RootState) => state.currentClassesState.classes);
    const dispatch = useDispatch();

    const { id, mapContainer, proxyUrl } = props


    function defaultStyle(feature: FeatureLike): Style {
        const featureCount = getFillColor(feature.get('count'));
        let style: Style = new Style({
            fill: new Fill({
                color: featureCount,
            }),
            stroke: new Stroke({
                color: featureCount,
            })
        });
        return style;
    }

    function getFillColor(d: number) {
        return d > classes[6] ? `rgba(179,0,0,${fillOpacity})` :
            d > classes[5] ? `rgba(227,74,51,${fillOpacity})` :
                d > classes[4] ? `rgba(252,141,89,${fillOpacity})` :
                    d > classes[3] ? `rgba(253,187,132,${fillOpacity})` :
                        d > classes[2] ? `rgba(253,212,158,${fillOpacity})` :
                            d > classes[1] ? `rgba(254,240,217,${fillOpacity})` :
                                d > classes[0] ? `rgba(180,180,180,${fillOpacity})` :
                                    'rgba(255,255,255,1)'
    }

    const initialize = async () => {
        fetch('http://192.168.2.185:8000/range')
            .then(data => data.json())
            .then(arr => {
                dispatch(setClasses(arr))
            })
            .then(() => {
                //@ts-ignore
                if (!fetching) { dispatch(setFetch(true)) }
                else {
                    const basemap = MapUtils.createMap(mapContainer)
                    //@ts-ignore
                    dispatch(setMap(basemap))
                    MapUtils.createPgLayer(proxyUrl, basemap, defaultStyle)
                }
            })
    }

    useEffect(() => {
       initialize()
    }, [fetching]);

    return (
        <> {
            !fetching ?
                <Loading />
                :
                <div id={id} className='map'>
                </div>
        }
        </>
    )
}

export default Basemap;
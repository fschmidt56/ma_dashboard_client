
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
import { getFillColor, blueColors, greenColors, selectedStyle, updateStyle } from '../utils/MapStyles';
import { proxyUrls } from '../utils/MapConfig';

const Basemap = (props: IMapProps) => {

    const map = useSelector((state: RootState) => state.currentMapState.map)
    const fetching = useSelector((state: RootState) => state.currentFetchState.fetching);
    const classes = useSelector((state: RootState) => state.currentClassesState.classes);
    const district = useSelector((state: RootState) => state.currentDistrictState.district);
    const dispatch = useDispatch();

    const { id, mapContainer, proxyUrl } = props

    function defaultStyle(feature: FeatureLike): Style {
        const featureCount = getFillColor(feature.get('counter'), classes, greenColors);
        const featureStt = feature.get('stt_name');
        let style: Style = new Style({
            fill: new Fill({
                color: district === featureStt ? selectedStyle[0] : featureCount,
            }),
            stroke: new Stroke({
                width: district === featureStt ? selectedStyle[1] : 1,
                color: district === featureStt ? selectedStyle[0] : featureCount,
            }),
        });
        return style;
    }

    const initializeMap = () => {
        fetch(proxyUrls[2])
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
    const initialize = async () => {
        if (map === null) {
           initializeMap()
        }
        else {
            updateStyle(map, defaultStyle)
        }
    }

    useEffect(() => {
        initialize();
    }, [fetching, district]);

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

import { Map, Feature } from 'ol';
import TileLayer from 'ol/layer/Tile';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import { bbox as bboxStrategy } from 'ol/loadingstrategy';
import VectorLayer from 'ol/layer/Vector';
import XYZSource from 'ol/source/XYZ';
import { baseLayerUrl, view } from './MapConfig';
import Style, { StyleFunction } from "ol/style/Style";


export class MapUtils {
    static createBaseLayer() {
        const xyzURL: string = baseLayerUrl;
        const baseSource: XYZSource = new XYZSource({
            url: xyzURL
        });
        const baseLayer: TileLayer = new TileLayer({
            source: baseSource
        });

        return baseLayer;
    }

    static createMap(target: string) {
        const baseLayer: TileLayer = this.createBaseLayer();
        const map: Map = new Map({
            target: target,
            layers: [baseLayer],
            view: view
        });
        return map;
    }

    //creates a vector source fom postgres table
    static createPgSource(features: Feature[]) {
        const source: VectorSource = new VectorSource({
            format: new GeoJSON(),
            features: features,
            strategy: bboxStrategy,
        });

        return source;
    }
    //creates a vector layer based on a pgVectorSource
    static createPgVector(source: VectorSource, style: StyleFunction) {
        const vectorLayer: VectorLayer = new VectorLayer({
            source: source,
            extent: source.getExtent(),
            style: style
        });
        return vectorLayer;
    }
    //fetches geojson from pg
    static async getGeojson(url: string) {
        const response = await fetch(url, {
            method: 'GET',
        });
        return await response.json();
    }

    static async createPgLayer(url: string, map: Map | null, style: StyleFunction) {
        this.getGeojson(url)
            .then(data => data)
            .then(featureCollection => featureCollection.jsonb_build_object)
            .then(features => { return new GeoJSON().readFeatures(features) })
            .then(geojson => { return this.createPgSource(geojson) })
            .then(source => { return this.createPgVector(source, style) })
            .then(layer => map!.addLayer(layer))
    }
}
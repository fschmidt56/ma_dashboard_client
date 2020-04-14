import View from "ol/View";

const baseLayerArr: string[] = [
    'https://{1-4}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    'https://{1-4}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    'https://{1-4}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
    'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
];

export const baseLayerUrl: string = baseLayerArr[0];
export const mapCenter: number[] = [774590.7496,6610917.3520];
export const mapZoom: number = 10;
export const maxZoom: number = 19;
export const minZoom: number = 10;
export const rotationStatus: boolean = false;
export const view = new View({
    center: mapCenter,
    zoom: mapZoom,
    maxZoom: maxZoom,
    minZoom: minZoom,
    enableRotation: rotationStatus,
});

export const proxyUrls: string[] = [
    'http://192.168.2.185:8000/boundary',
    'http://192.168.2.185:8000/corona',
    'http://192.168.2.185:8000/range',
    'http://192.168.2.185:8000/districts',
    'http://192.168.2.185:8000/districtInfo?stt_name=',
    'http://192.168.2.185:8000/chart',
    'http://192.168.2.185:8000/maxAffected',
    'http://192.168.2.185:8000/minAffected',
    'http://192.168.2.185:8000/districtChart?stt_name=',
]



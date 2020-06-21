import View from "ol/View";

const baseLayerArr: string[] = [
    'https://{1-4}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    'https://{1-4}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    'https://{1-4}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
    'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
];

export const baseLayerUrl: string = baseLayerArr[1];
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

export const serverName: string[] = ['http://ip:port', 'http://corona.geomatik.ruhr-uni-bochum.de/api'];
export const proxyUrls: string[] = [
    `${serverName[1]}/boundary`,
    `${serverName[1]}/corona`,
    `${serverName[1]}/range`,
    `${serverName[1]}/districts`,
    `${serverName[1]}/districtInfo?stt_name=`,
    `${serverName[1]}/chart`,
    `${serverName[1]}/maxAffected`,
    `${serverName[1]}/minAffected`,
    `${serverName[1]}/districtChart?stt_name=`,
    `${serverName[1]}/userInfo`,
]



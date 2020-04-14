import Map from 'ol/Map';

export interface IButtonProps {
    text: string,
    clickButton?: () => void,
    response?: string,
    faIcon?: string,
}

export interface IChartProps {
    id: string | number | undefined,
    colors: string[],
    hoverColors: string[],
    urlToFetch: string,
    chartHeading?: string,
}

export interface IColumnProps {
    style: Object,
    content: string | JSX.Element | Element,
}

export interface IDistrictInfoProps {
    title: string,
    fetchUrl: string,
    defaultText: string,
}

export interface IInfoBoxProps {
    faIcon: string,
    onClick?: () => void,
}

export interface ILegendProps {
    title: string,
}

export interface ILoadingProps {

}

export interface IMapProps {
    id: string,
    mapContainer: string,
    proxyUrl: string,
}

export interface IMapState {
    map: null | Map
}

export interface IOverlayProps {

}

export interface IRowProps {
    color: string[],
    height: string,
    padding: string,
}

export interface ITableProps {
    result: string[],
    title: string,
    urlToFetch: string,
}

export interface ITabContentProps {
    children: any,
    label: string | Element | JSX.Element,
}

export interface ITabsProps {
    children: any,
}


export interface ITwitterProps {
    profileUrl: string,
}





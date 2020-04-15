import Style from "ol/style/Style";
import Stroke from "ol/style/Stroke";
import Fill from "ol/style/Fill";
import { FeatureLike } from "ol/Feature";

export const fillOpacity: number = 0.75;

export function getFillColor(d: number, classes:number[], colorArray: string[]) {
    return d > classes[6] ? colorArray[6] :
        d > classes[5] ? colorArray[5] :
        d > classes[4] ? colorArray[4] :
        d > classes[3] ? colorArray[3] :
        d > classes[2] ? colorArray[2] :
        d > classes[1] ? colorArray[1] :
        d > classes[0] ? colorArray[0] :
        'rgba(255,255,255,1)'
}
    
export const greenColors: string[] = [
    `rgba(95,95,95,${fillOpacity})`,
    `rgba(105,108,87,${fillOpacity})`,
    `rgba(113,120,79,${fillOpacity})`,
    `rgba(121,134,69,${fillOpacity})`,
    `rgba(128,147,58,${fillOpacity})`,
    `rgba(135,160,42,${fillOpacity})`,
    `rgba(141,174,16,${fillOpacity})`,
];

export const blueColors:string[] = [
    `rgba(241,241,241,${fillOpacity})`,
    `rgba(214,218,227,${fillOpacity})`,
    `rgba(174,182,200,${fillOpacity})`,
    `rgba(135,147,173,${fillOpacity})`,
    `rgba(96,114,146,${fillOpacity})`,
    `rgba(56,82,121,${fillOpacity})`,
    `rgba(0,53,96,${fillOpacity})`,
]
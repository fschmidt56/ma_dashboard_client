import Style from "ol/style/Style";
import Stroke from "ol/style/Stroke";
import Fill from "ol/style/Fill";
import { FeatureLike } from "ol/Feature";

export const fillOpacity: number = 0.75;

export function defaultStyle(feature: FeatureLike): Style {
    let style: Style = new Style({
        fill: new Fill({
            color: getFillColor(feature.get('count')),
        }),
        stroke: new Stroke({
            color: getFillColor(feature.get('count')),
        })
    });
    return style;
}

export function getFillColor(d: number) {
    const classborder: number[] = [0,87,173,260,346,433,519];
       return d > classborder[5] ? `rgba(179,0,0,${fillOpacity})` :
           d > classborder[4] ? `rgba(227,74,51,${fillOpacity})` :
           d > classborder[3] ? `rgba(252,141,89,${fillOpacity})` :
           d > classborder[2] ? `rgba(253,187,132,${fillOpacity})` :
           d > classborder[1] ? `rgba(253,212,158,${fillOpacity})` :
           d > classborder[0] ? `rgba(254,240,217,${fillOpacity})` :
                      `rgba(180,180,180,${fillOpacity})`;
    }
    


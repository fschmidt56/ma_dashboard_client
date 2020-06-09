import React, { useEffect, useState } from 'react';
import { IChartProps } from '../types/types';
import { Doughnut } from 'react-chartjs-2';
import Loading from './Loading';

const Chart = (props: IChartProps) => {

    const [labels, setLabels] = useState([]);
    const [chartData, setChartData] = useState([]);
    const [fetchChart, setFetchChart] = useState(false);

    const {
        id,
        colors,
        hoverColors,
        urlToFetch,
        chartHeading
    } = props;

    useEffect(() => {
        fetchData()
    }, [urlToFetch])

    const fetchData = () => fetch(urlToFetch)
        .then(response => response.json())
        .then(data => {
            const obj = data[0];
            if (obj === undefined || null) {
                return null
            }
            else {
                const values: number[] = Object.keys(obj).map(key => { return obj[key]; });
                const label: string[] = Object.keys(obj).map(key => { return key; });
                if (values[0] === null) {
                    setFetchChart(false)
                    setChartData([])
                    setLabels([])
                    return;
                }
                else {
                    //@ts-ignore
                    setLabels(label)
                    //@ts-ignore
                    setChartData(values)
                }
            }
        })
        .then(() => setFetchChart(true))

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>

            {
                fetchChart ?
                    <>
                        <b>{chartHeading}</b>
                        <Doughnut
                            key={id}
                            data={{
                                labels: labels,
                                datasets: [{
                                    data: chartData,
                                    backgroundColor: colors,
                                    borderWidth: 0,
                                    hoverBackgroundColor: hoverColors,
                                }]
                            }}
                        />
                    </>
                    :
                    <Loading />
            }
        </>
    )
}

export default Chart;
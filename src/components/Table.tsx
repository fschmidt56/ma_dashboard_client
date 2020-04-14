import React, { useEffect, useState } from 'react';
import { ITableProps } from '../types/types';
import { MapUtils } from '../utils/MapUtils';
import Loading from './Loading';

const Table = (props: ITableProps) => {

    const {
        title,
        urlToFetch,
    } = props

    const [table, setTable] = useState<string[]>([]);
    const [count, setCount] = useState<string[]>([]);
    const [fetched, setFetched] = useState(false);

    function createTable() {
        let result: string[] = [];
        MapUtils.getGeojson(urlToFetch)
            .then(features => {
                for (let i = 0; i < features.length; i++) {
                    result.push(features[i].stt_name)
                    count.push(features[i].anzahl)
                }
            })
            .then(() => {
                setTable(result)
                setCount(count)
            })
            .then(() => setFetched(true))
    }


    useEffect(() => {
        createTable()
    }, []);

    return (
        <>
            {
                fetched ?
                    <>
                        <p>{title}</p>
                        <ul>
                            {
                                table.map((value, key) => {
                                    const tableKey = count[key]
                                    return (
                                        <li key={key}>{value} | {tableKey}</li>
                                    )
                                })}
                        </ul>
                    </>
                    :
                    <Loading />
            }

        </>
    )
}

export default Table;
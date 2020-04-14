import React from 'react';
import { IColumnProps } from '../types/types';

const Column = (props: IColumnProps) => {

    const {
        style,
        content
    } = props

    return (
        <>
            <div
                className='col-sm-4 scroll'
                style={style}
            >
                {content}
            </div>
        </>
    )
}

export default Column;
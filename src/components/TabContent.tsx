import React from 'react';
import {ITabContentProps} from '../types/types'

const TabContent = (props: ITabContentProps) => {

    const { children } = props;

    return (
        <div>
            {children}
        </div>
    );

}

export default TabContent;
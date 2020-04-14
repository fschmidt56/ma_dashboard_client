import React, { useState } from 'react';
import { ITabsProps } from '../types/types';

const Tabs = (props: ITabsProps) => {

    const [selected, setSelected] = useState(0)

    const { children } = props;

    function setTab(index: number) {
        setSelected(index)
    }

    function renderContent() {
        return (
            <div className="tabsContent">
                {children[selected]}
            </div>
        );
    }

    function renderLabels() {
        return children.map((child: any, index: number) => (
            <div key={child.props.label}
                className={selected !== index ? 'tab' : 'activeTab'}
                onClick={() => { setTab(index) }}
            >
                {child.props.label}
            </div>
        ));
    }
    return (
        <>
            <div className='tabs'>
                {renderLabels()}
                {renderContent()}
            </div>
        </>
    )
}

export default Tabs;
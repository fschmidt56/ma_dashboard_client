import React, { useState, useEffect } from 'react';
import { IUserInfoProps } from '../types/types';
import Loading from './Loading';
import { greenColors } from '../utils/MapStyles';
import { proxyUrls } from '../utils/MapConfig';

const UserInfo = (props: IUserInfoProps) => {

    const [userCount, setUserCount] = useState(0);
    const [changeCount, setChangeCount] = useState(0);
    const [fetchedCount, setFetchtedCount] = useState(false);

    const { heading } = props;

    useEffect(() => {
        let changes: number = 0;
        fetch(proxyUrls[9])
            .then(data => data.json())
            .then(res => {
                setUserCount(res.length)
                for (let i = 0; i < res.length; i++) {
                    changes += parseInt(res[i].summe);
                }
            })
            .then(() => setChangeCount(changes))
            .then(() => setFetchtedCount(true))
    }, [])


    function renderUsers() {
        return [...Array(userCount)].map((e, i) => <i key={i} style={{color: greenColors[6]}} className='fa fa-user fa-2x'></i>)
    }

    // function renderChanges() {
    //     return [...Array(changeCount)].map((e, i) => <i key={i} style={{color: greenColors[6]}} className='fa fa-edit fa-2x'></i>)
    // }

    const avg: number = changeCount / userCount

    return (
       
        <>
            <div>
                <p>{heading}</p>
                {
                    fetchedCount ?
                        <>
                            
                            <b>{userCount}</b> <p>Nutzer haben Daten beigesteuert.*</p>{renderUsers()}<br></br>
                            <b>{changeCount.toFixed(0)}</b> <p>Hausumringe sind editiert worden.*</p>{/* </p>{renderChanges()}<br></br>*/}
                            <p>Dies entspricht im Schnitt <b>{userCount === 0 ? 0 : avg.toFixed(2)}</b> Beiträgen je User.*</p> 
                            <p>*Anonyme Beiträge sind hier nicht berücksichtigt.</p>
                        </>
                        :
                        <Loading />
                }
            </div>
        </>
    )
}

export default UserInfo;


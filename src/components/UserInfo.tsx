import React, { useState, useEffect } from 'react';
import { IUserInfoProps } from '../types/types';
import Loading from './Loading';
import { greenColors } from '../utils/MapStyles';

const UserInfo = (props: IUserInfoProps) => {

    const [userCount, setUserCount] = useState(0);
    const [changeCount, setChangeCount] = useState(0);
    const [fetchedCount, setFetchtedCount] = useState(false);

    const { heading } = props;

    useEffect(() => {
        let changes: number = 0;
        fetch('http://192.168.2.185:8000/userInfo')
            .then(data => data.json())
            .then(res => {
                setUserCount(res.length)
                for (let i = 0; i < res.length; i++) {
                    changes += parseInt(res[i].count);
                }
            })
            .then(() => setChangeCount(changes))
            .then(() => setFetchtedCount(true))
    }, [])


    function renderUsers() {
        return [...Array(userCount)].map((e, i) => <i key={i} style={{color: greenColors[6]}} className='fa fa-user fa-2x'></i>)
    }

    function renderChanges() {
        return [...Array(changeCount)].map((e, i) => <i key={i} style={{color: greenColors[6]}} className='fa fa-edit fa-2x'></i>)
    }

    const avg: number = changeCount / userCount

    return (
       
        <>
            <div>
                <p>{heading}</p>
                {
                    fetchedCount ?
                        <>
                            
                            <b>{userCount}</b> <p>Nutzer haben Daten beigesteuert.</p>{renderUsers()}<br></br>
                            <b>{changeCount}</b> <p>Hausumringe sind editiert worden.</p>{renderChanges()}<br></br>
                            <p>Dies entspricht im Schnitt</p><b>{userCount === 0 ? 0 : avg}</b> Beiträgen je User.
                        </>
                        :
                        <Loading />
                }
            </div>
        </>
    )
}

export default UserInfo;


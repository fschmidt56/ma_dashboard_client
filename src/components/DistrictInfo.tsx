import React, { useEffect, useState } from 'react';
import { IDistrictInfoProps } from '../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { setDistrict } from '../redux/actions/setDistrictAction';
import { RootState } from '../redux/store/store';
import Button from './Button'
import { proxyUrls } from '../utils/MapConfig';
import Loading from './Loading';

const DistrictInfo = (props: IDistrictInfoProps) => {

    const [districtData, setDistrictData] = useState([]);
    const [fetched, setFetched] = useState(false);
    const district = useSelector((state: RootState) => state.currentDistrictState.district)
    const dispatch = useDispatch();

    const {
        title,
        fetchUrl,
        defaultText,
    } = props


    function buttonClick() {
        if (district === '' || district === defaultText) {
            setDistrictData([])
            setFetched(false);
            return;
        }
        else {
            setFetched(true)
            fetch(`${proxyUrls[4]}${district}`)
                .then(response => response.json())
                .then(data => {
                    const obj = data[0];
                    const values: number[] = Object.keys(obj).map(key => { return obj[key]; });
                    //@ts-ignore
                    setDistrictData(values)
                })
        }
    }

    useEffect(() => {
        let dropdown = document.createElement('select');
        dropdown.length = 0;

        let defaultOption = document.createElement('option');
        defaultOption.text = defaultText;

        dropdown.add(defaultOption);
        dropdown.addEventListener('change', (e: any) => { 
            dispatch(setDistrict(e.target!.value)) 
        }) 
        dropdown.selectedIndex = 0;
        document.getElementsByClassName('dropdown')[0].appendChild(dropdown);

        const url = fetchUrl;

        fetch(url)
            .then(
                response => {
                    if (response.status !== 200) {
                        console.log('Status Code not 200: ' +
                            response.status);
                        return;
                    }

                    response.json().then(data => {
                        let option;

                        for (let i = 0; i < data.length; i++) {
                            option = document.createElement('option');
                            option.text = data[i].stt_name;
                            option.value = data[i].stt_name;
                            dropdown.add(option);
                        }
                    });
                }
            )
            .catch(err => {
                console.log(err);
            });
    }, [])

    return (
        <>
            <p>{title}</p>
            <div className='dropdown' ></div>
            <Button
                text='Stadtteildaten abrufen'
                clickButton={buttonClick}
            />
            {fetched ? districtData.length === 0 ? <Loading /> :
                <p>Im gewählten Stadtteil existieren im zu Grunde liegenden Datensatz <b>{districtData[0]}</b> Hausumringe. In <b>{districtData[1]} ({districtData[3]}%)</b> davon haben sich mit Corona infizierte Personen aufgehalten. Nicht betroffen sind somit <b>{districtData[2]} ({districtData[4]}%)</b>.</p>
                :
                <p>Kein Stadtteil gewählt.</p>
            }
        </>
    )
}

export default DistrictInfo;
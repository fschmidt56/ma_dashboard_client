import React from 'react';
import { IButtonProps } from '../types/types';

const Button = (props: IButtonProps) => {
    const {
        text,
        clickButton,
        response,
        faIcon,
    } = props
    return (
        <>
            <button
                className='button'
                onClick={clickButton}>
                <b>{text}
                    <i className={faIcon}></i>
                </b>
            </button>
            <p>{response}</p>
        </>
    )
}

export default Button;

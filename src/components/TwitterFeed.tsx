// TwitterContainer.js
import React, { useEffect, useState } from 'react';
import { ITwitterProps } from '../types/types';

const TwitterFeed = (props: ITwitterProps) => {

    const { profileUrl } = props

    const initializeTwitter = async () => {
        const anchor = await document.createElement('a');
        await anchor.setAttribute('class', 'twitter-timeline');
        await anchor.setAttribute('data-tweet-limit', '15');
        await anchor.setAttribute('data-theme', 'light');
        await anchor.setAttribute('data-chrome', 'transparent noheader nofooter noborders');
        await anchor.setAttribute('href', profileUrl);
        await document.getElementsByClassName('twitter-embed')[0].appendChild(anchor);

        const script = await document.createElement('script');
        await script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
        await document.getElementsByClassName('twitter-embed')[0].appendChild(script);
    }

    useEffect(() => {
        initializeTwitter()
    });

    return (
        <section className='twitterContainer'>
            <div className='twitter-embed'></div>
        </section>
    );
};

export default TwitterFeed;
'use strict';

import React from 'react';
import Post from './Post';
import fetch from '../../core/fetch';

export default {

    path: '/post',

    async action() {
        const resp = await fetch('/graphql', {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: '{post(id: 1){title,link,content}}',
            }),
            credentials: 'include',
        });
        const { data } = await resp.json();
        if (!data || !data.post) throw new Error('Failed to load blog post.');
        return <Post post={data.post} />;
    },

};

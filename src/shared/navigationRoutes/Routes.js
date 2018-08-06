import React from 'react';
import App from '../App.js';
import FrontPage from '../pages/FrontPage.js';
import Upload from '../adminViews/UploadComp.js';
import Resume from '../pages/aboutMe/Resume.js';
// import Nvidia from '../pages/portfolio/Nvidia.js';
import Pages from '../pages/Pages.js';
import Carousel from '../components/Carousel.js';

export default [
    {
        ...App,
        routes: [
            {
                ...FrontPage,
                path: '/',
                exact: true
            },
            {
                ...Upload,
                path: '/admin',
                exact: true
            },
            {
                ...Resume,
                path: '/resume',
                exact: true
            },
            {
                ...Pages,
                path: '/nvidia',
            },
            {
                ...Pages,
                path: '/fashion',
            },
        ]
    }
]

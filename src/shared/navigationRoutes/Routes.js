import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from '../App.js';
import FrontPage from '../pages/FrontPage.js';
import Upload from '../adminViews/UploadComp.js';
import Resume from '../pages/aboutMe/Resume.js';
import Pages from '../pages/Pages.js';
import Carousel from '../components/Carousel.js';
import Gallery from '../adminViews/GalleryComp.js';
import Contact from '../pages/Contact.js';

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
                path: '/upload',
                exact: true
            },
            {
                ...Resume,
                path: '/resume',
                exact: true
            },
            {
                ...Pages,
                path: '/portfolio/:pages',
                exact: true
            },
            {
                ...Contact,
                path: '/contact-me',
                exact: true
            },
            {
                ...Gallery,
                path: '/gallery',
                exact: true,
            }
        ]
    }
]
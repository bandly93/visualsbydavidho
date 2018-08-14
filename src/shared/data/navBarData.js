import React from 'react';
import { Link } from 'react-router-dom';
import { handleFetch } from '../redux/actions/actions.js';

// DATA FOR LINKS UNDER PORTFOLIO --------------------------------------------------

const portfolio = [
    {name: "Nvidia - Production", link: "/portfolio/nvidia"}, 
    {name: "Test - Fashion", link: "/portfolio/fashion"},
    {name: "Lure + Till - Food", link: "/portfolio/lure-till"},
    {name: "Content Magazine - Event", link: "/portfolio/content-magazine"},
    {name: "ScreenPrintShowDown - Camera Operator", link: "/portfolio/screenprintshowdown"},
    {name: "Osmo - Photo and Grip", link: "/portfolio/osmo"},
    {name: "GoPanache - Photo", link: "/portfolio/gopanache"},
    {name: "Adobe Founders bts - Photo and Grip", link: "/portfolio/adobe"}
]

const portfolioMap = portfolio.map((portfolios, i) => {
    return (
        <Link to={portfolios.link} name={portfolios.link} key={i} onClick={handleFetch}> <span>{portfolios.name}</span> </Link>
    )
})

// DATA FOR LINKS UNDER ABOUT -------------------------------------------------------

const about = [
    {name: "Resume", link: "/resume", external: null},
    {name: "HangarX.co", link: null, external: "hangarx.co" },
    {name: "Dark side of the Moon Photography & Design", link: null, external: "https://facebook.com/dsotm"},
    {name: "Brix & Mrtr Magazine", link: null, external: "https://brixandmrtr.com"}
]

const aboutMap = about.map((abouts, i) => {
    if (abouts.external == null) {
        return (
            <Link to={abouts.link} key={i}><span>{abouts.name}</span></Link>
        )
    } else {
        return (
            <a href={abouts.external} key={i}><span>{abouts.name}</span></a>
        )
    }
})

// DATA FOR LINKS UNDER INSTAGRAM --------------------------------------------------

const instagram = [
    {name: "VisualsByDavidHo", external: "https://instagram.com/visualsbydavidho" },
    {name: "HangarX.co", external: "https://instagram.com/hangarx.co"},
    {name: "DSOTM.us", external: "https://instagram.com/dsotm.us"}
]

const instagramMap = instagram.map((instagrams, i) => {
    return (
        <a href={instagrams.external} key={i}><span>{instagrams.name}</span></a>
    )
})

// TABS ON RIGHT SIDE OF NAVBAR ----------------------------------------------------

const navbarLabel = [
    {name: "+ Portfolio", dropdown: portfolioMap},
    {name: "+ About Me & Links", dropdown: aboutMap},
    {name: "+ Instagram", dropdown: instagramMap},
]

export const navbarLabelMap = navbarLabel.map((navbarLabels, i) => {
    return (
        <div key={i} className="dropdown">
            <li className="dropbtn">{navbarLabels.name}</li>
                <div className="dropdown-content">
                    <ul className="dropdown-child">
                        {navbarLabels.dropdown}
                    </ul>
                </div>
        </div>
    )
})

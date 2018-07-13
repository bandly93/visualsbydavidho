import React from 'react';
import { Link } from 'react-router-dom';

const portfolio = [
    {name: "Nvidia - Production", link: "/nvidia"}, 
    {name: "Test - Fashion", link: "/fashion"},
    {name: "Lure + Till - Food", link: "/lure-till"},
    {name: "Content Magazine - Event", link: "/content-magazine"},
    {name: "ScreenPrintShowDown - Camera Operator", link: "/screenprintshowdown"},
    {name: "Osmo - Photo and Grip", link: "/osmo"},
    {name: "GoPanache - Photo", link: "/gopanache"},
    {name: "Adobe Founders bts - Photo and Grip", link: "/adobe"}
]

const portfolioMap = portfolio.map((portfolios, i) => {
    return (
        <Link to={portfolios.link} key={i}><span>{portfolios.name}</span></Link>
    )
})

const about = [
    {name: "Resume", link: "/resume", external: null},
    {name: "HangarX.co", link: null, external: "hangarx.co" },
    {name: "Dark side of the Moon Photography & Design", link: null, external: "https://facebook.com/dsotm"},
    {name: "Brix & Mrtr Magazine", link: null, external: "https://brixandmrtr.com"}
]

const aboutMap = about.map((abouts, i) => {
    console.log(abouts.external)
    if (abouts.external == null) {
        return (
            <Link to={abouts.link} key={i}><span>{abouts.name}</span></Link>
        )
    } else {
        return (
            <a href={abouts.external} key={i}>{abouts.name}</a>
        )
    }
})

const instagram = [
    {name: "VisualsByDavidHo", external: "https://instagram.com/visualsbydavidho" },
    {name: "HangarX.co", external: "https://instagram.com/hangarx.co"},
    {name: "DSOTM.us", external: "https://instagram.com/dsotm.us"}
]

const instagramMap = instagram.map((instagrams, i) => {
    return (
        <a href={instagrams.external} key={i}>{instagrams.name}</a>
    )
})

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

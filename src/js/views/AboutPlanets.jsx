import { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

import React from 'react'

export const AboutPlanets = () => {

    const { store } = useContext(Context);
    const { uid } = useParams();

    const planet = store.planets.find(planet => planet.uid == uid)
    console.log(planet)
    if (!planet) {
        return <div>we could't find that planet</div>
    }

    return (
        <div className="card mb-3 bg-white">
            <div className="row g-0">
                <div className="card mb-3" style={{ minWidth: "540px" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{planet.properties.name}</h5>
                                <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className="row">
                            <p className='col border-end border-warning border-4 '>Climate: {planet.properties.climate}</p>
                            <p className='col border-end border-warning border-4'>Gravity: {planet.properties.gravity}</p>
                            <p className='col border-end border-warning border-4'>Orbital period: {planet.properties.orbital_period}</p>
                            <p className='col border-end border-warning border-4'>Resdents: </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
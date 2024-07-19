import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/cards.css";
import { Navigate, useNavigate } from "react-router";

export const Planets = () => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate();
    useEffect(() => {
        actions.fetchPlanetsData()
    }, [])
    console.log(store.planets)

    const handleLearnMoreAboutPanets=(uid)=>{
        navigate(`/AboutPlanets/${uid}`)
    }
    return (
        <>
            <div className="container mt-2">
                <h2 className="text-danger">Planets</h2>
                <hr />
            </div>
            <div className="container py-2 overflow-auto">
                <div className="d-flex flex-row flex-nowrap">
                    {
                        store.planets && store.planets.length > 0 && store.planets.map((planet, index) => {
                            const properties = planet.properties
                            return (
                                <div className="theCards card mx-1" style={{ minWidth: "18rem" }} key={index}>
                                    <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-tittle">{properties.name}</h5>
                                        <p className="card-text">{properties.population}</p>
                                        <p className="card-text">{properties.terrain}</p>
                                        <div className="d-flex justify-content-between">
                                            <button className="btn-primary" onClick={()=>{handleLearnMoreAboutPanets(planet.uid)}}>Learn more!</button>
                                            <div className="warning" onClick={() => actions.addFavorite(properties.name, planet.uid)}>❤</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

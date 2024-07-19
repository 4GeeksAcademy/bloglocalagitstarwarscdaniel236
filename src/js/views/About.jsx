import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from '../store/appContext';
import { useParams } from 'react-router-dom';
export const About = () => {

    const { store } = useContext(Context);
    const { uid } = useParams();

    const character = store.characters.find(character => character.uid == uid); //character va a ser igual a la propiedad uid que tiene characters dentro de la información contenida en el store

    if (!character) {
        return <div>We couldn't find the character</div>
    }

    return (
        <div className="card mb-3 bg-white">
            <div className="row g-0">
                <div className="card mb-3" style={{ minWidth: "540px" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{character.properties.name}</h5>
                                <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className="row">
                            <p className='col border-end border-warning border-4 '>Birth year: {character.properties.birth_year}</p>
                            <p className='col border-end border-warning border-4'>Height: {character.properties.height}</p>
                            <p className='col border-end border-warning border-4'>Skin color: {character.properties.birth_year}</p>
                            <p className='col border-end border-warning border-4'>Home world: </p>
                            <p className='col'>Vehicles</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
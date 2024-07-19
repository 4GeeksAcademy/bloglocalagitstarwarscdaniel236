import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { useNavigate } from "react-router-dom";
import "../../styles/cards.css";


export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const navigate = useNavigate();

	const hanldeBackHome = () => {
	navigate('/')
}
	return (
		<nav id="TheNav" className="container-fluid navbar">
			<div className='logo ms-3' onClick={hanldeBackHome}>
				<img src="data:image/jpeg;base64,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" />
			</div>
			<div className="rounded-pill dropdown p-0">
				<div className="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
				</div>
				<ul className="dropdown-menu dropdown-menu-start dropdown-menu-lg-start" aria-labelledby="dropdownMenuLink">
					{store.favorites && store.favorites.length > 0 && store.favorites.map((item) => {
						return (
							<div>
								<li key={item.uid} className='d-flex'>
									<a className="d-flex dropdown-item">{item.name}</a>
									<button onClick={(e) => {
										e.stopPropagation()
										actions.deleteFavorite(item.name)
									}}>x</button>
								</li>
							</div>
						)
					})}
				</ul>
			</div>
		</nav>
	);
}
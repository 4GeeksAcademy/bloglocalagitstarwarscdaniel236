import { Navigate } from "react-router";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				},
			],
			characters: null,
			planets: null,
			favorites: [],
		},
		actions: {
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			fetchCharactersData: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/people");
					const data = await response.json();
					console.log(data);
					if (response.ok) {
						const charactersData = [];
						for (const character of data.results) {
							const responseEachCharacter = await fetch(`https://www.swapi.tech/api/people/${character.uid}`);
							const characterData = await responseEachCharacter.json();
							if (responseEachCharacter.ok) {
								charactersData.push(characterData.result);
							}
						}
						setStore({ characters: charactersData });
						return true;
					}
					setStore({ characters: false });
					return false;
				} catch (e) {
					console.error("An error happened fetching characters data", e);
					setStore({ characters: false });
					return false;
				}
			},

			fetchPlanetsData: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/planets");
					const data = await response.json();
					console.log(data);
					if (response.ok) {
						const planetsData = [];
						for (const planet of data.results) {
							const responseEachPlanet = await fetch(`https://www.swapi.tech/api/planets/${planet.uid}`);
							const planetData = await responseEachPlanet.json();
							if (responseEachPlanet.ok) {
								planetsData.push(planetData.result);
							}
						}
						console.log(planetsData);
						setStore({ planets: planetsData });
					}
					console.log(getStore().planets);
				} catch (e) {
					console.error("An error happened fetching planets data", e);
					setStore({ planets: false });
					return false;
				}
			},

			addFavorite: (name, uid) => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, { name: name, uid: uid }] });
			},

			deleteFavorite: (name) => {
				const store = getStore();
				setStore({ favorites: store.favorites.filter(item => item.name !== name) });
			},

			changeColor: (index, color) => {
				const store = getStore();
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;


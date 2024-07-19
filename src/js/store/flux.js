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
								charactersData.push(characterData.result); // Guardamos todo el objeto result en charactersData
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

			fetchPlanetsData: async() => {
				try {
					const response = await fetch("https://www.swapi.tech/api/planets");
					const data = await response.json();
					console.log(data)
					if(response.ok){
						const planetsData = [];
						for (const planet of data.results){
							const responseEachPlanet = await fetch(`https://www.swapi.tech/api/planets/${planet.uid}`)//llamada info de la API
							const planetData = await responseEachPlanet.json();// traduccioón de json a js
							if(responseEachPlanet.ok){ //si la respuesta del llamado a la API es ok 
								planetsData.push(planetData.result) //se guarda todo en el array de planetsData
							}
						}
						console.log(planetsData)
						setStore({planets: planetsData});
					}
					console.log(getStore().planets) 
				}catch(e){
					console.error("An error happended fetching planets data",e)
					setStore({planets: false})
					return false
				}
			},
			
			addFavorite: (name, uid)=>{
				const store = getStore()

				setStore({favorites: [...store.favorites, {"name": name, "uid": uid}]})
			},
			deleteFavorite: (name)=>{
				const store = getStore()

				setStore({favorites: store.favorites.filter(item => item.name != name)}) //retorna mismo array pero con nombre distinto al que quiero borrar
			},


			changeColor: (index, color) => {
				//get the store
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



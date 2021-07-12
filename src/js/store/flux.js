const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			vehicles: [],
			planets: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				// getActions().changeColor(0, "green");
			},

			// loadSomeData: type => {
			// 	let tipo = type;
			// 	console.log(tipo);
			// 	console.log(`https://swapi.dev/api/${type}`);
			// 	fetch(`https://swapi.dev/api/${type}`)
			// 		.then(resp => resp.json())
			// 		.then(data => setStore({ tipo: data.results }));
			// }

			loadPeople: () => {
				fetch("https://swapi.dev/api/people/")
					.then(resp => resp.json())
					.then(data => setStore({ people: data.results }));
			},
			loadVehicles: () => {
				fetch("https://swapi.dev/api/starships/")
					.then(resp => resp.json())
					.then(data => setStore({ vehicles: data.results }));
			},
			loadPlanets: () => {
				fetch("https://swapi.dev/api/planets/")
					.then(resp => resp.json())
					.then(data => setStore({ planets: data.results }));
			}
		}
	};
};

export default getState;

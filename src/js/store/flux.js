const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				// getActions().changeColor(0, "green");
			},

			loadSomeData: type => {
				let tipo = type;
				console.log(tipo);
				console.log(`https://swapi.dev/api/${type}`);
				fetch(`https://swapi.dev/api/${type}`)
					.then(resp => resp.json())
					.then(data => setStore({ tipo: data.results }));
			}

			// loadSomeData: () => {
			// 	fetch("https://swapi.dev/api/people/")
			// 		.then(resp => resp.json())
			// 		.then(data => setStore({ people: data.results }));
			// }
		}
	};
};

export default getState;

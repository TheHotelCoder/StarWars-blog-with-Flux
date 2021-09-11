const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			favorites: []
		},
		actions: {
			loadPeople: () => {
				fetch("https://swapi.dev/api/people/")
					.then(resp => resp.json())
					.then(data => setStore({ people: data.results }));
			},

			loadPlanets: () => {
				fetch("https://swapi.dev/api/planets/")
					.then(resp => resp.json())
					.then(data => setStore({ planets: data.results }));
			},

			addFavorite: item => {
				const store = getStore();
				const validate = store.favorites.includes(item);
				if (!validate) {
					setStore({ favorites: [...store.favorites, item] });
				}
			},

			deleteFavorite: id => {
				const store = getStore();
				const updatedList = [...store.favorites];
				updatedList.splice(id, 1);
				setStore({ favorites: [...updatedList] });
			}
		}
	};
};

export default getState;

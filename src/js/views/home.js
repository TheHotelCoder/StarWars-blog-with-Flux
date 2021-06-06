import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store } = useContext(Context);
	console.log(store.people);

	return (
		<div className="text-center mt-5">
			<h1>Characters</h1>
			<p>{store.people.map(person => <Card />)}</p>
			<h1>Planets</h1>
		</div>
	);
};

import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import InfoCardPeople from "../component/Cardone";
import InfoCardVehicle from "../component/Cardtwo";
import InfoCardPlanets from "../component/CardThree";

export const Home = () => {
	const { store } = useContext(Context);
	console.log(store.people);
	console.log(store.planets);

	return (
		<div className=" mt-5">
			<h1 className="text-center">Characters</h1>

			{store.people.map((person, key) => (
				<InfoCardPeople key={key} person={person} />
			))}

			<h1 className="text-center">Vehicles</h1>
			{store.vehicles.map((vehicle, key) => (
				<InfoCardVehicle key={key} vehicle={vehicle} />
			))}

			<h1 className="text-center">Planets</h1>
			{store.planets.map((planet, key) => (
				<InfoCardPlanets key={key} planet={planet} />
			))}
		</div>
	);
};

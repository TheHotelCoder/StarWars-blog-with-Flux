import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import InfoCard from "../component/Card";

export const Home = () => {
	const { store } = useContext(Context);
	console.log(store.people);

	return (
		<div className="text-center mt-5">
			<h1>Characters</h1>
			<p>
				<div className="row">
					<div className="col-4">
						{store.people.map((person, key) => (
							<InfoCard key={key} person={person} />
						))}
					</div>
				</div>
			</p>
			<h1>Planets</h1>
		</div>
	);
};

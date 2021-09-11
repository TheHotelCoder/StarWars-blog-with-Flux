import React, { useContext, useEffect } from "react";

import "../../styles/home.scss";
import { Context } from "../store/appContext";
import InfoCardPeople from "../component/Cardone";

import InfoCardPlanets from "../component/CardThree";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<div className=" text-center mt-5 mb-5">
				<h1 className="text-center">Characters</h1>

				{store.people.map((person, index) => (
					<InfoCardPeople key={index} id={index} person={person} section="character" />
				))}

				<h1 className="text-center">Planets</h1>
				{store.planets.map((planet, index) => (
					<InfoCardPlanets key={index} id={index} planet={planet} section="planet" />
				))}
			</div>
			<div className="text-center">
				<h1 id="readinglist">Your Read Later List</h1>
				<ul>
					{store.favorites.length > 0 ? (
						store.favorites.map((favorite, index) => {
							return (
								<li key={index}>
									<a href="#">{favorite}</a>
									<i
										id="delete"
										className="far fa-trash-alt pointer trash px-3"
										onClick={() => {
											actions.deleteFavorite({ index });
										}}
									/>
								</li>
							);
						})
					) : (
						<span>Your reading list is currently empty</span>
					)}
				</ul>
			</div>
		</div>
	);
};

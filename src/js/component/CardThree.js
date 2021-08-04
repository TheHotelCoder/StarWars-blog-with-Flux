import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

function InfoCardPlanets({ planet }) {
	const { store, actions } = useContext(Context);

	return (
		<Card style={{ width: "16rem" }} className="col-4 text-center mb-4 d-inline-block">
			<Card.Img variant="top" src="https://unsplash.com/photos/c0VRNWVEjOA/download?force=true" />
			<Card.Body>
				<Card.Title>{planet.name}</Card.Title>
				<Card.Text>cliamte: {planet.climate}</Card.Text>
				<Card.Text>gravity: {planet.gravity}</Card.Text>
				<Card.Text>terrain: {planet.terrain}</Card.Text>
				<Card.Text>population: {planet.population}</Card.Text>

				<Button
					variant="primary"
					onClick={() => {
						actions.addFavorite(planet.name);
					}}>
					Add to favourites
				</Button>
			</Card.Body>
		</Card>
	);
}

InfoCardPlanets.propTypes = {
	// You can declare that a prop is a specific JS type. By default, these
	// are all optional.
	planet: PropTypes.object
};

export default InfoCardPlanets;

import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

function InfoCardPlanets({ planet, section, id }) {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	return (
		<Card style={{ width: "16rem" }} className="col-4 text-center mb-4 mt-4 mr-1 d-inline-block">
			<Card.Img variant="top" src="https://unsplash.com/photos/c0VRNWVEjOA/download?force=true" />
			<Card.Body>
				<Card.Title>{planet.name}</Card.Title>
				<Card.Text>climate: {planet.climate}</Card.Text>
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
				<Button
					variant="primary"
					className="mt-2"
					onClick={() => {
						history.push("/" + section + "/" + id);
					}}>
					More Info!
				</Button>
			</Card.Body>
		</Card>
	);
}

InfoCardPlanets.propTypes = {
	// You can declare that a prop is a specific JS type. By default, these
	// are all optional.
	planet: PropTypes.object,
	id: PropTypes.object,
	section: PropTypes.object
};

export default InfoCardPlanets;

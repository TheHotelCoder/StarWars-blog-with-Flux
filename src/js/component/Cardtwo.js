import React from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

function InfoCardVehicle({ vehicle }) {
	console.log(vehicle);
	return (
		<Card style={{ width: "16rem" }} className="col-4 text-center mb-4 d-inline-block">
			<Card.Img variant="top" src="https://unsplash.com/photos/c0VRNWVEjOA/download?force=true" />
			<Card.Body>
				<Card.Title>{vehicle.name}</Card.Title>
				<Card.Text>model: {vehicle.model}</Card.Text>
				<Card.Text>manufacterer: {vehicle.manufacterer}</Card.Text>
				<Card.Text>crew: {vehicle.crew}</Card.Text>
				<Card.Text>passengers: {vehicle.passengers}</Card.Text>

				<Button variant="primary">Add to favourites</Button>
			</Card.Body>
		</Card>
	);
}

InfoCardVehicle.propTypes = {
	// You can declare that a prop is a specific JS type. By default, these
	// are all optional.
	vehicle: PropTypes.object
};

export default InfoCardVehicle;

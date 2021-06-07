import React from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

function InfoCard({ person }) {
	console.log(person);
	return (
		<div>
			<Card style={{ width: "18rem" }}>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>{person.name}</Card.Title>
					<Card.Text>{person.height}</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
		</div>
	);
}

InfoCard.propTypes = {
	// You can declare that a prop is a specific JS type. By default, these
	// are all optional.
	person: PropTypes.object
};

export default InfoCard;

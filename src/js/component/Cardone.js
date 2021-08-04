import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import { Context } from "../store/appContext";

function InfoCardPeople({ person }) {
	const { actions } = useContext(Context);

	return (
		<Card style={{ width: "16rem" }} className="col-4 text-center mb-4 d-inline-block">
			<Card.Img variant="top" src="https://unsplash.com/photos/c0VRNWVEjOA/download?force=true" />
			<Card.Body>
				<Card.Title>{person.name}</Card.Title>
				<Card.Text>height: {person.height}</Card.Text>
				<Card.Text>hair color: {person.hair_color}</Card.Text>
				<Card.Text>skin color: {person.skin_color}</Card.Text>
				<Card.Text>gender: {person.gender}</Card.Text>
				<Card.Text>birthday: {person.birth_year}</Card.Text>

				<Button
					variant="primary"
					onClick={() => {
						actions.addFavorite(person.name);
					}}>
					Add to favourites
				</Button>
			</Card.Body>
		</Card>
	);
}

InfoCardPeople.propTypes = {
	// You can declare that a prop is a specific JS type. By default, these
	// are all optional.
	person: PropTypes.object
};

export default InfoCardPeople;

import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import React, { useContext } from "react";
import { Context } from "../store/appContext";

function InfoCardPeople({ person, id, section }) {
	console.log({ section });
	const { actions } = useContext(Context);
	const history = useHistory();
	return (
		<Card style={{ width: "16rem" }} className="col-4 text-center mb-4 mt-4 mr-1 d-inline-block ">
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

InfoCardPeople.propTypes = {
	// You can declare that a prop is a specific JS type. By default, these
	// are all optional.
	person: PropTypes.object,
	id: PropTypes.object,
	section: PropTypes.object
};

export default InfoCardPeople;

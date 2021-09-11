import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const DetailView = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);
	const [DataInfo, setDataInfo] = useState("");
	useEffect(() => {
		if (params.section == "character") {
			setDataInfo(store.people[params.id]);
			console.log(DataInfo, "del if");
		} else {
			setDataInfo(store.planets[params.id]);
			console.log(DataInfo, "del else");
		}
	}, []);
	if (params.section == "character") {
		return (
			<div className="jumbotron">
				<h1 className="display-4">{DataInfo.name}</h1>
				<p className="lead">
					Lucas ipsum dolor sit amet chagrian gank roos rotta thul evazan quarren dantooine skywalker mygeeto.
					Padmé cato gavyn kathol bajic aramandi. Togruta unu darth aramandi jerec evocii. Dash nass
					thisspiasian zuggs cordé snootles tapani md-5 massassi. Braxant vel askajian yuzzum lama paaerduag
					rebo. Himoran omwati tatooine moff dash anx. Obi-wan coruscant sluis wampa. Hapan palpatine nas
					ranat snivvian ooryl frozian bimm dexter. Wol breha frozian darth tarpals mygeeto darklighter jubnuk
					arkanian. Vor derlin glymphid droid.
				</p>
				<hr className="my-4" />
				<p>Height: {DataInfo.height}</p>
				<p>Hair Color: {DataInfo.hair_color}</p>
				<p>Skin Color: {DataInfo.skin_color}</p>
				<p>Gender: {DataInfo.gender}</p>
				<p>Birthday: {DataInfo.birth_year}</p>
			</div>
		);
	} else {
		return (
			<div className="jumbotron">
				<h1 className="display-4">{DataInfo.name}</h1>
				<p className="lead">
					Lucas ipsum dolor sit amet chagrian gank roos rotta thul evazan quarren dantooine skywalker mygeeto.
					Padmé cato gavyn kathol bajic aramandi. Togruta unu darth aramandi jerec evocii. Dash nass
					thisspiasian zuggs cordé snootles tapani md-5 massassi. Braxant vel askajian yuzzum lama paaerduag
					rebo. Himoran omwati tatooine moff dash anx. Obi-wan coruscant sluis wampa. Hapan palpatine nas
					ranat snivvian ooryl frozian bimm dexter. Wol breha frozian darth tarpals mygeeto darklighter jubnuk
					arkanian. Vor derlin glymphid droid.
				</p>
				<hr className="my-4" />
				<p>Climate: {DataInfo.climate}</p>
				<p>Gravity: {DataInfo.gravity}</p>
				<p>Terrain: {DataInfo.terrain}</p>
				<p>Population: {DataInfo.population}</p>
			</div>
		);
	}
};

DetailView.propTypes = {
	// You can declare that a prop is a specific JS type. By default, these
	// are all optional.
	props: PropTypes.object,
	name: PropTypes.object
};

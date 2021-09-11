import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

const Favourites = () => {
	const { store, actions } = useContext(Context);
	function scrollToList() {
		const elmnt = document.getElementById("readinglist");
		elmnt.scrollIntoView({ block: "start" });
	}

	return (
		<div className="dropdown">
			<div className="btn-group">
				<button type="button" className="btn btn-primary" aria-expanded="false" onClick={() => scrollToList()}>
					Favourites {store.favorites.length}
				</button>
			</div>
		</div>
	);
};

export default Favourites;

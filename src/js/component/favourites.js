import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Favourites = () => {
	const { store, actions } = useContext(Context);
	return (
		<div classNameName="btn-group">
			<button
				type="button"
				className="btn btn-primary dropdown-toggle"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false">
				Favourites {store.favorites.length}
			</button>
			<div className="dropdown-menu">
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
						<span>Empty</span>
					)}
				</ul>
			</div>
		</div>
	);
};

export default Favourites;

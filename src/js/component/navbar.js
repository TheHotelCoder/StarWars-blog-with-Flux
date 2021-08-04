import React from "react";
import { Link } from "react-router-dom";
import Favourites from "./favourites";

export const Navbar = () => {
	return (
		<div className="row navbar navbar-light bg-light mb-3">
			<div className="col-md-3 text-center px-2 py-2 ">
				<Link to="/">
					<img
						className="img-fluid w-50 p-3"
						src="https://logos-marcas.com/wp-content/uploads/2020/11/Star-Wars-Logo.png"
					/>
				</Link>
			</div>
			<div className="col-md-3 text-center ">
				<Favourites />
			</div>
		</div>
	);
};

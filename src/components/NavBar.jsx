import React from "react";
import CartWindget from "./CartWidget"
import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<div className="div-header-bg">
			<div className="container">
				<div className="row">
					<ul className="nav justify-content-center my-1">
						<li className="nav-item">
							<b><NavLink className="nav-link" aria-current="page" to={"/category/hombre"}>Hombres</NavLink></b>
						</li>
						<li className="nav-item">
							<b><NavLink className="nav-link" to={"/category/mujeres"}>Mujeres</NavLink></b>
						</li>
						<li className="nav-item">
							<b><NavLink className="nav-link" to={"/category/Niño"}>Niños</NavLink></b>
						</li>
						<li className="nav-item">
							<b><NavLink className="nav-link" to={"/category/accesorios"}>Accesorios</NavLink></b>
						</li>
						<CartWindget/>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default NavBar;


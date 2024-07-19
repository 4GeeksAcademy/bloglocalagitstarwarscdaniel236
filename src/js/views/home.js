import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Characters } from "../component/Characters.jsx";
import { Planets } from "../component/Planets.jsx";

export const Home = () => (
	<div className="container">
		
		<Characters />
		<Planets />
	</div>
);

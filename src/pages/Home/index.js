import React from "react";
import { Link } from "react-router-dom";

const Page = () => {
	return (
		<div>
			<h1>Página Inicial...</h1>
			<h3>Home</h3>
			<Link to="/About">Sobre</Link>
		</div>
	);
};

export default Page;

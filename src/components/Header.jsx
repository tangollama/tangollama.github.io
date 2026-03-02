import { SITE_TITLE } from '../consts';
import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "./Navbar.jsx";


export default () => (
	<Container fluid className="px-0">
		<Navbar />
	</Container>
);
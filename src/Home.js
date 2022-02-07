import React, { useEffect, useState } from "react";
import { app } from "./firebase-config";
import ListadoTareas from "./ListadoTareas";
import { Box, Button } from "@mui/material";


const Home = () => {

	const cerrarSesion = () => app.auth().signOut();

	return (
		<Box>
			Bienvenido, sesión iniciada
			<Button
				variant="outlined"
				onClick={cerrarSesion}
			>
				Cerrar sesión
			</Button>
			<hr />

			<div>
				<hr />
			</div>

			<div>
				<ListadoTareas />
			</div>
		</Box>
	)
}

export default Home;
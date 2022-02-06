import React, { useEffect, useState } from "react";
import { app } from "./firebase-config";
import ListadoTareas from "./ListadoTareas";
import { Box, Button } from "@mui/material";


const Home = () => {
	const [realData, setData] = useState([]);
	const getPosts = async () => {
		try {
			const resp = await fetch(`https://waco-api.herokuapp.com/api/posts`);
			const { data } = await resp.json();
			setData(data);
		}
		catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		const getAllPost = async() => {
			await getPosts();
		}
		getAllPost();
	}, [])

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
				<ListadoTareas arrayTareas={realData} />
			</div>
		</Box>
	)
}

export default Home;
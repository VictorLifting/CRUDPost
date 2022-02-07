import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { app } from "./firebase-config";
import { Box } from "@mui/system";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    login: {
      textAlign: 'center',
      position: 'absolute',
      width: '400px',
      backgroundColor: 'rgb(255, 255, 255)',
      boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2);',
      padding: '25px',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '20px'
    },
    title: {

        color: '#1F5FFF',
        fontSize:'48px',
        fontWeight:'800',
        marginBlockEnd:'0.1em'


    },
    subTitle: {
      fontStyle:'italic',
      color: '#1F5FFF',
      fontWeight:'500',
      fontSize:'24px',
      marginBlockStart:'0.1em'
    },
    inputMaterial: {
      marginBlockEnd:'0.9em',
      backgroundColor: '#fff',
      width: '100%',
      boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1);',
    }
  }));

const Logueo = (props) => {
    const styles = useStyles();
	const [isRegistrando, setIsRegistrando] = React.useState(false);

	const crearUsuario = (correo, password) => {
		app
			.auth()
			.createUserWithEmailAndPassword(correo, password)
			.then((usuarioFirebase) => {
				console.log("usuario creado:", usuarioFirebase)
				props.setUsuario(usuarioFirebase);
			});
	}

	const iniciarSesion = (correo, password) => {
		app.auth().signInWithEmailAndPassword(correo, password).then((usuarioFirebase) => {
			console.log("sesion iniciada con:", usuarioFirebase.user);
			props.setUsuario(usuarioFirebase)
		})
	}

	const submitHandler = (e) => {
		e.preventDefault();
		const correo = e.target.emailField.value;
		const password = e.target.passwordField.value;

		if (isRegistrando) crearUsuario(correo, password);

		if (!isRegistrando) iniciarSesion(correo, password)
	}

	return (
		<Box  className={styles.login}>
            <p className={styles.title}>Crud</p>
            <p className={styles.subTitle}>Post</p>

			<p> {isRegistrando ? "Registrate" : "Inicia sesión"}</p>


			<form onSubmit={submitHandler}>
				<Box sx={{
					display: "block"
				}}>
					<TextField
                        className={styles.inputMaterial}
						label="Email"
						variant="outlined"
						type="email"
						id="emailField"
					/>

					<TextField
                        className={styles.inputMaterial}
						label="Password"
						variant="outlined"
						type="password"
						id="passwordField"
					/>
                    <br/>

					<Button
						variant="contained"
						type="submit"
					>
						{isRegistrando ? "Registrate" : "Inicia sesión"}

					</Button>
				</Box>
			</form>

                <br/>
			<Button
				variant="outlined"
				onClick={() => setIsRegistrando(!isRegistrando)}>

				{isRegistrando
					? "¿Ya tienes cuenta? Inicia Sesión"
					: "¿No tienes cuenta? Registrate gratis"}

			</Button>
		</Box>
	)
}

export default Logueo;
import { app } from "./firebase-config";
import ListadoTareas from "./ListadoTareas";
import { Box, Button } from "@mui/material";
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(() => ({

    headerMui: {
        display:'flex',
        justifyContent:'space-between',
        backgroundColor: '#1985FF;',
        color:'white',
        height: '4em',
        padding:'1em 3em'
    },
    tableStyle: {
      backgroundColor: '#E8EFFE;',
      borderRadius: '20px'
  
    },
    inputMaterial: {
      marginBottom: '10px',
      backgroundColor: '#fff',
      width: '100%'
    }
  }));


const Home = () => {

    const styles = useStyles();
	const cerrarSesion = () => app.auth().signOut();

	return (
		<Box>


        <div className={styles.headerMui}>

        <div>
        
			Bienvenido, sesión iniciada
        </div>
            
			<Button
				variant="outlined"
				onClick={cerrarSesion}
			>
				Cerrar sesión
			</Button>
         </div>       

			<div>

			</div>

			<div>
				<ListadoTareas />
			</div>
		</Box>
	)
}

export default Home;
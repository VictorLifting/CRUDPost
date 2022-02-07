import { app } from "./firebase-config";
import ListadoTareas from "./ListadoTareas";
import { Box, Button } from "@mui/material";
import { makeStyles } from '@mui/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const useStyles = makeStyles(() => ({

    headerMui: {
        display:'flex',
        justifyContent:'space-between',
        backgroundColor: '#1985FF;',
        color:'white',
        height: 'fit-content',
        padding:'1em 3em',
       // boxShadow: '0px 20px 10px #6ea5ff;',
    },
    tableStyle: {
      backgroundColor: '#E8EFFE;',
      borderRadius: '20px'
  
    },
    inputMaterial: {
      marginBottom: '10px',
      backgroundColor: '#fff',
      width: '100%'
    },
    logOut:{
        color:'#1985FF',
        backgroundColor:'white'
    }
  }));


const Home = () => {

    const styles = useStyles();
	const cerrarSesion = () => app.auth().signOut();

	return (
		<Box>


        <div className={styles.headerMui}>

        <div>
        
		<AccountCircleIcon/>	Bienvenido, sesión iniciada
        </div>
            
			<Button className={styles.logOut}
            size="small"
            variant="contained"	
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
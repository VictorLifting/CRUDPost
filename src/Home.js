import React, {useEffect, useState} from "react";
import { app } from "./firebase-config";
import Button from '@mui/material/Button';
import ListadoTareas from "./ListadoTareas";
import { Box } from "@mui/material";


const Home =()=>{

    const [realData, setData]=useState([]);
    const getPosts= async() => {
    try{  
     

            const resp= await fetch(`https://waco-api.herokuapp.com/api/posts`);
            const {data} = await resp.json();
    
            setData(data) ;
         
    }
    catch (error){
        console.log(error)   
    }
    }    

    useEffect(async()=>{
       await getPosts();
    },[])


    const cerrarSesion=()=>{
        app.auth().signOut();
    }



    return(

        <Box>

            Bienvenido, sesión iniciada

            <Button variant="outlined" onClick={cerrarSesion}>cerrar sesión</Button>

            <hr /> 

            <div>

            <hr /> 
            </div>

            <div>
            
            <ListadoTareas arrayTareas={realData}/>
                
            </div>

        </Box>
    )
}

export default Home;
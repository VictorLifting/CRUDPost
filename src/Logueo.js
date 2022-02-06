import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {app} from "./firebase-config";
import {Box} from "@mui/system";


const Logueo =(props)=>{


    const[isRegistrando, setIsRegistrando] =React.useState(false);


    const crearUsuario =(correo, password)=>{

        app
        .auth()
        .createUserWithEmailAndPassword(correo, password)
        .then((usuarioFirebase) => {
            console.log("usuario creado:", usuarioFirebase)
            props.setUsuario(usuarioFirebase);
        });


    }

    const iniciarSesion=(correo, password)=>{
        app.auth().signInWithEmailAndPassword(correo, password).then((usuarioFirebase)=>{
            console.log("sesion iniciada con:", usuarioFirebase.user);
            props.setUsuario(usuarioFirebase)
        })
    }


    const submitHandler=(e)=>{
        e.preventDefault();
        const correo = e.target.emailField.value;
        const password = e.target.passwordField.value;

        if (isRegistrando){

            crearUsuario(correo, password);
        }

        if(!isRegistrando){
            iniciarSesion(correo, password)
        }


    }

    return(
        <Box sx={{
        backgroundColor:"#dbe9ff",
        display:"flex",
        flexDirection:"column",
        minWidth:"300px",
        maxWidth:"10%",
        textAlign:"center",
        borderRadius:"20px",
        padding:"15px",
        boxshadow: "10px 5px 5px red;"
        
        
        }}>
            <h1> {isRegistrando ? "Registrate" : "Inicia sesión"}</h1>
            <form  onSubmit={submitHandler}>

               <Box sx={{

                   display: "block"
               }}>

              
                <TextField id="outlined-basic" label="Email" variant="outlined" type="email" id="emailField"  />

                <TextField id="outlined-basic" label="Password" variant="outlined" type="password" id="passwordField"  />
                <Button variant="contained" type="submit"> {isRegistrando ? "Registrate" : "Inicia sesión"}</Button>
                </Box>
            </form>

                <Button variant="outlined" onClick={()=>{
                    setIsRegistrando(!isRegistrando)}}>

                {isRegistrando
                ? "¿Ya tienes cuenta? Inicia Sesión'" 
                : "¿No tienes cuenta? Registrate gratis"}

                </Button>
        </Box>
    )
}

export default Logueo;
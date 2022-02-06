import React, { useEffect } from "react";
import { app } from "./firebase-config";
import { Box } from "@mui/material";
import Home from "./Home"
import Logueo from "./Logueo"


function App() {

  const [usuario, setUsuario] = React.useState(null);

  useEffect((() => {
    app.auth().onAuthStateChanged((usuarioFirebase) => {
      console.log("ya tienes sesion inciada con ", usuarioFirebase);
      setUsuario(usuarioFirebase);
    })
  }), [])

  return (
    <Box sx={{
      display: 'flex',
      alignItems: "center",
      justifyContent: "center"
    }}>
      {usuario ? <Home /> : <Logueo setUsuario={setUsuario} />}
    </Box>
  )
}

export default App;
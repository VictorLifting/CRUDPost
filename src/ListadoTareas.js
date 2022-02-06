import React,{useState} from 'react';
import Button from '@mui/material/Button';
import {Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Modal, TextField} from '@mui/material/';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { makeStyles } from '@mui/styles';
import {app} from "./firebase-config";

const baseUrl='https://waco-api.herokuapp.com/api/posts/'





//obtener id del usuario registrado


/*
const [userId, setuserID]=useState([]);

const getUId= async() => {

try{  
 

    const iniciarSesion=(correo, password)=>{
        app.auth().signInWithEmailAndPassword(correo, password).then((usuarioFirebase)=>{
            console.log("Id del usuario:", usuarioFirebase.id);
            setuserID(usuarioFirebase.id)

            //props.setUsuario(usuarioFirebase)
        })
    } 
    iniciarSesion

        const resp= await fetch(`https://waco-api.herokuapp.com/api/posts`);
        const {data} = await resp.json();

        setData(data) ;
     
}

catch (error){
    console.log(error)   
}
}    

useEffect(async()=>{
   await getUId();
   console.log(userId)
},[])




*/




const useStyles = makeStyles(() => ({

    modal: {

        outline:'none',
        textAlign:'center',
      position: 'absolute',
      width: '400px',
      backgroundColor: 'rgb(255, 255, 255)',
      border: '2px solid #000',
      boxShadow: '0px 0px 20px #6ea5ff;',
        padding: '25px',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius:'20px'
    },
    iconos:{
      cursor: 'pointer'
    }, 
    tableStyle:{
        backgroundColor: 'rgb(8, 103, 120)'

    },
    inputMaterial:{
        marginBottom:'10px',
        backgroundColor:'#fff',
      width: '100%'
    }
  }));


const ListadoTareas = ({arrayTareas}) => {

    const styles= useStyles();
    const [modalInsertar, setModalInsertar]=useState(false);
    const [modalEditar, setModalEditar]=useState(false);
    const [modalEliminar, setModalEliminar]=useState(false);


    const [postSelected, setPostSelected]=useState({
        id: '',
        title:'',
        body: '',
      })



      const handleChange=e=>{
        const {name, value}=e.target;
        setPostSelected(prevState=>({
          ...prevState,
          [name]: value
        }))
        console.log(postSelected);
      }


      //CREAR

const sendPosts = async () => {
    try{ 



  const fetchData = {
    method: 'POST',
    body: JSON.stringify(postSelected),
    headers: {
        'Content-Type': 'application/json',
      }
  }

   await fetch(baseUrl, fetchData)
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
    
    }
    catch (error){
        console.log(error) 
    }

    abrirCerrarModalInsertar()
    }



    //actualizar

const updatePosts= () => {
    try{ 


  const fetchData = {
    method: 'PATCH',
    body: JSON.stringify(postSelected),
    headers: {
        'Content-Type': 'application/json',
      }
  }

   fetch(baseUrl+postSelected.id, fetchData)
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
    
    }
    catch (error){
        console.log(error) 
    }
    abrirCerrarModalEditar();
    }




    //BORRAR
const deleteData = async ( ) =>{
    const response = await fetch(baseUrl+postSelected.id, {
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json'
        }
    });
 
   const data = await response.json( );
    abrirCerrarModalEliminar();
   // now do whatever you want with the data  
    console.log(data);
 };



  const abrirCerrarModalInsertar=()=>{
    setModalInsertar(!modalInsertar);
  }


  const abrirCerrarModalEditar=()=>{
    setModalEditar(!modalEditar);
  }


  const abrirCerrarModalEliminar=()=>{
    setModalEliminar(!modalEliminar);
  }


  const selectPost=(post, caso)=>{
    setPostSelected(post);
    (caso==='Editar')? abrirCerrarModalEditar():abrirCerrarModalEliminar()
  }




    const bodyInsertar=(
        <div className={styles.modal}>
          <h3>Add new post</h3>
          <TextField className={styles.inputMaterial} name="id" label="id" onChange={handleChange}/>
          <br />
          <TextField className={styles.inputMaterial} name="title" label="title" onChange={handleChange} />
          <br />
          <TextField className={styles.inputMaterial} name="body" label="body" onChange={handleChange}  />
          <br />
          <TextField className={styles.inputMaterial} name="user_uuid" label="userid" onChange={handleChange}  />
          <br />
          <br />
          <div align="right">
            <Button variant="contained" color="primary" onClick={()=>sendPosts()}  > Insertar</Button>
            <Button variant="outlined" onClick={()=>abrirCerrarModalInsertar()}>Cancelar</Button>
          </div>
        </div>
      )




      const bodyEditar=(
        <div className={styles.modal} >
          <h3>Editar Consola</h3>
          <TextField className={styles.inputMaterial} name="title"  label="Title" onChange={handleChange} value={postSelected && postSelected.title}/>
          <br />
          <TextField className={styles.inputMaterial} name="body"  label="Body" onChange={handleChange} value={postSelected && postSelected.body}/>
          <br />postSelected
          <br /><br />
          <div align="right">
            <Button variant="contained" color="primary" onClick={()=>updatePosts()}>Editar</Button>
            <Button variant="outlined" onClick={()=>abrirCerrarModalEditar()}>Cancelar</Button>
          </div>
        </div>
      )

      const bodyEliminar=(
        <div  className={styles.modal}>
          <p>Estás seguro que deseas eliminar el post <b>{postSelected && postSelected.id}</b> ? </p>
          <div align="right">
            <Button  variant="outlined" color="secondary" onClick={()=>deleteData()} >Sí</Button>
            <Button variant="contained" onClick={()=>abrirCerrarModalEliminar()}>No</Button>
    
          </div>
    
        </div>
      )






return( <div> ListadoTareas

<Button variant="contained" onClick={()=>abrirCerrarModalInsertar()}>Add new post</Button>


     
<TableContainer>
       <Table >
         <TableHead className={styles.tableStyle}>
           <TableRow >
             <TableCell>Id</TableCell>
             <TableCell>Title</TableCell>
             <TableCell>Body</TableCell>
             <TableCell>Link</TableCell>
             <TableCell>User</TableCell>
           </TableRow>
         </TableHead>

         <TableBody>
           {arrayTareas.map(post=>(
             <TableRow key={post.id}>

                <TableCell>{post.id}</TableCell> 
               <TableCell>{post.title}</TableCell>
               <TableCell>{post.body}</TableCell>
               <TableCell>{post.link}</TableCell>
               <TableCell>{post.user}</TableCell>

               <TableCell>
                 <EditIcon onClick={()=>selectPost(post, 'Editar')} />
                 &nbsp;&nbsp;&nbsp;
                 <DeleteIcon onClick={()=>selectPost(post, 'Eliminar')}/>
                 </TableCell>

             </TableRow>

           ))}
         </TableBody>
       </Table>
     </TableContainer>


     <Modal
     open={modalInsertar}
     onClose={abrirCerrarModalInsertar}>
        {bodyInsertar}
     </Modal>


     <Modal
     open={modalEditar}
     onClose={abrirCerrarModalEditar}>
        {bodyEditar}
     </Modal>


     <Modal
     open={modalEliminar}
     onClose={abrirCerrarModalEliminar}>
        {bodyEliminar}
     </Modal>

  </div>
)
};

export default ListadoTareas;

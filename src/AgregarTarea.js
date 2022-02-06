import React from 'react';



const url='https://waco-api.herokuapp.com/api/posts'



//CREAR
/*
const updatePosts= () => {
    try{ 

const url='https://waco-api.herokuapp.com/api/posts/10'


const data= {

    title: "New Title",
    body: " New body",

  }


  const fetchData = {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json',
      }
  }

   fetch(url, fetchData)
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
    
    }
    catch (error){
        console.log(error) 
    }
    }


    updatePosts();


    

*/









/*
//BORRARR
const deleteData = async ( ) =>{
    const response = await fetch('https://waco-api.herokuapp.com/api/posts/7', {
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json'
        }
    });
 
   const data = await response.json( );
 
   // now do whatever you want with the data  
    console.log(data);
 };
 deleteData( );

*/


/*


//CREAR
const sendPosts= () => {
    try{ 

const url='https://waco-api.herokuapp.com/api/posts'


const data= {
    title: "Title",
    body: "Post body",
    user_uuid: "8SDA6VDZGUjkbJBDTGgB123Ds8ENG6"
  }


  const fetchData = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json',
      }
  }

   fetch(url, fetchData)
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
    
    }
    catch (error){
        console.log(error) 
    }
    }


    sendPosts();


    */
const AgregarTarea = () => {







  return <div>

      AgregarTarea
      
  </div>;
};

export default AgregarTarea;

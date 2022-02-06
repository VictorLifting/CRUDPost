import React, {useEffect, useState} from "react";
import { app } from "./firebase-config";
import Button from '@mui/material/Button';
import AgregarTarea from "./AgregarTarea";
import ListadoTareas from "./ListadoTareas";
import { Box } from "@mui/material";









///prueba con el video nuevo de mui
















/*

peticion
.then(resp => resp.json()).then(({data})=>{
    console.log(data)
    realData = data
}).catch(console.log())
*/





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

  /*  
    const fakeData=[
        {
            "id": 20,
            "title": "eos",
            "body": "Reprehenderit dolores sit in cum. Magnam sint aspernatur enim eligendi saepe. Nemo occaecati hic sed placeat molestiae recusandae. Quaerat laboriosam sit ut provident. Itaque praesentium quia amet rerum aut et. Cupiditate hic saepe vitae quidem libero quaerat perspiciatis. Recusandae velit quos officia. Ut assumenda cumque error quo suscipit.",
            "link": "https://waco-api.herokuapp.com/api/posts/20",
            "user": "a21e19f5-3ac9-4c6f-874b-9542fc17b623"
          },
          {
            "id": 21,
            "title": "aut",
            "body": "Consequatur consequatur est consequuntur fugiat eum magni modi. Reiciendis voluptas voluptatem omnis. Facilis ut nemo ea. Commodi possimus odit omnis velit est sunt dolorum. Qui accusantium laudantium sed odit quia corporis. Saepe quia mollitia quidem et.",
            "link": "https://waco-api.herokuapp.com/api/posts/21",
            "user": "8c0ee54e-9b52-4dda-a0b3-e8015abeadab"
          },
          {
            "id": 22,
            "title": "consequuntur",
            "body": "Ut doloribus ab laborum error et. Culpa fuga magnam quae cumque itaque excepturi. Ut in corporis cupiditate ullam. Voluptas eveniet quam ratione quas rem et. Earum aut officia voluptas distinctio nihil pariatur. Id voluptatum dolore dolorum voluptatibus odit ducimus illum neque. Quod vel soluta molestiae iste animi perferendis molestiae. Et ut voluptatibus sed vero qui soluta.",
            "link": "https://waco-api.herokuapp.com/api/posts/22",
            "user": "610a26f2-188b-430c-9857-e75fc93625a2"
          },
          {
            "id": 23,
            "title": "praesentium",
            "body": "Corporis occaecati tenetur magni. Quo aut amet incidunt doloribus est. Magni pariatur est qui voluptas. Et qui quibusdam aliquid omnis itaque illum est. Reiciendis non qui cum incidunt. Et odit exercitationem corporis neque. Voluptatibus corrupti numquam quia quia cum necessitatibus aliquid vitae.",
            "link": "https://waco-api.herokuapp.com/api/posts/23",
            "user": "e914b218-375e-4637-b921-12870136d82e"
          },
          {
            "id": 24,
            "title": "totam",
            "body": "Asperiores aut consectetur a rerum eum est. Consectetur dolore dolorem minima saepe. Dignissimos illo assumenda est molestiae et cum quasi. Earum sit distinctio in officia facilis nobis minus. Eius nesciunt eveniet voluptate veniam non numquam et. Blanditiis eligendi unde non. Sed dolorem aut nisi et reiciendis veniam cupiditate. Sunt alias aut animi et. Dicta nostrum fuga similique. Natus necessitatibus iusto atque porro eveniet quis repellendus. Perspiciatis aut et quidem officiis molestiae placeat enim.",
            "link": "https://waco-api.herokuapp.com/api/posts/24",
            "user": "106876b9-d3c2-4d49-849c-3a11cd5fb7ae"
          },
          {
            "id": 25,
            "title": "sit",
            "body": "Nihil id repellat enim quam est illum. Eos et excepturi praesentium asperiores dolores. Quos similique quisquam asperiores consectetur nostrum accusamus omnis eius. Eveniet dignissimos quia reprehenderit vitae. Esse quia accusamus sed magnam voluptatibus deleniti esse. Perferendis aut dolore fuga non eum amet.",
            "link": "https://waco-api.herokuapp.com/api/posts/25",
            "user": "079dc3d2-efda-4c81-a17f-38f1b4abc7cb"
          },
          {
            "id": 26,
            "title": "in",
            "body": "Error nemo debitis sit et dignissimos voluptas quas quae. Perspiciatis laboriosam laborum deserunt blanditiis qui sed facilis. Sed quia ut ut excepturi nesciunt aspernatur quas. Deserunt praesentium autem id est. Sint ipsam maiores ducimus praesentium suscipit ex accusantium deleniti. Facere quia id aut eum amet. Labore sed iure error corrupti. Eos sed est facere natus excepturi omnis ipsum. Doloribus tempora quaerat asperiores.",
            "link": "https://waco-api.herokuapp.com/api/posts/26",
            "user": "0a02765f-eca4-4f92-a8b7-f37806ecf672"
          },
          {
            "id": 27,
            "title": "placeat",
            "body": "Nesciunt fuga consectetur quisquam soluta. Adipisci sunt ut repellendus numquam deleniti occaecati. Molestiae et repudiandae sequi eius quisquam labore autem. Omnis consequatur accusantium repellendus totam. Debitis placeat excepturi rem fugiat sint voluptate. Et deleniti quo illo laudantium aut quas.",
            "link": "https://waco-api.herokuapp.com/api/posts/27",
            "user": "6dddee10-8c9b-4b0a-91b6-d599f085183d"
          },
          {
            "id": 28,
            "title": "quibusdam",
            "body": "Suscipit voluptates quia nisi in quam rerum explicabo. Quo recusandae aliquam itaque asperiores. Quasi possimus minus doloribus eos optio quas neque. Placeat modi consectetur doloribus labore. Animi aut voluptatibus neque assumenda in molestiae recusandae consequatur. Tempore velit quis eum optio quos ex velit. Perspiciatis voluptatem voluptas aliquam quae.",
            "link": "https://waco-api.herokuapp.com/api/posts/28",
            "user": "b926c0c2-fc13-4d72-ac5f-0708bbedd478"
          },
          {
            "id": 29,
            "title": "in",
            "body": "Voluptatem qui in non possimus quia maxime nihil. Ex numquam cum tempora ipsa et aut. Recusandae quam neque praesentium sapiente voluptatibus veritatis. Cumque quia deserunt cupiditate molestias assumenda esse molestias. Impedit eum sapiente placeat suscipit.",
            "link": "https://waco-api.herokuapp.com/api/posts/29",
            "user": "7966aa96-0ad7-4576-9458-b9092ab16b6c"
          },
          {
            "id": 30,
            "title": "reprehenderit",
            "body": "Quae asperiores repellat asperiores asperiores commodi voluptas. Nihil molestiae rerum error sed asperiores. Occaecati soluta et voluptas id assumenda in. Repellendus dolor omnis praesentium ut quod. Necessitatibus minus rerum beatae recusandae in. Sunt ratione dolor minima est reprehenderit sint. Facere ad aut quas temporibus est impedit. Optio laboriosam magnam et. Voluptas aperiam excepturi illo voluptas rem vel aut.",
            "link": "https://waco-api.herokuapp.com/api/posts/30",
            "user": "5edf57ef-154d-4408-be65-4eb0afe5d226"
          },
          {
            "id": 31,
            "title": "provident",
            "body": "Consectetur et velit nulla provident. Quis labore inventore optio sit accusantium. Exercitationem molestiae veritatis necessitatibus id fugiat a. Saepe sint ut magnam aliquam aliquid ducimus sed. Sint recusandae accusantium dignissimos. Facere perferendis ut quod maxime ipsam sed. Molestias ipsam natus qui non. Quasi cupiditate dolores assumenda sint explicabo.",
            "link": "https://waco-api.herokuapp.com/api/posts/31",
            "user": "95232260-4836-4c34-b8f3-fd5100d9e90a"
          },
          {
            "id": 32,
            "title": "vero",
            "body": "Ullam tempora ad velit debitis eveniet delectus aut. Iusto veritatis blanditiis excepturi et qui dolores. Deleniti excepturi ut dolore laborum. Facere expedita alias provident quis aut iusto natus. Qui voluptatibus est velit explicabo eos dolore. Ut quaerat qui velit repudiandae. Consequatur ut exercitationem quae in nihil et. Quo omnis exercitationem officiis facere sed quidem. Ut quia et ut sit a beatae perspiciatis. Dolore in mollitia vero facere.",
            "link": "https://waco-api.herokuapp.com/api/posts/32",
            "user": "d01b3899-c5d4-4f80-b486-33e14f619bca"
          },
          {
            "id": 33,
            "title": "cum",
            "body": "Distinctio maiores accusantium dolorem earum consequuntur adipisci inventore. Voluptatem id nesciunt nihil rerum ad rerum ea. Et distinctio id sequi maiores repudiandae fugit. Iusto unde ex quia suscipit. Aut odio adipisci aliquid officiis in. Et rerum aperiam qui tempore nesciunt alias. Quae iure modi maxime quas.",
            "link": "https://waco-api.herokuapp.com/api/posts/33",
            "user": "3daf6ac0-2c28-4731-b7df-4eb70ec55a59"
          },
          {
            "id": 34,
            "title": "libero",
            "body": "Et molestiae cupiditate explicabo excepturi consequatur. Aut tempora est perferendis eligendi repellat velit. Ea consequuntur quia esse corporis perspiciatis. Eos sunt architecto enim suscipit ullam aut. Tenetur sunt ut ipsam assumenda tempora aliquam. Et ratione necessitatibus consectetur cumque nemo possimus. Illo velit quam nesciunt neque atque. Libero distinctio itaque necessitatibus. Adipisci veniam ullam repellat aperiam veritatis ipsa ullam. Non aspernatur dolore quis vel ut quia doloremque quas. Quisquam impedit ut dolorum saepe rerum est blanditiis assumenda.",
            "link": "https://waco-api.herokuapp.com/api/posts/34",
            "user": "07774b2e-f252-4b50-9d9c-c608d739eb99"
          }
    ]

*/



    return(

        <Box>

            Bienvenido, sesión iniciada

            <Button variant="outlined" onClick={cerrarSesion}>cerrar sesión</Button>

            <hr /> 

            <div>

            <AgregarTarea/>

            <hr /> 
            </div>

            <div>
            
            <ListadoTareas arrayTareas={realData}/>
                
            </div>



        </Box>
    )
}

export default Home;
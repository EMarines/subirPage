<script>
  import { db } from '../assets/db.js'
  import { Router, Route, Link } from "svelte-navigator";
  import Contactos from './Contactos.svelte';
  import Propiedades from './Propiedades.svelte';
  import Agenda from './Agenda.svelte';
  import Sinergias from './Sinergias.svelte';
  import { formatDate } from '../assets/funcions/sevralFunctions'
  

  let fecha;
  let ordeTodos= [];
  let todos= [];

   function buscarItems(){
    // window.location.href="/contactos"
    console.log("diste click")
   }
  

</script>

<body>

  <!-- Router Menú -->
  
    <div class="wrapper-grid">
      <Router>

        <Link to= "/contactos" title = "contactos">
          <div class="container" >
            <div class="optionCard">
              <img src="src/assets/add-user.png" alt='Buzon' class="profile-img">
              <h1 class="name">Contactos</h1>
            </div>
          </div>  
        </Link>

        <Link to= "/propiedades" title = "propiedades">
          <div class="container" >
            <div class="optionCard">
              <img src="src/assets/house.png" alt='propiedad' class="profile-img">
              <h1 class="name">Propiedades</h1>
            </div>
          </div>  
        </Link>

        <Link to= "/agenda" title = "agenda">
          <div class="container" >
            <div class="optionCard">
              <img src="src/assets/schedule.png" alt='agenda' class="profile-img">
              <h1 class="name">Agenda</h1>
            </div>
          </div>  
        </Link>

        <Link to= "/sinergias" title = "sinergias">
          <div class="container" >
            <div class="optionCard">
              <img src="src/assets/team.png" alt='sinergias' class="profile-img">
              <h1 class="name">Sinergias</h1>
            </div>
          </div>  
        </Link>
      
      </Router>

      <Route path="/contactos">
        <Contactos />
      </Route>

      <Route path="/propiedades">
        <Propiedades />
      </Route>

      <Route path="/agenda">
        <Agenda />
      </Route>

      <Route path="/propiedades">
        <Propiedades />
      </Route>

      <Route path="/sinergias">
        <Sinergias />
      </Route>

    </div>


<!-- AGENDA -->
   <div class="show-home">

     <div class="container">
       <div class="schedule">
         <h1>Agenda</h1>    
         <h3>Tareas</h3>

         <ol>
           {#each ordeTodos as item}
             {#if new Date(item.endTask) <= new Date()}
               {#if !item.timeTask}
                 <ul>
                   <li class:complete={item.isComplete}>               
                       {formatDate(item.endTask)} - -
                       {item.task} - -
                       {#if item.notes}
                           {item.notes} 
                       {/if}          
                   </li>
                 </ul>
               {/if}          
             {/if}
           {:else}
             <p>No Hay Tareas Pendientes Para Hoy</p>              
           {/each}
         </ol>

         <h3>Citas</h3>
         <ol>
           {#each todos as item}
             {#if new Date(item.endTask) <= new Date()}
               {#if item.timeTask}
                 <ul>
                   <li class:complete={item.isComplete}>
                       <spam>
                         {item.timeTask} - -
                         {formatDate(item.endTask)} - -
                         {item.task} - -
                         {#if item.notes}
                             {item.notes} 
                         {/if}            
                       </spam>        
                   </li>
                 </ul>
               {/if}
             {/if}
           {:else}
               <p>No Hay Citas Pendientes Para Hoy</p>
           {/each}
               <!-- <p class="error">{error}</p> -->
         </ol>
       </div>
     </div>

<!-- BITÁCORA -->
     <div class="container">
       <div class="schedule">
         <!-- <Binnacle/>  -->
       </div>
     </div>

   </div>

   </body>

<style>

.wrapper-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, 13rem);
  justify-content: center; 
}

.optionCard{
  width: 100%;
  height: auto;
  background-color: aquamarine;

}

/* .banner-img {
    position: absolute;
    height: 10rem;
    width: 100%; */
    /* background-image: url(https://images.unsplash.com/photo-1582727657635-c771002bdada?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ); */
    /* background-position: center;
    background-repeat: no-repeat;
    background-size: contain; */
  /* }  */

  .profile-img {
    width: 8rem;
    clip-path: circle(70px at center);
    margin-top: 1.5rem;
  }

  .name {
    font-weight: bold;
    font-size: 1.5rem;
  }



</style>

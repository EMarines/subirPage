<script>
  let fecha;
  let ordeTodos= [];
  let todos= [];

    // Router
        const goContacts = () => {
          console.log("estas en cotnactos")
          window.location.href='/contactos'
        }
          
        const goPropieties = () => {
          window.location.href='/propiedades'
        }

        const goToDo = () => {
          window.location.href='/todo'
        }

    // Formato para fecha para Mostrar
        function formatDate(fecha){
            fecha = new Date(fecha)
            let dia = fecha.getDate()+1;
            let mes = fecha.getMonth()+1;
            let ano = fecha.getFullYear();
            return (`${dia}-${mes}-${ano}`)
          }

    // Formato para fecha para Filtrar
        function formatDateFiltrar(fecha){
          fecha = new Date(+fecha)
            let dia = fecha.getDate();
            let mes = fecha.getMonth()+1;
            let ano = fecha.getFullYear();
            return (`${ano}-${mes}-${dia}`)
          }


   //  function buscarItems(){
   //    properties.forEach(element => console.log(element.locaProperty, element.nameProperty))
    
   //  }


</script>

<body>
    <div class="wrapper-grid">
  
        <div class="container" on:click={goContacts}>
          <div class="optionCard">
            <!-- <div class='banner-img'></div> -->
            <img src="src/assets/add-user.png" alt='Buzon' class="profile-img">
            <h1 class="name">Contactos</h1>
          </div>
        </div>  
 
      <div class="container" on:click={goPropieties}>
        <div class="optionCard">
          <!-- <div class='banner-img'></div> -->
          <img src="src/assets/house.png" alt='Propiedades' class="profile-img">
          <h1 class="name">Propiedades</h1>
        </div>
      </div>
 
      <div class="container" on:click={goToDo}>
        <div class="optionCard">
          <!-- <div class='banner-img'></div> -->
          <img src="src/assets/schedule.png" alt='Buzon' class="profile-img">
          <h1 class="name">Agenda</h1>
        </div>
      </div>
 
      <div class="container" >
        <div class="optionCard">
          <img src='src/assets/team.png' alt='Bolsa Inmobiliaria' class="profile-img">
          <h1 class="name">Sinergias</h1>
        </div>
      </div>
        <!-- <div class='banner-img'></div> -->

    </div>
<!-- BOTON (provicional)-->
   <!-- <button on:click={buscarItems}>Buscar Info</button> -->

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

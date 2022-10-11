<script>
   // Importaciones
      import house from '../assets/images/house.png';
      import Search from '../components/Search.svelte';
      import CardProperty from '../components/CardProperty.svelte';
      import { property, systStatus, proInterest } from '../stores/stores'
      import { searchProperty } from '../assets/funcions/search'
      import { scale } from 'svelte/transition';
      import { expoInOut } from 'svelte/easing';
      import SelectProperty from '../components/SelectProperty.svelte';
      import { dbProperties } from '../firebase';
      import AltaPropiedad from './AltaPropiedad.svelte';
      import { db } from '../assets/db'
      import About from './About.svelte';
      // import { properties } from './../assets/parameters.js';
      // import { searchProperty } from './../assets/funcions/search.js';
      // import checkLoggedIn from "./router";
      // import {navigate} from "svelte-routing";

   // Decalaraciónes
      let searchTerm;
      let contCheck = [];
      let proRender = [];
      let item;

      $systStatus = "start";

      proRender = dbProperties;

   // Funciones
      // CRUD
            function handAddPrperty(){
               $systStatus = "propAdding"
            }
      
            function searProp(searchTerm) {
               $systStatus = "showProperties"
               let properties = dbProperties
               // window.location.href = '/about';
               proInterest.set(searchProperty(properties, searchTerm))
            }
            
            function selectProduct(item) {
               console.log($systStatus)
               $property = item
               $systStatus = "propSelect"
               console.log($systStatus, $property)

            };

  

</script>


      <!--Encabezado de Propiedades  -->
         <div>
         <div>
            <h1>Estas en Propiedades</h1>
            <img src={house} alt="propiedad" class="imgTitle">
         </div>
         {#if $systStatus = "start"}  
            <button on:click={handAddPrperty}>Alta de Propiedad</button>
            <Search bind:searchTerm on:input={() => searProp(searchTerm)} />
         {/if}
      <!-- Propiedades -->
         {#if $systStatus === "start"}
            <main id="bookshelf">
               {#each dbProperties as item}
                  <section class = "property" on:click={() => selectProduct(item)} transition:scale={{duration: 500, easing: expoInOut}}>                  
                     <input type="checkbox" value={item.urlProp} class="form-check" bind:group={contCheck}/>	
                     <CardProperty {...item} />
                  </section>
               {/each}
            </main>
         
      <!-- Propiedad seleccionada -->
         {:else if $systStatus === "propSelect"}
            <div>
               <SelectProperty {$property} /> 
            </div>
            
      <!-- Edición de propiedad -->           
               {:else if $systStatus  === "propEditing"}               
                  <div class="container"> 
                     <AltaPropiedad {...$property} />
                  </div> 

      <!-- Alta de propiedad -->             
               {:else if $systStatus === "propAdding"}
                  <div class="container">
                     <AltaPropiedad  />
                  </div>   
               {/if}
            
            
      </div>

 <style>

   main#bookshelf {
      width: 100%;
      margin: 10px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: center; 
   }

   .property { 
      width: 280px;
      min-height: 354px;
      border: 4px solid #BA5626; 
      border-radius: 3px;
      box-shadow: 1px 1px 0 black;
      margin: 5px;
      background-color: #e4ddcf;
   }

   .imgTitle{
      max-width: 148px;
   }


 </style>
<script>
   // Importaciones
   import { db } from '../assets/db'
   import house from '../assets/images/house.png';
   import Search from '../components/Search.svelte';
   import CardProperty from '../components/CardProperty.svelte';
   import { property, systStatus, proInterest } from '../stores/stores'
   import { searchProperty } from '../assets/funcions/search'
   import { scale } from 'svelte/transition';
   import { expoInOut } from 'svelte/easing';
   import SelectProperty from '../components/SelectProperty.svelte';
   import { dbProperties } from '../firebase';
   import selectedProperty from '../components/SelectProperty.svelte'
   import About from './About.svelte';
   // import { properties } from './../assets/parameters.js';
   // import { searchProperty } from './../assets/funcions/search.js';
   // import checkLoggedIn from "./router";
   // import {navigate} from "svelte-routing";

   // Decalaraciónes
      let searchTerm;
      let contCheck = [];
      let item;
      let seeProp = true;

      $proInterest = dbProperties;
   // Funciones
         function altaProp() {
         }
         
         function searProp(searchTerm) {
            $systStatus = "showProperties"
            let properties = db.properties
            // window.location.href = '/about';
            proInterest.set(searchProperty(properties, searchTerm))
         }
         
         function selectProduct(item) {
            $property = item
            seeProp = false;
            // location.href = '/selectedProperty'
         }

</script>

         <div>
            <h1>Estas en Propiedades</h1>
            <img src={house} alt="propiedad" class="imgTitle">
         </div>

         {#if seeProp}  
            <button on:click={altaProp}>Alta de Propiedad</button>
            <Search bind:searchTerm on:input={() => searProp(searchTerm)} />
            <main id="bookshelf">
               {#each $proInterest as item}
                  <section class = "property" on:click={() => selectProduct(item)} transition:scale={{duration: 500, easing: expoInOut}}>                  
                     <input type="checkbox" value={item.urlProp} class="form-check" bind:group={contCheck}/>	
                     <CardProperty {...item} />
                  </section>
               {/each}
            </main>
         {:else}
            <SelectProperty {...$property} />
         {/if}

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
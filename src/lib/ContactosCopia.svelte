<script>
   // @ts-nocheck
   
      // Importaciones
         import { db } from '../assets/db';
         import user from '../assets/images/add-user.png';
         import ContactCard from '../components/ContactCard.svelte';
         import Search from '../components/Search.svelte';
         import SelectedContact from '../components/SelectedContact.svelte';
         import { dbContacts } from '../firebase.js';
         import { conInterest, contact, proInterest, systStatus } from '../stores/stores';
         import AltaContacto from './AltaContacto.svelte'   
   
      // Declaraciónes
         let searchTerm;
         let toRender = [];
         $systStatus = "start";
         // $conInterest = dbContacts;
   
        
      // Funciones 
         // Agregar contacto
            const handAddContact = () => {
               // $contact = [];
               $systStatus = "contAdding"
            };
   
         // Contacto Seleccionado
            const selectContact = (item) => {
               // console.log(item)
               $contact= item
               $systStatus = "contSelect";
            };
   
         // Search contacto
            function searCont() {
               return toRender= dbContacts.filter((contacto) => {
                  let contInfo = (contacto.name + " " + contacto.lastname).toLowerCase();
               return contInfo.includes(searchTerm.toLowerCase());
               });
            };
   
         // Ordena dbContacts por fecha
            (() => {
               return toRender = dbContacts.sort((a, b) => {
                  if(a.createdAt < b.createdAt){
                     return 1;
                  }
                  if(a.createdAt > b.createdAt){
                     return -1;
                  }
                  return 0
               });
            })();
   
   
            
   
   </script>
   
      <!-- Encabezado de Contactos e imagen -->
         <main class="container">
            <div>
               <h1>Contactos</h1>
               <img src={user} alt="contactos">
            </div>
   
            {#if  $systStatus === "start"}
               <h2>{dbContacts.length} Contactos a Mostrar</h2>
               <button on:click={handAddContact}>Alta de Contacto</button>
   
               <Search bind:searchTerm on:input={searCont} />  
                           
               {#if $systStatus == "start"}
                  <div>    
                     {#each toRender as item}     
                           <div class="selecContact" on:click = {()=> selectContact(item)}>
                              <ContactCard {...item} />
                           </div>
                     {/each}         
                  </div>
               {/if}
   
            {/if}
   
      <!-- Contacto Seleccionado -->
            {#if $systStatus === "contSelect"} 
               <div>
                  <SelectedContact {$contact}/>
               </div>
            {/if}
   
            {#if $systStatus  === "contEditing" || $systStatus === "contAdding"}
               <div>
                 <div class="container"> 
                   <AltaContacto {...$contact} />
                 </div>
               </div>
           {/if}
   
         </main>
   
     
   
   <style>
      img{
         max-width: 148px;
      }
   </style>
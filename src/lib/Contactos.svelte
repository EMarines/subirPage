<script>
	// import { contact } from './../stores/stores.js';
      import Search from '../components/Search.svelte';
      import { db } from '../assets/db';
      import ContactCard from '../components/ContactCard.svelte';
      import user from '../assets/images/add-user.png';
      import { contact, systStatus } from '../stores/stores';
      import SelectedContact from '../components/SelectedContact.svelte';
      import CardProperty from '../components/CardProperty.svelte';
//   import AltaContacto from './AltaContacto.svelte';
//   import About from './About.svelte';
      
   // Declaraciónes
      let searchTerm;
      let filteredContacts = [];
      let listToRender = db.contacts
      let commInpuyBinnacle;
      let commBinnacle;
      let checkedProperty;
      let binnacle;
      // let item = "";
      let showList = false;
      let item;

      $systStatus = "start"

   // Funciones 

         function addContact(){
            // window.location.href="/altaContacto"
         };

         const selectContact = (item) => {
            $contact= item
            console.log($contact);
            $systStatus = "contSelect";
            // showList= true;
         };

         console.log($systStatus)
</script>

   <!-- Inicio de Contactos -->
      <main>
         <div>
            <h1>Contactos {$systStatus}</h1>
         </div>
         <img src={user} alt="contactos">

         {#if  $systStatus === "start"}
            <h2>Contactos a Mostrar</h2>
            <button on:click={addContact}>alta de contacto</button>

   <!-- <Search bind:searchTerm on:input={searchContact} />   -->
                        
            <!-- {#if $systStatus == "start"} -->
               <div>    
                  {#each listToRender as item}     
                        <div class="selecContact" on:click = {()=> selectContact(item)}>
                           <ContactCard {...item} />
                        </div>
                  {/each}         
               </div>
            <!-- {/if} -->

         {/if}

   <!-- Contacto Seleccionado -->
         {#if $systStatus === "contSelect"} 
            <div>
               <SelectedContact {$contact}/>
            </div>
            <!-- {#if $systStatus === "showProperties" && $proInterest.length > 0}
               <div>
                  <CardProperty />
               </div>
            {/if} -->
         {/if}
         <!-- 
               {#if $systStatus === "contEditing"}
                     <AltaContacto {...contact} />
               {/if} -->

      </main>

<style>
   img{
      max-width: 148px;
   }
</style>
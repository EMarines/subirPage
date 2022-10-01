<script>
	// import { contact, proInterest, conInterest } from './../stores/stores.js';
      import Search from '../components/Search.svelte';
      import { db } from '../assets/db';
      import ContactCard from '../components/ContactCard.svelte';
      import user from '../assets/images/add-user.png';
      import { contact, systStatus, proInterest, conInterest} from '../stores/stores';
      import SelectedContact from '../components/SelectedContact.svelte';
      // import CardProperty from '../components/CardProperty.svelte';
//   import AltaContacto from './AltaContacto.svelte';
//   import About from './About.svelte';
      
   // Declaraciónes
      let searchTerm;
      // let filteredContacts = [];
      // let commInpuyBinnacle;
      // let commBinnacle;
      // let checkedProperty;
      // let binnacle;
      // let showList = false;
      // let item;

      $conInterest = db.contacts
      $systStatus = "start"

   // Funciones 
      // Agregar contacto
         function addContact(){
            // window.location.href="/altaContacto"
         };

      // Contacto Seleccionado
         const selectContact = (item) => {
            $contact= item
            $systStatus = "contSelect";
         };

      // Search contacto
         function searCont() {
            console.log(searchTerm, $conInterest)
            return $conInterest= db.contacts.filter((contacto) => {
               let contInfo = (contacto.name + " " + contacto.lastname).toLowerCase();
            return contInfo.includes(searchTerm.toLowerCase());
            });
         };

</script>

   <!-- Inicio de Contactos -->
      <main>
         <div>
            <h1>Contactos</h1>
         </div>
         <img src={user} alt="contactos">

         {#if  $systStatus === "start"}
            <h2>Contactos a Mostrar</h2>
            <button on:click={addContact}>alta de contacto</button>

            <Search bind:searchTerm on:input={searCont} />  
                        
            {#if $systStatus == "start"}
               <div>    
                  {#each $conInterest as item}     
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
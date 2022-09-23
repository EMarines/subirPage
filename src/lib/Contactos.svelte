<script>
	// import { systStatus } from './../stores/stores.js';

	// import { Router, Route, Link  } from 'svelte-navigator';
      import Search from '../components/Search.svelte'
      import { db } from '../assets/db'
      import ContactCard from '../components/ContactCard.svelte'
      import user from '../assets/images/add-user.png'
      import { contact, systStatus } from '../stores/stores'
      import SelectedContact from '../components/SelectedContact.svelte'
      
      
   // Declaraciónes
      let searchTerm;
      let filteredContacts = [];
      let listToRender = db.contacts
      // let systStatus = "start"
      console.log("el valor es ", $systStatus);
   // Funciones 

         function addContact(){
            window.location.href="/altaContacto"
         };

         const selectContact = (item) => {
            contact.set(item)
            $systStatus="contSelect";
            console.log($systStatus)
         };

   // Input filter ""searchContact""
      const searchContact = () => {
         if (searchTerm.length > 0){
            listToRender = filteredContacts
         } else {
            listToRender = db.contacts
         }
            return (filteredContacts = db.contacts.filter((contact) => {
            let contInfo = (contact.name + " " + contact.lastname + " " + contact.telephon).toLowerCase();
            return contInfo.includes(searchTerm.toLowerCase());
         }));
      };
</script>

   <main>
      <div>
         <h1>Contactos</h1>
         <button on:click={addContact}>alta de contacto</button>
      </div>
      <img src={user} alt="contactos">
      {#if  $systStatus == "start"}
         <h2>Contactos a Mostrar</h2>

         <Search bind:searchTerm on:input={searchContact} />  
                     
         {#if $systStatus == "start"}
            <div>    
               {#each listToRender as item}     
                     <div class="selectContact" on:click = {selectContact(item)}>
                        <ContactCard {...item} />
                     </div>
               {/each}         
            </div>
         {/if}

      {/if}

      {#if $systStatus === "contSelect"} 
         <div>
            <SelectedContact />
         </div>
      {/if}

   </main>

<style>
   img{
      max-width: 148px;
   }
</style>
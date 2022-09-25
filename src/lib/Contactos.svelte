<script>
      import Search from '../components/Search.svelte';
      import { db } from '../assets/db';
      import ContactCard from '../components/ContactCard.svelte';
      import user from '../assets/images/add-user.png';
      import { contact, systStatus, proInterest } from '../stores/stores';
      import SelectedContact from '../components/SelectedContact.svelte';
      import CardProperty from '../components/CardProperty.svelte';
  import AltaContacto from './AltaContacto.svelte';
  import About from './About.svelte';
      
   // Declaraciónes
      let searchTerm;
      let filteredContacts = [];
      let listToRender = db.contacts
      $systStatus = "start"
   // Funciones 

         function addContact(){
            window.location.href="/altaContacto"
         };

         const selectContact = (item) => {
            contact.set(item)
            $systStatus="contSelect";
            // console.log($contact.name)
            // window.location.href = "/about"
         };

   // Input filter ""searchContact""
      const searchContact = () => {
         if (searchTerm.length > 0){
            listToRender = filteredContacts
            console.log(searchTerm)
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
      </div>
      <img src={user} alt="contactos">

   <!-- Inicio de Contactos -->
      {#if  $systStatus == "start"}
         <h2>Contactos a Mostrar</h2>
         <button on:click={addContact}>alta de contacto</button>

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

   <!-- Contacto Seleccionado -->
      {#if $systStatus === "contSelect" || $systStatus === "showProperties"} 
         <div>
            <SelectedContact />
         </div>
         {#if $systStatus === "showProperties" && $proInterest.length > 0}
            <div>
               <CardProperty />
            </div>
         {/if}
      {/if}

      {#if $systStatus === "contEditing"}
            <AltaContacto {...contact} />
      {/if}

   </main>

<style>
   img{
      max-width: 148px;
   }
</style>
<script>
	// Importaciones
      import Search from '../components/Search.svelte';
      import { db } from '../assets/db';
      import ContactCard from '../components/ContactCard.svelte';
      import user from '../assets/images/add-user.png';
      import { contact, systStatus, proInterest, conInterest} from '../stores/stores';
      import SelectedContact from '../components/SelectedContact.svelte';
      import { dbContacts } from '../firebase.js'
      import AltaContacto from './AltaContacto.svelte';
      
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
            console.log(searchTerm, $conInterest)
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

   <!-- Inicio de Contactos -->
      <main>
         <div>
            <h1>Contactos</h1>
         </div>
         <img src={user} alt="contactos">

         {#if  $systStatus === "start"}
            <h2>{dbContacts.length} Contactos a Mostrar</h2>
            <button on:click={handAddContact}>alta de contacto</button>

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
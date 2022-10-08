<script>
	// import { database } from './../firebase.js';
	// Importaciones
      // import { collection, setDoc, Timestamp, addDoc, getDoc, getDocs } from 'firebase/firestore'
      import Search from '../components/Search.svelte';
      import { db } from '../assets/db';
      import ContactCard from '../components/ContactCard.svelte';
      import user from '../assets/images/add-user.png';
      import { contact, systStatus, proInterest, conInterest} from '../stores/stores';
      import SelectedContact from '../components/SelectedContact.svelte';
      import { dbContacts, database } from '../firebase.js'
      import AltaContacto from './AltaContacto.svelte'
      
   // Declaraciónes
      let searchTerm;
      $systStatus = "start";
      $conInterest = dbContacts;
      let editStatus = false;

      // async function addContact(contacto) {
      //    $systStatus = "contAdd"  
      //    const response = await database.collection("contacts").add(contacto);
      // }

      let contacto = {
         name: "Pito",
         lastname: "Perez"
      }


   // Funciones 
      // Agregar contacto
         // Manejo de edicion o alta
            const handleSubmit = () => {
               $systStatus = "contEditing"
               //    if  (!editStatus) {
               // addContact();
               // // console.log("Contacto guardado")
               // } else {
               // updateContact();                
               // }
            };

         // Añadir contacto
            // const addContact = async () => {  
            //    $systStatus = "contAdd"  
            //    try {
            //       // commBinnacle = (`Se le agregó al contacto: ${contact.name} ${contact.lastname} del ${contact.telephon}`)
            //       // noteBinnacle = {"date": Date.now(), "comment": commBinnacle}  ****agregar noteBinnacle a saveBinnacle          
            //       // await database.collection("contacts").doc().set({ ...contact, createdAt: Date.now() });
            //          database.collection("contacts").add({contacto})
            //          // const contactAdd = collection(database, "contact")
            //          // saveBinnacle(noteBinnacle, contact);
            //          $systStatus = "contSelect"                                
            //    } catch (error) {
            //       console.log(error)
            //    }        
            // };

         // Edita Contacto
               const updateContact = async () => {
               //    if (editingItem === "sendProperty") {
               //       contact.sendedProperties.push(claEB)
               //    } else {
               //       commBinnacle = (`Se le editó a: ${contact.name} ${contact.lastname} del ${contact.telephon}`)
               //       binnacle = {"date": Date.now(), "comment": commBinnacle}                
               //       saveBinnacle(binnacle);
               //    }
               //       await db.collection("contacts").doc(currentId).update(contact);                
               //       editingItem = "";
               //       systStatus = "contSelect"; 
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
            <button on:click={handleSubmit}>alta de contacto</button>

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

         {#if $systStatus === "contAdd"}
               <AltaContacto {...contact} />
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
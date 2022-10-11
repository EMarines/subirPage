<script>
	import { searchTermG } from './../stores/stores.js';
  // Importaciones
    import { contact, systStatus,  } from '../stores/stores';
    import ContData from '../components/ContData.svelte';
    import PropData from '../components/PropData.svelte';
    import { db, dbContacts } from '../firebase.js';
    import { collection, addDoc, deleteDoc, getDoc, getDocs, doc, updateDoc} from 'firebase/firestore';
    import { now } from 'svelte/internal';

  // Decalraciones
    let editStatus = false;
    
  // Funciones
    // Edición o Alta de contacto
        async function handSubmit($contact) {  
          console.log($contact)        
          if($systStatus != "contEditing"){
               const todoToAdd = collection(db, "contacts")
               await addDoc(todoToAdd, $contact);
            } else {
               await updateDoc(doc(db, "contacts", $contact.id), $contact)
               editStatus = false;
            }
            $contact = []; 
            // searchTerm = "";
            location.href = "/"
        };

          // const db = firebase.firestore();
    // Añadir Contacto y Bitácora
          export  function addContact (tarea) {  
            try {
              // commBinnacle = (`Se le agregó al contacto: ${contact.name} ${contact.lastname} del ${contact.telephon}`)
              // noteBinnacle = {"date": Date.now(), "comment": commBinnacle}            
               // @ts-ignore
              //  database.contacts.add({contacto});
               console.log("se dio de alta a: ")
              const response =  collection(db, "todos")
              addDoc(response, tarea)
            

              // saveBinnacle(noteBinnacle, contact);
              // systStatus = "contSelect" 
                                          
            } catch (error) {
              console.log("error", error)
            }        
          };

    // Edita Contacto
            //     const updateContact = async () => {
            //   if (editingItem === "sendProperty") {
            //     contact.sendedProperties.push(claEB)
            //   } else {
            //     commBinnacle = (`Se le editó a: ${contact.name} ${contact.lastname} del ${contact.telephon}`)
            //     let binnacle = {"date": Date.now(), "comment": commBinnacle}                
            //     saveBinnacle(binnacle);
            //   }
            //     await db.collection("contacts").doc(contact.telephon).update(contact);                
            //     // editingItem = "";
            //     // systStatus = "contSelect"; 
            // };

    // Guardar bitácora
            const saveBinnacle = async (noteBinnacle) => {
              // await db.collection("binnacles") .doc().set({ ...noteBinnacle});
              // noteBinnacle=[];
              // // console.log("entró a guardar en bitácora", noteBinnacle)
            };

    // On Cancel
            function onCancel() {
              editStatus = true
              window.location.href = "./contactos"
            };

</script>

  <!-- ContData  Datos Personales del Contacto -->
            <div class="altaContactos">
              <!-- <form class="" on:submit|preventDefault={handSubmit}>       -->
                <ContData />
                <PropData />
                <div class="row align-center">              
                  <div class="col">        
                    <button on:click={()=>handSubmit($contact)}>{#if !editStatus}Guardar{:else}Editar{/if}</button>
                  </div>                  
                  <div class="col">
                    <button class="btn-outline-warning col-3 row" on:click={onCancel}>Cancel</button>
                  </div>
                </div>              
              <!-- </form> -->
            </div>
<script>
	// import { firebase } from '@firebase/app';
  // Importaciones
    import { contact } from '../stores/stores'
    // import { db } from '../assets/db'
    import ContData from '../components/ContData.svelte'
    import PropData from '../components/PropData.svelte';
    import { db } from '../firebase.js'
  import { addDoc, collection } from '@firebase/firestore';
  import { now } from 'svelte/internal';

  // Declraraciones
      let editStatus = false;
      let tarea = {
         notes: "Meliton",
         task: "Melate",
         createdAt: "25/nov/2022"
      }

      const tareas = collection(db, "todos")

      // let allPropertiesName = [];
      // let properties;
      // let commBinnacle;
      // let noteBinnacle;

  // Funciones
    // Edición o Alta de contacto
          function handleSubmit() {
            if  (!editStatus) {
              addContact();
              // console.log("Contacto guardado")
              } else {
                // updateContact();                
              }
          };

          // const db = firebase.firestore();
    // Añadir contacto
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
              <form class="" on:submit|preventDefault={addContact}>           

              <ContData />

  <!-- PropData Datos de la Propiedad  -->

              <PropData />

  <!--  Botones   -->
              <div class="row align-center">              
                <div class="col">        
                  <button>
                    {#if !editStatus}Guardar{:else}Editar{/if}</button>
                  </div>
                  
                  <div class="col">
                    <button class="btn-outline-warning col-3 row" on:click={onCancel}>Cancel</button>
                  </div>
                </div>
              
              </form>
            </div>
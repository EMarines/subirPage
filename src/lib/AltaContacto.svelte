<script>
	import Ubication from './../components/Ubication.svelte';
  import Stages from '../components/Stages.svelte'
  import Tags from '../components/Tags.svelte'
  import { typeProperties, modeContact, typeContacts, modePays, ranges, oneTofive, oneToFour, contactMode } from '../assets/parameters';
  import { db } from '../assets/db'

  let editStatus = false;
  let commBinnacle;
  let noteBinnacle;

  // Array contacto
      let contact = {
            name: "",
            lastname: "",
            telephon: "",
            email: "",
            selecMC: "",      // Modo de contacto
            propCont: "",     // Propiedad de contacto
            comContact: "",   // Comentarios
            rangeProp: "",    // Rango buscado
            contMode: "",     // Modo de contacto
            budget: "",       // Presupuesto tope
            numBeds:"",
            numBaths:"",
            halfBathroom: "",
            numParks:"",
            modePay: "",      // Modo de pago
            selecTP: "",      // Tipo de propiedad
            contactType: "",  // Modo de contacto
            contactStage: "", // Etapa del cliente
            locaProperty: [], // Localicacion buscada
            tagsProperty: [], // Etiquetas
            sendedProperties:[],  // Propiedades enviadas
          };
  // Funciones
          function handleSubmit() {
            if  (!editStatus) {
              addContact();
              // console.log("Contacto guardado")
              } else {
                // updateContact();                
              }
          };
    // Añadir contacto
          const addContact =  () => {  
            try {
              // commBinnacle = (`Se le agregó al contacto: ${contact.name} ${contact.lastname} del ${contact.telephon}`)
              // noteBinnacle = {"date": Date.now(), "comment": commBinnacle}            
               // @ts-ignore
               db.contacts.push({...contact});
              // await db.collection("contacts").doc().set({ ...contact, createdAt: Date.now() });

              // saveBinnacle(noteBinnacle, contact);
              // systStatus = "contSelect" 
                                          
              console.log("estas en addContact", db.contacts)  
              } catch (error) {
                console.log(error)
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

            const saveBinnacle = async (noteBinnacle) => {
                  await db.collection("binnacles") .doc().set({ ...noteBinnacle});
                  noteBinnacle=[];
                  // console.log("entró a guardar en bitácora", noteBinnacle)
                };

          function onCancel() {
            editStatus = true
            window.location.href = "./contactos"

          }



</script>
            <div class="altaContactos">
              <form class="" on:submit|preventDefault={handleSubmit}>
           
      <!-- Datos Personales del Contacto -->
                <div class="">

                  <h1 class="sectionTitle">Alta Contactos</h1>

                    <div class="">

                      <div class="contactInput">
                        <input type="text" placeholder="Nombre" bind:value={contact.name}  />
                      </div>
                      <div class="contactInput">
                          <input type="text" placeholder="Apellido" bind:value={contact.lastname} class="form-control"/>
                      </div>
                      <div class="contactInput">
                        <input type="tel" placeholder="telefono" bind:value={contact.telephon} class="form-control"/>
                      </div>
                      <div class="contactInput"> 
                        <input type="email" placeholder="email" bind:value={contact.email} class="form-control"/>
                      </div>
                    </div>

       
                     <!-- Tipo de Contacto -->
                       <select bind:value={contact.typeContact}>
                         <option disabled selected value="">Tipo de Contacto</option>
                         {#each typeContacts as typeContact}
                           <option type="checkbox" value={typeContact}>{typeContact}</option>
                         {/each}
                       </select>

                     <!-- Tipo de propiedad buscada -->
                       <select class="selTP" id="selTP" name="selTP" bind:value={contact.selecTP}>
                           <option disabled selected value="">Tipo de Propiedad</option>
                           {#each typeProperties as typeProperty}
                               <option type="checkbox" value={typeProperty}
                                 >{typeProperty}</option
                               >
                           {/each}
                         </select>

                     <!-- Propiedad de Contacto -->
                       <!-- <select class="selTP" id="selTP" name="selTP" bind:value={db.contact.propCont}>
                         <option disabled selected value="">Propiedad de Contacto</option>
                         {#each allPropertiesName as typeProperty}
                             <option type="checkbox" value={typeProperty}
                               >{typeProperty}</option
                             >
                         {/each}
                       </select> -->

                 
             
         <!-- Comentarios del contacto -->
             <div class="col">
               <input type="textarea" placeholder="Comentarios" bind:value={contact.comContact} class="form-control"/>
             </div>

             
         <!-- Tope de Presupuesto -->
               <div class="col">
                 <input type="number" placeholder="Presupuesto"bind:value={contact.budget} class="form-control"/>
               </div>
                 
         <!-- Modo de Contacto -->
               <select bind:value={contact.selecMC}>
                 <option disabled selected value="">Modo de Contacto</option>
                 {#each modeContact as mode}
                   <option type="checkbox" value={mode}>{mode}</option>
                 {/each}
               </select>

         <!-- Modo de Pago -->
               <select bind:value={contact.modePay}>
                 <option disabled selected value="">Modo de Pago</option>
                 {#each modePays as modeP}
                   <option type="checkbox" value={modeP}>{modeP}</option>
                 {/each}
               </select>

               </div>
  
       <!-- Características buscadas -->

               <select bind:value={contact.numBeds}>
                 <option disabled selected value="" ># Recámaras</option>
                 {#each oneTofive as numberBed}
                   <option type="checkbox" value={numberBed} >{numberBed} Recámaras</option>
                 {/each}
               </select>

       <!-- NÚMERO DE BAÑOS -->
               <select bind:value={contact.numBaths}>
                 <option disabled selected value=""># Baños</option>
                 {#each oneToFour as numberBath}
                   <option type="checkbox" value={numberBath}>{numberBath} baños</option>
                 {/each}
               </select>

       <!-- Medios baños -->
             <select bind:value={contact.halfBathroom}>
               <option disabled selected value=""># Medios Baños</option>
               {#each oneToFour as numberHalfBath}
                 <option type="checkbox" value={numberHalfBath}>{numberHalfBath} Medios baños</option>
               {/each}
             </select>

       <!-- NÚMERO DE ESTACIONAMIENTOS -->
               <select bind:value={contact.numParks}>
                 <option disabled selected value=""># Estacionamientos</option>
                 {#each oneToFour as numberParks}
                   <option type="checkbox" value={numberParks}>{numberParks} Estacionamientos</option>
                 {/each}
               </select>

       <!-- RANGO DE PRECIOS -->
               <select bind:value={contact.rangeProp}>
                 <option disabled selected value="">Rango Buscado</option>
                 {#each ranges as range}
                   <option type="checkbox" value={range}>{range}</option>
                 {/each}
               </select>

       <!-- Modo de contacto -->
               <select bind:value={contact.contMode}>
                 <option disabled selected value="">Modo de Contacto</option>
                 {#each contactMode as mode}
                   <option type="checkbox" value={mode}>{mode}</option>
                 {/each}
               </select>

    <!-- Tags -->
          <Ubication bind:ubication={contact.locaProperty}/>
          <Stages bind:value = {contact.contactStage} />
          <Tags bind:tag = {contact.tagsProperty} />

     <!-- Botones -->
           
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
 

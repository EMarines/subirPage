<script>
   // Importaciones
      import { onMount } from 'svelte';
      import { db } from '../assets/db';
      import { contact } from '../stores/stores'
      import { typeContacts, modeContact, modePays } from '../assets/parameters'
      import { dbProperties } from '../firebase';
      import { typeProperties, oneTofive, oneToFour } from '../assets/parameters'
      import Ubication from './Ubication.svelte';
      import Tags from './Tags.svelte'

   // Declaraciones
      var allPropertiesName = [];
      let properties = dbProperties;
      
      
      // Ponerle el nombre y clave como nombre de propiedad
      (() => {
         for(let eachProperty of properties) {
            let namProp =(`${eachProperty.nameProperty} ${eachProperty.claveEB}`)
            allPropertiesName = [...allPropertiesName, namProp ]
         }  
         return allPropertiesName = allPropertiesName.sort();
      })();
      
    
         // let $contact.createdAt = Date.now();
    


</script>
   <!-- Datos Personales -->
         <h1 class="sectionTitle">Alta Contactos</h1>

         <div class="">
            <div class="contactInput">
               <input type="date" placeholder="Fecha de Alta" bind:value={$contact.createdAt}  />
            </div>
            <div class="contactInput">
               <input type="text" placeholder="Nombre" bind:value={$contact.name}  />
            </div>
            <div class="contactInput">
                  <input type="text" placeholder="Apellido" bind:value={$contact.lastname} class="form-control"/>
            </div>
            <div class="contactInput">
               <input type="tel" placeholder="telefono" bind:value={$contact.telephon} class="form-control"/>
            </div>
            <div class="contactInput"> 
               <input type="email" placeholder="email" bind:value={$contact.email} class="form-control"/>
            </div>
         </div>

   <!-- Propiedad de Contacto -->
         <select class="selTP" id="selTP" name="selTP" bind:value={$contact.propCont}>
         <option disabled selected value="">Propiedad de Contacto</option>
            {#each allPropertiesName as typeProperty}
                  <option type="checkbox" value={typeProperty}>{typeProperty}</option>
            {/each}
         </select>

   <!-- Comentarios del contacto -->
         <div class="col">
            <input type="textarea" placeholder="Comentarios" bind:value={$contact.comContact} class="form-control"/>
         </div>

   <!-- Tope de Presupuesto -->
         <div class="col">
            <input type="number" placeholder="Presupuesto"bind:value={$contact.budget} class="form-control"/>
         </div>
         

   <!-- Tipo de Contacto -->
            <select bind:value={$contact.typeContact}>
               <option disabled selected value="">Tipo de Contacto</option>
                  {#each typeContacts as typeContact}
                     <option type="checkbox" value={typeContact}>{typeContact}</option>
                  {/each}
            </select>

   <!-- Modo de Contacto -->
            <select bind:value={$contact.selecMC}>
               <option disabled selected value="">Modo de Contacto</option>
               {#each modeContact as selecMC}
               <option type="checkbox" value={selecMC}>{selecMC}</option>
               {/each}
            </select>

   <!-- Modo de Pago -->
            <select bind:value={$contact.modePay}>
               <option disabled selected value="">Modo de Pago</option>
               {#each modePays as modeP}
               <option type="checkbox" value={modeP}>{modeP}</option>
               {/each}
            </select>

  
     <!-- Tipo de propiedad buscada -->
     <select class="selTP" id="selTP" name="selTP" bind:value={$contact.selecTP}>
      <option disabled selected value="">Tipo de Propiedad</option>
      {#each typeProperties as selecTP}
            <option type="checkbox" value={selecTP}>{selecTP}</option>
      {/each}
    </select>

<!-- Características buscadas -->
    <select bind:value={$contact.numBeds}>
      <option disabled selected value="" ># Recámaras</option>
      {#each oneTofive as beds}
        <option type="checkbox" value={beds} >{beds} Recámaras</option>
      {/each}
    </select>

    <select bind:value={$contact.numBaths}>
      <option disabled selected value=""># Baños</option>
      {#each oneToFour as bathroom}
        <option type="checkbox" value={bathroom}>{bathroom} baños</option>
      {/each}
    </select>

    <select bind:value={$contact.halfBathroom}>
      <option disabled selected value=""># Medios Baños</option>
      {#each oneToFour as numberHalfBath}
        <option type="checkbox" value={numberHalfBath}>{numberHalfBath} Medios baños</option>
      {/each}
    </select>

    <select bind:value={$contact.numParks}>
      <option disabled selected value=""># Estacionamientos</option>
      {#each oneToFour as park}
        <option type="checkbox" value={park}>{park} Estacionamientos</option>
      {/each}
    </select>

    <Ubication bind:ubication={$contact.locaProperty}/>
   <Tags bind:tag = {$contact.tagsProperty} />

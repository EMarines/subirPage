<script>
   // Importaciones
      import { onMount } from 'svelte';
      import { db } from '../assets/db';
      import { contact } from '../stores/stores'
      import { typeContacts, modeContact, modePays } from '../assets/parameters'

   // Declaraciones
      var allPropertiesName = [];
      let properties = db.properties;
  
   // Ponerle el nombre y clave como nombre de propiedad
      (function() {
            for(let eachProperty of properties) {
               let namProp =(`${eachProperty.nameProperty} ${eachProperty.claveEB}`)
            allPropertiesName = [...allPropertiesName, namProp ]
            }  
            return allPropertiesName = allPropertiesName.sort();
      })();      

</script>
   <!-- Datos Personales -->
         <h1 class="sectionTitle">Alta Contactos</h1>

         <div class="">
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
               {#each modeContact as mode}
               <option type="checkbox" value={mode}>{mode}</option>
               {/each}
            </select>

   <!-- Modo de Pago -->
            <select bind:value={$contact.modePay}>
               <option disabled selected value="">Modo de Pago</option>
               {#each modePays as modeP}
               <option type="checkbox" value={modeP}>{modeP}</option>
               {/each}
            </select>

            </div>
  
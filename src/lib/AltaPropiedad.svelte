<script>
    import { property } from '../stores/stores'
    import { db } from '../assets/db'
    import ContData from '../components/ContData.svelte'
    import PropData from '../components/PropData.svelte';

    let editStatus = false;

// Funciones
   // Alta o edición
         const handleSubmit = () => {
              if (!editStatus) {
               //  systStatus = "propAdd"
                addProperty();
              } else {
               //  systStat}us = "propEditing"
                updateProperty();
              }
            //   property.set("");
         };

         function addProperty() {

         };

         function updateProperty() {

         }

         const onCancel = () => {
            editStatus = false;
            window.location.href = "./propiedades"
         }

</script>



   <!-- ContData  Datos Personales del Contacto -->

            <div class="altaContactos">
              <form class="" on:submit|preventDefault={handleSubmit}>           

              <!-- <ContData /> -->

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
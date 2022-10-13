<script>
   
   // Importaciones
   import ContactCard from './CardProperty.svelte';
   import { db } from '../assets/db';
   import { conInterest, property } from '../stores/stores'
   import { filtPropContInte } from '../assets/funcions/filContacts'
	import { systStatus } from '../stores/stores';
      // import { filtPropContInte } from '../assets/funcions/rangValue'

   // Declaraciones
      let checkedContacts = [];
      let currentId;
      let seeCont = false;
      let lowRange, upRange;

   // Funciones
      // checked
         function checkedTCont(checkedContacts, $property ){

         }

      // Edit
         function editProperty() {
            console.log($property)
            $systStatus = "propEditing"
         }

      // Delete
         function deleteProperty(property) {

         }

      // Buscar Interesados
         function findCustomers() {
            // console.log("La propiedad es: ", $property)
            filtPropContInte($property, db.contacts)
            // console.log("siiiiiii", lowRange, upRange)
            seeCont = !seeCont;
         }; 

      // onCancel
         function onCancel() {
            location.href = "/propiedades"
         }

</script>
   <!-- Informacion de la propiedad -->
         <div class=" container selectProduct">   
               
            <div class="selectImage">
            <img src={$property.urlImage} alt={$property.nameProperty}>
            </div>            
            <div class="descSelect">
            <h4> {$property.claveEB} {$property.nameProperty}</h4>
            <h5>{$property.selecTP} en Col. {$property.colonia} al {$property.locaProperty} de la ciudad.</h5>
            <h6>Precio: {$property.price}</h6>
            <div>
               <h6>{$property.beds} Recamaras, {$property.bathroom} Baños y {$property.halfBathroom} Medio Baño</h6>
               
            </div>
               <h6>{$property.areaBuilding} m2 de construcción y {$property.areaTotal} m2 de terreno</h6>
               <!-- <h6>{property.areaTotal} m2 de terreno</h6>               -->
               <p class="descSelec">{$property.description}</p>
            </div>
   <!-- Botones -->
            <div class="folowLink">
               <a href={$property.urlProp} target='_blank'>Seguir Link en Otra Ventana</a>        
            </div>
            <div class="optionsSend" >

   <!-- Buscar interesados -->
               <button class="btnCommon btnWhatsApp" on:click={() => checkedTCont(checkedContacts, $property)}>Enviar por WhatsApp</button>
               <button class="btnCommon" on:click={findCustomers}>Buscar Interesados</button>
            </div>
   <!-- resto -->
            <div class="backAnt">
               <button class="btnCommon btnCancel" on:click={onCancel}>Regresar</button>
            </div>
            <!-- Material icons -->
            <div>
               <div class="iconContent">
                  <i on:click = {editProperty} class="material-icons edit">edit</i>
                  <!-- <i on:click={viewProperty} class="material-icons irLink"> pageview </i> -->
                  <i on:click = {deleteProperty} class="material-icons delete" >delete_forever</i>
               </div>
            </div>
         </div>


   <!-- Tarjeta de clientes interesados -->
         {#if seeCont}
            <div class="conInt">
               {#each $conInterest as item}
                  <input type="checkbox">
                  <div>{item.name} {item.lastname}</div>
                  <div>{item.locaProperty}</div>
                  <div>{item.tagsProperty}</div>
                  <div>{item.budge}</div>
                  <div>{item.rangeProp}</div>
               {/each}
            </div>
         {/if}

 <style>

    .selectProduct{
       width: 80%;
       padding: 15px 15px;
      }
      
      .selectImage{
         max-width: 95%;
      }

      .conInt{
         width: 300px;
         padding: 5px 10px;
         border: solid 2px;
         border-radius: 5px;
      }
 </style>
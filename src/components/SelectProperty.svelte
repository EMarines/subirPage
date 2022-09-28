<script>
      import { property } from '../stores/stores'


   // Declaraciones
      let checkedContacts = [];
      let currentId;



   // Funciones
      // checked
         function checkedTCont(checkedContacts, $property ){

         }

      // Edit
         function editProperty(property) {

         }

      // Delete
         function deleteProperty(property) {

         }

      // Buscar Interesados
         function findCustomers() {

         }

      // onCancel
         function onCancel() {
            location.href = "/propiedades"
         }

</script>

<div class=" container selectProduct">   
        
   <div class="selectImage">
     <img src={$property.urlImage} alt={$property.nameProperty}>
   </div>            
   <div class="descSelect">
     <h4> {$property.claveEB} {$property.nameProperty}</h4>
     <h5>{$property.selectTP} en Col. {$property.colonia} al {$property.locaProperty} de la ciudad.</h5>
     <h6>Precio: {$property.price}</h6>
     <div>
       <h6>{$property.beds} Recamaras, {$property.bathroom} Baños y {$property.halfBathroom} Medio Baño</h6>
      
     </div>
       <h6>{$property.areaBuilding} m2 de construcción y {$property.areaTotal} m2 de terreno</h6>
       <!-- <h6>{property.areaTotal} m2 de terreno</h6>               -->
       <p class="descSelec">{$property.description}</p>
     </div>
     <div class="folowLink">
       <a href={$property.urlProp} target='_blank'>Seguir Link en Otra Ventana</a>        
     </div>
     <div class="optionsSend" >

       <button class="btnCommon btnWhatsApp" on:click={() => checkedTCont(checkedContacts, $property)}>Enviar por WhatsApp</button>
       <button class="btnCommon" on:click={() => findCustomers}>Buscar Interesados</button>
     </div>
     <div class="backAnt">
       <button class="btnCommon btnCancel" on:click={onCancel}>Regresar</button>
     </div>
   <!-- Material icons -->
     <div class="iconContent">
       <i on:click={editProperty}
         class="material-icons edit">edit</i>
       <!-- <i on:click={viewProperty} class="material-icons irLink"> pageview </i> -->
       <i on:click={deleteProperty} class="material-icons delete" >delete_forever</i>
     </div>
 </div>

 <style>

    .selectProduct{
       width: 80%;
       padding: 15px 15px;
      }
      
      .selectImage{
         max-width: 95%;
      }
 </style>
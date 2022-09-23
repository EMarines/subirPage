<script>
	import { db } from '../assets/db';
  import Search from './Search.svelte';
	  import { contact, systStatus } from '../stores/stores.js';
    import { filtContPropInte } from '../assets/funcions/filProperties'
    import { formatDate, searchProperty } from '../assets/funcions/sevralFunctions';


  // Declaraciones
    let mostImageProp = false;
    let imgToShow;
    let mostPoperties = false;
    let isActivated = false;
    let searchTerm;
    let editStatus= false;
    let message;
    let filteredContacts = [];
    // let systStatus = "start";
    let commInpuyBinnacle;
    let mostButtons = false;


  // Funciones
    // Muestra la imagen de propiedad cuendo el punero está sobre la clave
      function mouseOverProp(itemP) {
        mostImageProp = true;
        imgToShow = (db.properties).filter((e) => e.claveEB === (itemP))
        console.log("estas", imgToShow )
      };
    
    // Desaparece la imagen de la propiedad al salir de su area
      function mouseLeaveProp() {
        mostImageProp = false
        console.log("saliste")
      };

    // Abre el link de la página web
      function visitPageProp(link) {
        window.open(link)
      };

    // Mostrar Schedule
      function addSchedule(){
        console.log("estas en addSchedule")
        isActivated = true;
      }
    // Muestra search Properties
      function mostSearch () {
        mostPoperties = true;
      }
    // Cancel Button ""start""
       const onCancel = () => {
            editStatus = false;
            // $contact=[];
            searchTerm = "";
            message = "";
            filteredContacts = [];
            $systStatus = "start";
          };

    // Muestra botones WhatsApp y Guardar Info
        function seleTypeAction (){
                mostButtons = true;
                mostPoperties = false;
              }

    // Edit Contact
        function editContact($contact) {
          console.log($contact)
        }

    // Delete Contact
        function deleteContact() {
          console.log("Borraste de mentiras al contacto", $contact.name)
        }

    

</script>



<div class="container">
   <div>
     <h4>Contacto</h4>                  
     <h2>{$contact.name} {$contact.lastname}</h2>
     <p>Fecha Alta: {formatDate($contact.createdAt)}</p> 
     <p>Busca  {$contact.selecTP}, de {$contact.numBeds} recámaras,  {$contact.numBaths} baños y {$contact.numParks} estacionamientos </p>
     <p>Presupuesto tope: {$contact.budget}</p>
     <p>Teléfono: <strong>{$contact.telephon}</strong> ---- Email: <strong>{$contact.email}</strong> </p>   
     <p>Preferencias: {($contact.tagsProperty).join(',  ')}</p>
     <p> Ubicaciones: {($contact.locaProperty).join(',  ')}</p>

     <div class="propMost" >
       <p> Propiedades enviadas:</p>
       <div class="mostImage">
         {#each $contact.sendedProperties as itemP}           
            <!-- svelte-ignore a11y-mouse-events-have-key-events -->
            <p value = {itemP} on:mouseenter = {mouseOverProp (itemP)} on:mouseout ={mouseLeaveProp} on:dblclick = {visitPageProp(imgToShow[0].urlProp)}>{itemP}</p> 
         {/each}
       </div>
       </div>
</div>
      <div>
        {#if mostImageProp}        
          <h3>{imgToShow[0].nameProperty}</h3>
          <img class="imgPropContSelect" height = "200" src={imgToShow[0].urlImage} alt={imgToShow[0].claveEB}> 
        {/if}           
      </div>

<p>{$contact.contactStage}</p>
<p>{$contact.comContact}</p>

<div>
  <button class="btnCommon" on:click= {addSchedule($contact)}>Programar Evento</button>
  <!-- {#if isActivated}
    <AddToSchedule on:closeIt = {close}/>
    {/if} -->
    <button class="btnCommon" on:click= {filtContPropInte}>Ver Propiedades de Interes</button>
    <button class="btnCommon" on:click= {mostSearch}> Buscar Propiedad</button>
    {#if mostPoperties}
    <Search bind:searchTerm on:input={searchProperty} />
    {/if}
  </div>
  
  <div>
    <button class="btnCommon btnCancel" on:click={onCancel}>Cancelar</button>
  </div>
<!-- </div> -->
 
     
     <div>
       <div>
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
         <textarea on:keypress={seleTypeAction} class="texArea" cols="65" rows="5" bind:value = {commInpuyBinnacle} placeholder ="Ingresa un comentario"/> 
           
         <!-- <div>
           {#if commInpuyBinnacle || checkedProperty.length >= 1 }
             <button  class="btnCommon btnWhatsApp" on:click={checkedT}>Enviar WhatsApp</button>
             <button class="btnCommon" on:click={saveNote}>Guardar Info</button>
           {/if}
       </div> -->
     </div>
     <div class="iconContent">
       <i on:click={editContact($contact)} class="material-icons edit">edit</i>
       <i on:click={deleteContact($contact)} class="material-icons delete">delete_forever</i>                               
   </div> 
 </div>
</div>  


<style>

  .mostImage{
    margin: 0 auto;
    width: 150px;
  }



</style>
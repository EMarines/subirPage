<script>
// @ts-nocheck

  // Importaciones
    import { db } from '../assets/db';
    import Search from './Search.svelte';
    import AddToSchedule from './AddToSchedule.svelte';
    import CardProperty from './CardProperty.svelte';
    import { contact, systStatus, proInterest, property } from '../stores/stores.js';
    import { filtContPropInte } from '../assets/funcions/filProperties'
    import { formatDate } from '../assets/funcions/sevralFunctions';
    import { searchProperty } from '../assets/funcions/search'
    import { scale } from 'svelte/transition';
    import { expoInOut } from 'svelte/easing';

  // Declaraciones
    let mostImageProp = false;
    let imgToShow;
    let mostPoperties = false;
    let isActivated = false;
    let searchTerm;
    let editStatus= false;
    let message;
    let filteredProperties = [];
    let commInpuyBinnacle;
    let mostButtons = false;
    let proInt = [];
    let contCheck = [];
    let showProp = false;
    let mosrBusq = false;
    let listToRender = [];

  // Funciones
    // Muestra la imagen de propiedad cuendo el punero está sobre la clave
      function mouseOverProp(itemP) {
        mostImageProp = true;
        imgToShow = (db.properties).filter((e) => e.claveEB === (itemP))
        // console.log("estas", imgToShow )
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
        mosrBusq = true;
        console.log($systStatus)
      };

    // Input filter ""searchContact""
        const searProp = () => {
          showProp = true;
              return filteredProperties = db.properties.filter((propety) => {
              let contInfo = (propety.nameProperty + " " + propety.colonia + " " + propety.claveEB).toLowerCase();
             return contInfo.includes(searchTerm.toLowerCase());
          });  
        };


    // Muestra las propiedades que le podrían intesar
      function fitProp($contact) {
        showProp = true;
        filtContPropInte($contact)
      };

    // Cancel Button ""start""
      const onCancel = () => {
          editStatus = false;
          // $contact=[];
          searchTerm = "";
          message = "";
          filteredProperties = [];
          $systStatus = "start";
      };

    // Muestra botones WhatsApp y Guardar Info
        function seleTypeAction (){
          mostButtons = true;
          mostPoperties = false;
        }

    // Edit Contact
        function editContact($contact) {
          $systStatus = "contEditing"
          console.log($contact)
        }

    // Delete Contact
        function deleteContact() {
          console.log("Borraste de mentiras al contacto", $contact.name)
        }

    // Cerrar Shedule                       
        function close(){
          isActivated = false;
        }
        
    // Funciones del WA
        function selectProduct(){
          console.log(contCheck)
        };

        function sendWA(){
          console.log(contCheck)
          let link = (`https://api.whatsapp.com/send?phone=521${$contact.telephon}&text=${contCheck}`)
          window.open(link)
        };

        function saveNote(){
          console.log(contCheck)
        };

</script>

    <!-- Datos personales del contacto -->
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
    <!-- Muestra las propiedes enviadas -->
              <p> Propiedades enviadas:</p>
                <div class="mostImage">
                  {#each $contact.sendedProperties as itemP}           
                      <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                      <p value = {itemP} on:mouseenter = {()=>mouseOverProp (itemP)} on:mouseout ={mouseLeaveProp} on:dblclick = {() => visitPageProp(imgToShow[0].urlProp)}>{itemP}</p> 
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
    <!-- Botones -->
          <div>
            <button class="btnCommon" on:click = {() => addSchedule()}>Programar Evento</button>
              {#if isActivated}
                <AddToSchedule on:closeIt = {close}/>
              {/if}
              <button class="btnCommon" on:click = { () => fitProp($contact)}>Ver Propiedades de Interes</button>
              <button class="btnCommon" on:click = {mostSearch}> Buscar Propiedad</button>
              {#if mosrBusq}
                <Search bind:searchTerm on:input={searProp} />
              <!-- <Search bind:searchTerm on:input={searchContact} />  -->
              {/if}
          </div>
            
          <div>
            <button class="btnCommon btnCancel" on:click={onCancel}>Cancelar</button>
          </div>

          <div>
            <div>
              <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                  <textarea on:keypress={seleTypeAction} class="texArea" cols="65" rows="5" bind:value = {commInpuyBinnacle} placeholder ="Ingresa un comentario"/> 
    <!-- Enviar WA o guardar nota para bitácora -->
                  <div>
                    <!-- {#if commInpuyBinnacle || checkedProperty.length >= 1 } -->
                      <button  class="btnCommon btnWhatsApp" on:click={sendWA}>Enviar WhatsApp</button>
                      <button class="btnCommon" on:click={saveNote}>Guardar Info</button>
                    <!-- {/if} -->
                </div>

    <!-- Iconos Editar y Borrar -->
            </div>
              <div class="iconContent">
                <i on:click={editContact} class="material-icons edit">edit</i>
                <i on:click={deleteContact} class="material-icons delete">delete_forever</i>                               
              </div> 
          </div>
        </div> 

    <!-- Propiedades de interés -->
              {#if showProp} 
                <main id="bookshelf">
                  {#each filteredProperties as item}
                  <section class = "property" on:click={selectProduct} transition:scale={{duration: 500, easing: expoInOut}}>                  
                    <input type="checkbox" value={item.urlProp} class="form-check" bind:group={contCheck}/>	
                    <CardProperty {...item} />
                  </section>
                  {/each}
                </main>
              {/if}

<style>

  h3{
    color: blue;
  }
  .mostImage{
    margin: 0 auto;
    width: 150px;
  }

  .property { 
      width: 280px;
      min-height: 354px;
      border: 4px solid #BA5626; 
      border-radius: 3px;
      box-shadow: 1px 1px 0 black;
      margin: 5px;
      background-color: #e4ddcf;
   }

   main#bookshelf {
      width: 100%;
      margin: 10px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: center; 
   }



</style>
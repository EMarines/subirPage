<script>
  // @ts-nocheck

  // Importaciones
    import { db, dbContacts, dbProperties } from '../firebase';
    import { collection, deleteDoc, doc} from 'firebase/firestore';
    import Search from './Search.svelte';
    import AddToSchedule from './AddToSchedule.svelte';
    import CardProperty from './CardProperty.svelte';
    import { contact, systStatus, proInterest, property } from '../stores/stores.js';
    import { filtContPropInte } from '../assets/funcions/filProperties'
    import { formatDate, copyToPaste } from '../assets/funcions/sevralFunctions';
    import { scale } from 'svelte/transition';
    import { expoInOut } from 'svelte/easing';
    // import { binnSave } from '../assets/funcions/binnSaver'
    import AltaContacto from '../lib/AltaContacto.svelte';
    import { searchProperty } from '../assets/funcions/search'
    import { binnSave } from '../assets/funcions/itemSaver';

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
    let contCheck = [];
    let showProp = false;
    let mosrBusq = false;
    let proInt = [];
    let listToRender = [];
    let showAltCont = false;

    console.log($systStatus)

  // Funciones
    // Muestra la imagen de propiedad cuendo el punero está sobre la clave
      function mouseOverProp(itemP) {
        mostImageProp = true;
        imgToShow = dbProperties.filter((e) => e.claveEB === (itemP))
        // console.log("estas", imgToShow )
      };
    
    // Desaparece la imagen de la propiedad al salir de su area
      function mouseLeaveProp() {
        mostImageProp = false
        // console.log("saliste")
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
        // console.log($systStatus, $contact)
      };

    // Input filter ""searchContact""
        const searProp = () => {
          showProp = true;
              return $proInterest = dbProperties.filter((propety) => {
              let contInfo = (propety.nameProperty + " " + propety.colonia + " " + propety.claveEB).toLowerCase();
              return contInfo.includes(searchTerm.toLowerCase());
          });  
        };


    // Muestra las propiedades que le podrían intesar
      function fitProp($contact) {
        // console.log($contact)
        filtContPropInte($contact)
        showProp = true;
      };

    // Cancel Button ""start""
      const onCancel = () => {
          editStatus = false;
          filteredProperties = [];
          $systStatus = "start";
      };

    // Muestra botones WhatsApp y Guardar Info
    
        function seleTypeAction (){
          mostButtons = true;
          mostPoperties = false;
        }

    // Edit Contact
        function editContact() {
          $systStatus = "contEditing"
        };

    // Delete Contact
        async function deleteContact() {
          if(confirm("Deseas eleiminar definitivamente al contacto?")){
            // console.log("Borraste al contacto", $contact)
            await deleteDoc(doc(db, "contacts", $contact.id))
            editStatus = false;
            window.location.href = "/";
          }  
        };

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
          // text = contCheck;
          // copyToPaste(contCheck)
          let link = (`https://api.whatsapp.com/send?phone=52${$contact.telephon}&text=${contCheck}`)
          window.open(link);
          binnSave()
        };
    
    // Guarda la nota
        function saveNote(){
          console.log(contCheck)
        };


 
</script>

    <!-- Datos personales del contacto -->
      <main>
        {#if $systStatus === "contSelect"}
          <div class="container">

            <div>
              <h4>Contacto</h4>                  
              <h2>{$contact.name} {$contact.lastname}</h2>
              <p>Fecha Alta: {formatDate($contact.createdAt)}</p> 
              <p>Busca  {$contact.selecTP}, de {$contact.numBeds} recámaras,  {$contact.numBaths} baños y {$contact.numParks} estacionamientos </p>
              <p>Presupuesto tope: <strong>{$contact.budget}</strong> : Tipo de propiedad buscada: <strong>{$contact.selecTP}</strong></p>
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
            <button class="btnCommon" on:click = {() => addSchedule($contact)}>Programar Evento</button>
              {#if isActivated}
                <AddToSchedule {...$contact} on:closeIt = {close} />
              {/if}
              <button class="btnCommon" on:click = { () => fitProp($contact)}>Ver Propiedades de Interes</button>
              <button class="btnCommon" on:click = {mostSearch}> Buscar Propiedad</button>
              {#if mosrBusq}
                <Search bind:searchTerm on:input={searProp} />
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
                  <i on:click = {editContact} class="material-icons edit">edit</i>
                  <i on:click={deleteContact} class="material-icons delete">delete_forever</i>                               
                </div> 
            </div>
          </div> 

    <!-- Propiedades de interés -->
              {#if showProp} 

                <main id="bookshelf">
                  <h3>Propiedades encontradas: {$proInterest.length}</h3>
                                   
                  {#each $proInterest as item}
                    <section class = "property" on:click={selectProduct} transition:scale={{duration: 500, easing: expoInOut}}>                  
                      <input type="checkbox" value={item.urlProp} class="form-check" bind:group={contCheck}/>	
                      <CardProperty {...item} />
                    </section>
                  {/each}
                  {#if $proInterest.length === 0}
                      <h3>"No hay Propiedades para este contacto"</h3>
                  {/if}
                </main>
              {/if}
        {/if}

    <!-- Muestra el form de Alta de Contacto -->
        
        
        </main>
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
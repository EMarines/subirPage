<script>
// @ts-nocheck
   
   // Importaciones
      import { createEventDispatcher } from 'svelte';
      import { fly, fade } from 'svelte/transition';
      import { contact, todo, systStatus } from '../stores/stores';
      import { binnSave } from '../assets/funcions/itemSaver'
      import { now } from 'svelte/internal';

      
   // Declaraciones
         const dispatch = createEventDispatcher();

         let nombre = (`${$contact.name} ${$contact.lastname}`)
         let tarea = [];
         let task = [];
         let fechaVista= new Date(),
         endTask = fechaVista.getTime();
         console.log(endTask)

         tarea = {
            task: "",
            isComplete: "",
            createdAt: "",
            timeTask: "", 
            notes: "",
            user: ""        
         };
   // *- Funciones
      // Close
            function close() {
               dispatch('closeIt');            
               $systStatus = "contSelect";
               $todo="";
            };
      
      // Agrega la tarea
            const addTodo = async() => {
               $systStatus= "todoAdding"
               task = nombre;
               tarea = {...tarea, endTask}
               $todo = {...tarea, task}
               binnSave($systStatus, $todo)
               console.log($todo)
               close();
               // $todo = "";
            };
                 
      // Agrega la tarea con el "Enter"
            const keyIsPressed = (event) => {
               if (event.key ==="Enter"){
                  addTodo()
               };
            };

</script>

   <body>

      <div class="background" transition:fade on:click ={close}/>
         <div class="pop-up" transition:fly>         
            <div>
               <input type="text" class="inputTask"  placeholder = "Agrega una Tarea o Cita" bind:value = {nombre} />
            </div>
            <div class="contDate">
               <input type="time"class="inputDate" bind:value = {tarea.timeTask} />
               <input type="date" class="inputDate" bind:value = {tarea.endTask} /> 
            </div>
            <div>
               <textarea name="notes"  cols="56" rows="5" bind:value = {tarea.notes} placeholder ="descripci??n"></textarea>
            </div>         
            <div>
               <button class="btnShedule" on:click={addTodo}>Guardar</button>
               <button class="btnShedule" on:click={close}>Cancelar</button>
            </div>
         </div>  
      </body>  
      <svelte:window on:keydown={keyIsPressed}/>

<style>


   .background {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      z-index: 2;
   }

   .pop-up {
        position: fixed;
        height: auto;
        width: 550px;
        color: white;
        padding: 15px;
        background-color: #37474f;
        border: solid 5px;
        z-index: 5;
	    align-items: center;
       border-radius: 8px;
    }

    
	.inputTask {
      font-size: 25px;
		width: 500px;
      height: 50px;
      margin-bottom: 10px;
      border-radius: 8px;
	}

    .inputDate {
        font-size: 30px;
        padding: 25px;
        width: 300px;
        height: 50px;
        margin-bottom: 10px;
        border-radius: 8px;
    }

    .btnShedule{
      width: 150px;
      height: 30px;
      border-radius: 8px;
      font-size: 20px;
      /* color: rgb(208, 220, 208); */
    }



</style>
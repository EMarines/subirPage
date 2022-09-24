<script>   
   // Importaciones
      import { createEventDispatcher } from 'svelte';
      import { fly, fade } from 'svelte/transition';
      import { contact, todo, systStatus } from '../stores/stores';
      
   // Declaraciones
      let nombre = (`${$contact.name} ${$contact.lastname}`)
      let task = (`${$contact.name} ${$contact.lastname}`) 
      // let endTask = (+new Date());

   // *- Funciones
         const dispatch = createEventDispatcher();

         function close() {
            dispatch('closeIt')
            $systStatus = "start"
            // window.location.href='/'
         }
   
   // console.log(endTask)
         const addTodo = async() => {
            // if (todo.task !== ""){
            //    await db.collection("todos").doc().set({ ...todo, createdAt: Date.now() });
            //    error = "";
            //    close();
            // } else {
            //    error = "Task is empty"
            // };
            //    todo = {};
         };
   
   // Agrega la tarea con el "Enter"
         const keyIsPressed = (event) => {
            if (event.key ==="Enter"){
               addTodo()
            };
         };

   </script>
   
   <div class="background" transition:fade on:click ={close}/>

      <div class="pop-up" transition:fly>         
         <div>
            <input type="text" class="inputTask"  placeholder = "Agrega una Tarea o Cita" bind:value = {task} />
         </div>
         <div class="contDate">
            <input type="time"class="inputDate" bind:value = {$todo.timeTask} />
            <input type="date" class="inputDate" bind:value = {$todo.endTask} /> 
         </div>
         <div>
            <textarea name="notes" id="" cols="56" rows="5" bind:value = {$todo.notes} placeholder ="descripción"></textarea>
         </div>
         
         <div>
            <button on:click={addTodo}>Guardar</button>
            <button on:click={close}>Cancelar</button>
         </div>
      </div>   
 
      
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
    }

    
	.inputTask {
      font-size: 25px;
		width: 500px;
      height: 50px;
      margin-bottom: 10px;

	}

    .inputDate {
        font-size: 30px;
        padding: 25px;
        width: 300px;
        height: 50px;
        margin-bottom: 10px;
    }



   </style>
<script>
   import schedule from '../assets/images/schedule.png';
   import { fly, fade } from 'svelte/transition';
   import { db } from '../assets/db';
   import { dbBinnacle } from '../firebase'
   
   let error = "";
   let ordeTodos = [];

// Descarga la Base de todos
   //  db.collection("todos").onSnapshot((querySnapshot) => {
   //          let docs = [];
   //          querySnapshot.forEach(async(doc) => {
   //             docs.push({ ...doc.data(), id: doc.id });
   //          });
   //          todos = [...docs];                         
   //          ordeTodos = todos.sort((b, a)  => {return new Date(b.endTask) - new Date(a.endTask)}) 
   //       });

// Agrega tarea nueva
   // const addTodo = async() => {
   //    if (todo.task !== ""){
   //       await db.collection("todos").doc().set({ ...todo, createdAt: Date.now() });
   //       error = "";
   //    } else {
   //       error = "Task is empty"
   //    };
   //       todo = {};
   //    };

// Edita la tarea 

   // async function markTodoAsComplete() {     

   const markTodoAsComplete = async (item) => {
      item.isComplete = !item.isComplete
      // await db.collection("todos").doc(item.id).update(item);
      //   window.location.href='/'
   };

	function addTodo(){

	}



// Elimina la tarea
   // const deleteTodo = async (item) => {
   //    let confDelete = confirm("Quieres borrarlo definitivmente?")
   //    if(confDelete == true){
   //       await db.collection("todos").doc(item.id).delete();
   //    }
   // };

// Agrega la tarea con el "Enter"
   // const keyIsPressed = (event) => {
   //    if (event.key ==="Enter"){
   //       addTodo()
   //    };
   // };
 
</script>

<h1>Agenda</h1>
<img src={schedule} alt="schedule" class="imgTitle">

<!-- <button on:click={getData}>click</button> -->

<div class="container">

   
   <!-- <div class="background" transition:fade on:click ={close}/> -->

      <div class="pop-up" transition:fly>         
         <div>
            <!-- <input type="text" class="inputTask" cols="56" rows="1"  placeholder = "Agrega una Tarea o Cita" bind:value = {todo.task} /> -->
         </div>
         <div class="contDate">
            <!-- <input type="time"class="inputDate" bind:value = {todo.timeTask} />
            <input type="date" class="inputDate" bind:value = {todo.endTask} />  -->
         </div>
         <div>
            <!-- <textarea name="notes" id="" cols="56" rows="5" bind:value = {todo.notes} placeholder ="descripción"></textarea> -->
         </div>
         
         <div>
            <!-- <button on:click={addTodo}>Guardar</button>
            <button on:click={close}>Cancelar</button> -->
         </div>
      </div>   


<!-- <Schedule /> -->
<h3>Tareas</h3>
      {#each dbBinnacle as item}
         <h1>bitácora:gg {item.date} {item.comment}</h1>
      {/each}
<ol>
   {#each db.todos as item}
      {#if !item.timeTask}
         <li class="schedule" class:complete={item.isComplete}>
            <span>
               <!-- <button on:click={ () => markTodoAsComplete(item) }>✔</button>
               <button on:click={ () => deleteTodo(item) }>✖</button> -->
            </span>
            <spam>
               {item.endTask} -*-
               {item.task} -*-
               {#if item.notes}
                  {item.notes} 
               {/if}          
            </spam>        
         </li>
      {/if}
   {:else}
      <p>No Hay Tareas Pendientes</p>
   {/each}
      <p class="error">{error}</p>
</ol>
<h3>Agenda</h3>
<ol>
   {#each db.todos as item}
      {#if item.timeTask}
         <li class="schedule" class:complete={item.isComplete}>
            <span>
               <!-- <button on:click={ () => markTodoAsComplete(item) }>✔</button>
               <button on:click={ () => deleteTodo(item) }>✖</button> -->
            </span>
            <spam>
               {item.timeTask} -*-
               {item.endTask} -*-
               {item.task} -*-
               {#if item.notes}
                  {item.notes} 
               {/if}            
            </spam>        
         </li>
      {/if}
   {:else}
      <p>No Hay Tareas Pendientes</p>
   {/each}
      <p class="error">{error}</p>
</ol>
</div>

<style>
   .schedule {
        /* width: 550px; */
        color: #651fff;
        font-size: 1.4rem;
        text-align: left;
    }

    .imgTitle{
      max-width: 148px;
   }


	

</style>
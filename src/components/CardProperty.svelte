   <script>
      import { property, proInterest, systStatus } from '../stores/stores';
      import { db } from '../assets/db';
      import { scale } from 'svelte/transition';
	   import { expoInOut } from 'svelte/easing';

      let checkedProperty=[];
      let listToRender=[];

      if($systStatus === "start"){
         console.log($systStatus)
         proInterest.set(db.properties) 
      } 
      


      function selectProduct(){

      }
   </script>
   <main id="bookshelf">
      <!-- {@debug listToRender} -->
      {#each $proInterest as item}
         <section on:click={selectProduct($property)} class="book" transition:scale={{duration: 500, easing: expoInOut}}>                  
            <section class="book-top-info" >
               <figure class="bkcont" >
                  <img src={item.urlImage} alt={item.claveEB} class="bkcover" >
                  <div class="language">{item.claveEB}</div>
                  <figcaption>{item.nameProperty}</figcaption>
               </figure>
         </section> 
      
         <section class="book-bottom-links">
            <section class="from-pariyatti available-at">
               <div class="buy-options-cont">
                  <div>{item.beds} Recámaras</div>
                  <div>{item.bathroom} Baños</div>
                  <div>{item.park} Estacionamientos</div>
                  <div>{item.areaBuilding} m2 de Contruccion</div>
                  <div>{item.areaTotal} m2 de Terreno</div>
                  <br>
                  <div>
                     Precio $: {item.price}
                     <!-- <input type="checkbox" value={property.nameProperty} class="form-check" bind:group={checkedProperty}>  -->
                     <input type="checkbox" value={item} class="form-check" bind:group={checkedProperty}>                  
                  </div>
               </div>
            </section>
          </section>                  
        </section>
      {/each}
   </main>


<style>

   main#bookshelf {
      width: 100%;
      margin: 10px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: center; 
   }

   .book { 
      width: 280px;
      min-height: 354px;
      border: 4px solid #BA5626; 
      border-radius: 3px;
      box-shadow: 1px 1px 0 black;
      margin: 5px;
      background-color: #e4ddcf;
   }

   .book-top-info {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      border-bottom: 3px solid #BA5626;
   }

   .buy-options-cont {
      padding: 5px ;
   }

   /* Book Layout */
   .bkcont {
      width: 100%;
      text-align: center;
   }

   .bkcover {
      width: 95%;
      height: 150px;
      margin-bottom: 5px;
      box-shadow: 0 0 3px gray;
   }

   div.language {
      font-size: .8em;
      margin: 5px 0;
   }

   figcaption {
      text-align: center;
      width: 90%;
      padding: 3px 10px;
      height: 36px;
      font-weight: bold;
   }


   /* Book Links Layout */
   /* a { cursor: pointer; } */

   .book-bottom-links {
   width: 100%;
   display: flex;
   align-items: flex-start;
   justify-content: center;  
   }

   .available-at {
   width: 100%;
   flex-direction: column;
   align-items: center;
   justify-content: center; 
   /*   background-color: #fff; */
   }

</style>


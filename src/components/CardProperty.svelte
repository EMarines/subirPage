   <script>
      import { property, proInterest, systStatus } from '../stores/stores';
      import { db } from '../assets/db';
      import { scale } from 'svelte/transition';
	   import { expoInOut } from 'svelte/easing';

      export let urlImage, claveEB, nameProperty, beds, bathroom, park, areaBuilding, areaTotal, price

      // let checkedProperty=[];
      // let listToRender=[];

      if($systStatus === "start"){
         console.log($systStatus)
         proInterest.set(db.properties) 
      } 
      


      function selectProduct(){

      }
   </script>
   <main >
      <!-- {@debug listToRender} -->
      <!-- {#each $proInterest as item}
         <section on:click={selectProduct($property)} class="book" transition:scale={{duration: 500, easing: expoInOut}}>                   -->
            <section class="book-top-info" >
               <figure class="bkcont" >
                  <img src={urlImage} alt={claveEB} class="bkcover" >
                  <div class="language">{claveEB}</div>
                  <figcaption>{nameProperty}</figcaption>
               </figure>
         </section> 
      
         <section class="book-bottom-links">
            <section class="from-pariyatti available-at">
               <div class="buy-options-cont">
                  <div>{beds} Recámaras</div>
                  <div>{bathroom} Baños</div>
                  <div>{park} Estacionamientos</div>
                  <div>{areaBuilding} m2 de Contruccion</div>
                  <div>{areaTotal} m2 de Terreno</div>
                  <br>
                  <div>
                     Precio $: {price}
                     <!-- <input type="checkbox" value={property.nameProperty} class="form-check" bind:group={checkedProperty}>  -->
                     <!-- <input type="checkbox" value={item} class="form-check" bind:group={checkedProperty}>                   -->
                  </div>
               </div>
            </section>
          </section>                  
        <!-- </section>
      {/each} -->
   </main>


<style>



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

